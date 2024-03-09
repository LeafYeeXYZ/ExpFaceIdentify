// 这个文件用于生成实验试次

/**
 * 实验采取 “学习—再认” 范式进行。每个被试需完成 3 个群体所对应的 3 个 block 的实验，每个 block 都分为 “学习阶段” 和 “测验阶段”
 * 
 * 在学习阶段，给被试呈现 16 张照片 （男女各一半，女性照片为无关刺激；照片分属 4 人，每人 4 张），让被试判断照片中人物的性别，用鼠标点击对应的 “男性” 或 “女性” 按钮，并且要尽可能地记住照片上的面孔
 * 
 * 在测验阶段， 给被试呈现 24 张照片（都为男性；照片分属 6 人，每人 4 张；其中两人为学习阶段中的男性，学习和测验阶段所有照片不重复），要求被试需对照片中的人物是否在学习阶段见过进行辨认，用鼠标点击对应的 “这个人出现过” 或 “这个人没出现过” 按钮
 * 
 * 无论学习阶段还是测验阶段， 照片的最长呈现时间为 4s，若超时或被试点击按钮后照片立即消失，屏幕出现黑色十字 0.5s 作为提示。本实验中，照片呈现视角不做严格限制，但要求被试时刻注视屏幕中央。学习阶段和测验阶段间隔 30s，期间让被试进行三位数减法（指导语为 “为了确保您在认真进行实验，请计算以下算式，并选择正确的答案”）。每个 block 之间，被试有 1min 的休息时间
 * @author 小叶子
 */

// 导入刺激路径
import stimulus from './stimulus.js'
// stimulus.cnStar/krStar/cnNorm.m[0-5][0-7]
// stimulus.cnStar/krStar/cnNorm.f[0-1][0-3]
// 导入设置
import config from './config.js'
import { exp } from './index.js'

/**
 * 插入每个试次前的间隔十字
 * @param {array} timeline 
 * @returns 插入后的时间线
 */
function insertDurationTrial(timeline) {
  let response = []
  for (const value of timeline) {
    response.push({
      type: jsPsychHtmlKeyboardResponse,
      choices: "NO_KEYS",
      stimulus: `
        <img src="/cross.jpg" style="width: 200px; height: 200px; margin: 20px 0;">
        <p>&nbsp;</p>
        <p>&nbsp;</p>
      `,
      trial_duration: config.TRIAL_DURATION
    }, value)
  }
  return response
}

// 生成学习试次的类
class studyTrial {
  constructor(stm) {
    this.type = jsPsychHtmlButtonResponse
    this.stimulus = `
      <img src="${stm}" style="width: 200px; height: 200px; margin: 20px 0;">
      <p>请尽量记住图中人物</p>
      <p>并尽快判断人物的性别</p>
    `
    this.choices = ['男性', '女性']
    this.on_start = function () {
      exp.pluginAPI.setTimeout(() => {
        exp.finishTrial()        
      }, config.STUDY_IMAGE_DURATION)
    },
    this.data = {
      trialType: 'study'
    }
  }
  static push(timeline, stm) {
    const trial = new studyTrial(stm)
    timeline.push(trial)
  }
}

// 生成再认试次的类
class recogTrial {
  constructor(stm, isTarget, block) {
    this.type = jsPsychHtmlButtonResponse
    this.stimulus = `
      <img src="${stm}" style="width: 200px; height: 200px; margin: 20px 0;">
      <p>该人物是否在上半部分出现过</p>
    `
    this.choices = ['出现过', '没出现过']
    this.data = {
      shouldSave: true,
      correctResponse: isTarget ? '出现过' : '没出现过',
      stimulusType: block,
      trialType: 'recog'
    }
  }
  static push(timeline, stm, isTarget, block) {
    const trial = new recogTrial(stm, isTarget, block)
    timeline.push(trial)
  }
}

/**
 * 生成随机的三位数减法
 * @returns {array} 随机生成的算术题
 */
function makeCalc() {
  let res = [[], [], [], [], [], [], [], [], [], []]
  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < 3; j++) {
      if (j === 0) {
        res[i].push({
          name: Math.random().toString(36),
          type: 'html',
          prompt: '请计算下面的算式，并填写答案'
        })
      } else {
        res[i].push({
          name: Math.random().toString(36),
          type: 'text',
          prompt: `${Math.floor(Math.random() * 500 + 500)} - ${Math.floor(Math.random() * 500)} =`,
          input_type: 'number',
          required: true
        })
      }
    }
  }
  return res
}

/**
 * block 生成函数
 * @param {'cnStar' | 'krStar' | 'cnNorm'} block block 的对应人群 
 * @returns {array} timeline
 */
function generateBlock(block) {
  // 生成时间线
  let timeline = []
  // 预加载图片
  timeline.push({
    type: jsPsychPreload,
    images: [...stimulus[block].f[0], ...stimulus[block].f[1], ...stimulus[block].m[0], ...stimulus[block].m[1], ...stimulus[block].m[2], ...stimulus[block].m[3], ...stimulus[block].m[4], ...stimulus[block].m[5], './cross.jpg']
  })
  // 标记目标男性
  const targetM = []
  for (let i = 0; i < 2; i++) {
    targetM.push(Math.floor(Math.random() * 6))
    while (i === 1 && targetM[0] === targetM[1]) {
      targetM[1] = Math.floor(Math.random() * 6)
    }
  }

  // 学习阶段
  let tlStudy = []
  timeline.push({
    type: jsPsychHtmlButtonResponse,
    stimulus: `
      <p>请尽量记住图中人物</p>
      <p>并尽快判断人物的性别</p>
      <p>每张照片最多呈现 4s</p>
      <p>超时则视为回答错误</p>
    `,
    choices: ['开始']
  })
  // 女性
  for (let value of stimulus[block].f) {
    for (let subValue of value) {
      studyTrial.push(tlStudy, subValue)
    }
  }
  // 男性
  for (let i = 0; i < 4; i++) {
    studyTrial.push(tlStudy, stimulus[block].m[targetM[0]][i])
    studyTrial.push(tlStudy, stimulus[block].m[targetM[1]][i])
  }
  // 随机化数组
  tlStudy.sort(() => Math.random() - 0.5)
  // 插入试次间间隔的十字提示
  tlStudy = insertDurationTrial(tlStudy)
  // 拼接到主时间线
  timeline.push(...tlStudy)

  // 再认阶段
  let tlRecog = []
  timeline.push({
    type: jsPsychHtmlButtonResponse,
    stimulus: `
      <p>现在，请您完成一些简单的计算</p>
      <p>请在确保结果正确的情况下，尽快完成</p>
      <p>无论您是否完成所有题目</p>
      <p>30s 后将开始本小节的下一个部分</p>
    `,
    choices: ['继续']
  })
  // 等待 30s，并要求被试进行三位数减法
  timeline.push({
    type: jsPsychSurvey,
    pages: makeCalc(),
    title: '',
    button_label_next: '下一页',
    button_label_back: '上一页',
    button_label_finish: '提交',
    on_start: function () {
      exp.pluginAPI.setTimeout(() => {
        exp.finishTrial()        
      }, config.STUDY_TEST_DURATION)
    }
  })
  timeline.push({
    type: jsPsychHtmlButtonResponse,
    stimulus: `
      <p>接下来，您将看到一些照片</p>
      <p>请判断该人物是否在本小节的前半段</p>
      <p>也就是您刚刚看到的照片中出现过</p>
    `,
    choices: ['继续']
  })
  // 生成再认试次
  for (let i = 0; i < 6; i++) {
    for (let j = 4; j < 8; j++) {
      (i === targetM[0] || i === targetM[1]) ? recogTrial.push(tlRecog, stimulus[block].m[i][j], true, block) : recogTrial.push(tlRecog, stimulus[block].m[i][j], false, block)
    }
  }
  // 随机化数组
  tlRecog.sort(() => Math.random() - 0.5)
  // 插入试次间间隔的十字提示
  tlRecog = insertDurationTrial(tlRecog)
  // 拼接到主时间线
  timeline.push(...tlRecog)

  // 返回生成的时间线
  return timeline
}

// 定义时间线
const timeline = []
// 定义三个 block
const block = ['cnStar', 'krStar', 'cnNorm'].sort(() => Math.random() - 0.5)
// 生成时间线
for (let i = 0; i < config.BLOCKS; i++) {
  timeline.push({
    type: jsPsychHtmlButtonResponse,
    stimulus: `
      <p style="font-weight: bold;">第 ${i + 1} / 3 个小节</p>
    `,
    choices: ['开始']
  })
  timeline.push(...generateBlock(block[i]))
  if (i !== config.BLOCKS - 1) {
    timeline.push({
      type: jsPsychHtmlButtonResponse,
      stimulus: `
        <p>已完成 ${i + 1} / 3 个小节</p>
        <p>试次间间隔的形式还没想好</p>
      `,
      choices: ['继续']
    })
  }
}

export default timeline
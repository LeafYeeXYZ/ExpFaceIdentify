// 引入外部模块
import startTimeline from './start.js'
import blockTimeline from './block.js'
import endTimeline from './end.js'
import config from './config.js'
import calcData from './data.js'
// 初始化 jsPsych
export const exp = config.SHOW_BAR ? initJsPsych({ show_progress_bar: true, message_progress_bar: '实验进度' }) : initJsPsych()
// 声明实验流程时间线
const timeline = [...startTimeline, ...blockTimeline, ...endTimeline]
// 禁用右键、选中、长按等操作
if (config.NO_RIGHT_CLICK) {
  document.addEventListener('contextmenu', event => event.preventDefault()) // 阻止右键
  document.addEventListener('selectstart', event => event.preventDefault()) // 阻止选中
  document.addEventListener('dblclick', event => event.preventDefault()) // 阻止双击
  document.addEventListener('keydown', event => (event.key === 'F12' || event.key === 'F5') && event.preventDefault()) // 阻止 F12 和 F5
}

/*
src/
  主文件 - index.js
  样式文件 - indx.css
  网页文件 - index.html
  网页图标 - favicon.ico
  start.js --- 指导语和人口学信息试次
  block.js --- 正式实验试次
  end.js --- 结束语和退出全屏试次
  stimulus.js --- 存储刺激的路径 --- 发现女性目标刺激偏多, 手动调了一下概率
  data.js --- 原始数据处理函数
  config.js --- 实验参数配置
static/
  CN_star --- 中国明星照片
  KR_star --- 韩国明星照片
  US_star --- 美国明星照片
  CN_norm --- 中国普通人照片
    M1_1 - M6_8 --- 男性照片
    F1_1 - F6_8 --- 女性照片
*/

// 运行实验
;(async () => {
  try {
    // 运行实验
    await exp.run(timeline)
    // 显示正在上传数据页面
    document.body.innerHTML = config.HTML_UPLOADING
    // 获取并处理实验数据
    const data = calcData(exp.data.get())
    data.device = {
      width: window.screen.width,
      height: window.screen.height,
      min: Math.min(window.screen.width, window.screen.height)
    }
    // 开发环境下打印数据
    config.DEV && console.log('准备上传', data)
    // 上传数据
    const uploadUrl = `${config.SERVER}/submit?data=${JSON.stringify(data)}`
    await fetch(uploadUrl)
      .catch(() => fetch(uploadUrl))
      .catch(() => fetch(uploadUrl))
      .then(() => document.body.innerHTML = config.HTML_ENDING)
      .catch(err => {
        document.body.innerHTML = config.HTML_ERROR_UPLOAD.replace(/@@@/, err)
        console.log(data)
      })
  } catch (err) {
    document.body.innerHTML = config.HTML_ERROR_EXP.replace(/@@@/, err)
  }
})()

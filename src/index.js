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

/*
主文件 - index.js
样式文件 - indx.css
网页文件 - index.html
结构
start.js --- 指导语和人口学信息
block.js --- 正式实验
end.js --- 结束语和退出全屏
其他文件
stimulus.js --- 刺激的路径
data.js --- 原始数据处理函数
config.js --- 调试用，设置一些参数
*/

// 运行实验
;(async () => {
  try {
    // 运行实验
    await exp.run(timeline)
    // 声明实验数据
    let data = {
      // 人口学信息
      subject: {},
      // 实验数据
      trials: []
    }
    // 获取实验数据
    data.trials = calcData(exp.data.get().trials)
    data.subject = { ...data.trials.shift().response, ...data.trials.shift().response }
    data.subject.deviceWidth = window.screen.width
    data.subject.deviceHeight = window.screen.height
    // 处理数据
    data.subject.cnStarMeanRT = (data.trials.filter(trial => trial.stimulusType === 'cnStar').reduce((acc, cur) => acc + cur.rt, 0) / 24).toFixed(config.TOFIXED)
    data.subject.krStarMeanRT = (data.trials.filter(trial => trial.stimulusType === 'krStar').reduce((acc, cur) => acc + cur.rt, 0) / 24).toFixed(config.TOFIXED)
    data.subject.cnNormMeanRT = (data.trials.filter(trial => trial.stimulusType === 'cnNorm').reduce((acc, cur) => acc + cur.rt, 0) / 24).toFixed(config.TOFIXED)
    data.subject.cnStarMeanCorrectRate = (data.trials.filter(trial => trial.stimulusType === 'cnStar').reduce((acc, cur) => acc + (cur.correctResponse === cur.response ? 1 : 0), 0) / 24).toFixed(config.TOFIXED)
    data.subject.krStarMeanCorrectRate = (data.trials.filter(trial => trial.stimulusType === 'krStar').reduce((acc, cur) => acc + (cur.correctResponse === cur.response ? 1 : 0), 0) / 24).toFixed(config.TOFIXED)
    data.subject.cnNormMeanCorrectRate = (data.trials.filter(trial => trial.stimulusType === 'cnNorm').reduce((acc, cur) => acc + (cur.correctResponse === cur.response ? 1 : 0), 0) / 24).toFixed(config.TOFIXED)
    data.subject.cnStarStdRT = '还没实现'
    data.subject.krStarStdRT = '还没实现'
    data.subject.cnNormStdRT = '还没实现'
    data.subject.cnStarStdCorrectRate = '还没实现'
    data.subject.krStarStdCorrectRate = '还没实现'
    data.subject.cnNormStdCorrectRate = '还没实现'
    // 上传数据
    console.log(data.subject)
    console.log('上传数据还没实现')
    // 显示结束页面
    document.body.innerHTML = `
      <h1>实验数据已上传</h1>
      <h1>感谢您的参与</h1>
      <h1>您现在可以关闭网页</h1>
    `
  } catch (err) {
    alert(`
      实验出错，请联系主试
      错误信息：
      ${err}
    `)
    document.body.innerHTML = '<h1>实验出错</h1>'
  }
})()





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
    // 获取并处理实验数据
    const data = calcData(exp.data.get())
    data.deviceWidth = window.screen.width
    data.deviceHeight = window.screen.height
    data.deviceMin = Math.min(window.screen.width, window.screen.height)
    // 显示正在上传数据页面
    document.body.innerHTML = `
      <h1>正在上传实验数据</h1>
      <h1>请勿关闭网页</h1>
    `
    // 上传数据
    config.DEV && console.log('准备上传', data)
    try {
      config.DEV && console.log('第一次尝试上传数据')
      await fetch(`${config.SERVER}/submit?data=${JSON.stringify(data)}`)
    } catch (err) {
      try {
        config.DEV && console.log('第二次尝试上传数据')
        await fetch(`${config.SERVER}/submit?data=${JSON.stringify(data)}`)
      } catch (err) {
        config.DEV && console.log('第三次尝试上传数据')
        await fetch(`${config.SERVER}/submit?data=${JSON.stringify(data)}`)
      }
    }
    // 显示结束页面
    document.body.innerHTML = `
      <h1>实验数据已上传</h1>
      <h1>感谢您的参与</h1>
      <h1>您现在可以关闭网页</h1>
    `
  } catch (err) {
    document.body.innerHTML = `
      <h1>实验出错，请联系主试</h1>
      <p>错误信息：${err}</p>`
  }
})()





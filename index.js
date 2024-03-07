// 初始化 jsPsych
const exp = initJsPsych({
  show_progress_bar: true,
  message_progress_bar: '实验进度'
})
// 引入外部模块
import startTimeline from './start.js'
import blockTimeline from './block.js'
import endTimeline from './end.js'
import calDate from './data.js'
import calcData from './data.js'
// 声明实验流程时间线
const timeline = [...startTimeline, ...blockTimeline, ...endTimeline]

/*
主文件 - index.js
样式文件 - indx.css
结构
start.js --- 指导语和人口学信息
block.js --- 正式实验
end.js --- 结束语和退出全屏
其他文件
stimulus.js --- 刺激的路径
data.js --- 原始数据处理函数
*/

// 运行实验
;(async () => {
  try {
    // 检测屏幕宽度，如果太小则不执行实验
    if (window.innerWidth < 800) {
      document.body.innerHTML = `
        <h1>请勿使用手机进行实验</h1>
      `
    } else {
      // 运行实验
      await exp.run(timeline)
      // 获取实验数据
      let data = calcData(exp.data.get().trials)     

      console.log(data)

      // 上传数据

      // 显示结束页面
      document.body.innerHTML = `
        <h1>实验已结束，您可以关闭此页面</h1>
      `
    }
  } catch (err) {
    alert(`
      实验出错，请联系主试
      错误信息：
      ${err}
    `)
  }
})();





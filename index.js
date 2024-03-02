// 基于 jsPsych 的实验程序
// 作者：叶一杉
// 学号：202211061028
// 日期：2024-3-2

// 初始化 jsPsych
let exp = initJsPsych()

// 声明实验流程时间线
let timeline = []

// 导入试次生成函数
import generateBlock from './block.js'

// 预加载图片
timeline.push({
  type: jsPsychPreload,
  auto_preload: true
})

// 全屏指导语
timeline.push({
  type: jsPsychFullscreen,
  fullscreen_mode: true,
  message: `
    <p>为避免干扰，本实验将全屏进行</p>
    <p>如您同意，请点击下方按钮继续实验</p>
  `,
  button_label: '继续'
})

// 指导语
timeline.push({
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <p>欢迎参加实验！</p>
    <p>本实验分为两部分，第一部分是学习阶段，第二部分是测试阶段。</p>
    ...还没写完
  `,
  choices: ['开始实验']
})

// 获取人口学信息

// 将生成好的 block 加入时间线
console.log(generateBlock('CC'))

// 按随即顺序将各个 block 加入时间线


// 结束语
timeline.push({
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <p>实验结束！</p>
    <p>感谢您的参与！</p>
  `,
  choices: ['结束实验']
})

// 退出全屏
timeline.push({
  type: jsPsychFullscreen,
  fullscreen_mode: false
})

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
      let data = exp.data.get()
      console.log(data)
      // 处理数据

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





const timeline = [
  // 结束语
  {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
      <p>实验结束！</p>
      <p>感谢您的参与！</p>
    `,
    choices: ['结束实验'],
    data: {
      shouldSave: false
    }
  },
  // 退出全屏
  {
    type: jsPsychFullscreen,
    fullscreen_mode: false,
    data: {
      shouldSave: false
    }
  }
]

export default timeline
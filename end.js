const timeline = [
  // 结束语
  {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
      <p>实验即将结束</p>
      <p>点击结束实验后，请等待数据上传</p>
      <p>待屏幕上出现提示后，再关闭网页</p>
    `,
    choices: ['结束实验'],
  },
  // 退出全屏
  {
    type: jsPsychFullscreen,
    fullscreen_mode: false,
  }
]

export default timeline
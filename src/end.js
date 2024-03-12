const timeline = [
  // 提示正式实验结束
  {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
      <p>您已完成正式实验的所有小节</p>
      <p>最后，为保证数据有效性</p>
      <p>恳请您如实回答接下来的问题</p>
    `,
    choices: ['继续'],
  },
  // 确认是否认真作答或已经做过
  {
    type: jsPsychSurvey,
    pages: [
      [
        {
          name: 'xxx',
          type: 'html',
          prompt: '为保证数据有效性，恳请您如实回答以下问题'
        },
        {
          name: 'isDone',
          type: 'multi-choice',
          prompt: '您以前是否已经参加过此实验', // 如果改了选项文字，记得改 data.js 里的处理函数
          options: ['第一次参加，请使用此份数据', '以前参加过，不要使用这份数据'],
          required: true
        },
        {
          name: 'isSerious',
          type: 'multi-choice',
          prompt: '您是否认真作答',
          options: ['认真作答，请使用此份数据', '没有认真作答，不要使用此份数据'],
          required: true
        }
      ]
    ],
    button_label_finish: '继续',
    required_error: '请填写此项',
    data: {
      isDoneOrSerious: true
    }
  },
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
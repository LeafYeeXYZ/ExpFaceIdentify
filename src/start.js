const timeline = [
  { // 全屏提示
    type: jsPsychFullscreen,
    fullscreen_mode: true,
    message: `
      <p style="font-weight: bold;">为避免干扰，本实验将全屏进行</p>
    `,
    button_label: '进入全屏',
  },
  { // 指导语
    type: jsPsychHtmlButtonResponse,
    stimulus: `
      <p>欢迎参加本实验</p>
      <p>在正式实验开始前</p>
      <p>我们需要收集您的一些基本信息</p>
      <p>信息不涉及个人隐私</p>
      <p>并且仅用于科研目的</p>
    `,
    choices: ['开始实验'],
  },
  { // 人口学信息
    type: jsPsychSurvey,
    pages: [
      [
        {
          name: 'gender',
          type: 'drop-down',
          prompt: '您的性别',
          options: ['男', '女', '其他'],
          required: true
        },
        {
          name: 'age',
          type: 'text',
          prompt: '您的年龄',
          input_type: 'number',
          required: true
        }
      ]
    ],
    button_label_finish: '继续',
    required_error: '请填写此项',
    data: {
      shouldSave: true
    }
  },
  { // 对明星了解程度
    type: jsPsychSurvey,
    pages: [
      [
        {
          name: 'cnStarFamiliar',
          type: 'likert',
          prompt: '您对中国明星的熟悉程度',
          required: true,
          likert_scale_min_label: '完全不熟悉',
          likert_scale_max_label: '非常熟悉',
          likert_scale_values: [
            { value: 1 },
            { value: 2 },
            { value: 3 },
            { value: 4 },
            { value: 5 }
          ]
        },
        {
          name: 'krStarFamiliar',
          type: 'likert',
          prompt: '您对韩国明星的熟悉程度',
          required: true,
          likert_scale_min_label: '完全不熟悉',
          likert_scale_max_label: '非常熟悉',
          likert_scale_values: [
            { value: 1 },
            { value: 2 },
            { value: 3 },
            { value: 4 },
            { value: 5 }
          ]
        }
      ]
    ],
    button_label_finish: '继续',
    required_error: '请填写此项',
    data: {
      shouldSave: true
    }
  },
  { // 指导语
    type: jsPsychHtmlButtonResponse,
    stimulus: `
      <p>实验即将正式开始</p>
      <p>指导语还没写好</p>
    `,
    choices: ['开始实验'],
  }
]

export default timeline
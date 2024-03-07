const timeline = [
  { // 全屏提示
    type: jsPsychFullscreen,
    fullscreen_mode: true,
    message: `
      <p>为避免干扰，本实验将全屏进行</p>
      <p>如您同意，请点击下方按钮继续实验</p>
    `,
    button_label: '继续',
    data: {
      shouldSave: false
    }
  },
  { // 指导语
    type: jsPsychHtmlButtonResponse,
    stimulus: `
      <p>欢迎参加实验！</p>
      <p>...还没写完</p>
    `,
    choices: ['开始实验'],
    data: {
      shouldSave: false
    }
  },
  { // 人口学信息
    type: jsPsychSurvey,
    pages: [
      [
        {
          name: 'intro',
          type: 'html',
          prompt: '正式实验前，我们需要收集您的一些基本信息'
        },
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
    data: {
      shouldSave: true
    }
  },
  { // 对明星了解程度
    type: jsPsychSurvey,
    pages: [
      [
        {
          name: 'intro',
          type: 'html',
          prompt: '正式实验前，我们需要收集您的一些基本信息'
        },
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
    data: {
      shouldSave: true
    }
  },
  { // 实验开始提示
    type: jsPsychHtmlButtonResponse,
    stimulus: `
      <p>实验即将正式开始</p>
    `,
    choices: ['继续'],
    data: {
      shouldSave: false
    }
  }
]

export default timeline
import config from "./config"

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
        },
        {
          name: 'usStarFamiliar',
          type: 'likert',
          prompt: '您对美国明星的熟悉程度',
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
      <p>实验将分为 ${config.BLOCKS} 个小节进行，每个小节又分为三个部分</p>
      <p>在第一个部分中，您会看到一些人脸图片，您需要在 ${config.STUDY_IMAGE_DURATION / 1000} 秒内<b>尽快</b>判断照片中人物的性别，并尽量记住图中人物</p>
      <p>在第二个部分中，您需要在 ${config.STUDY_TEST_DURATION / 1000} 秒内，在<b>保证正确</b>的前提下<b>尽量多</b>地完成一些计算题</p>
      <p>在第三个部分中，您也会看到一些人脸图片，您需要<b>尽快</b>判断照片中人物是否在第一部分中出现过</p>
      <p>每个小节结束后，您会有一些时间休息</p>
      <p>请尽量专注，并尽量在安静的环境中进行实验</p>
    `,
    choices: ['开始实验'],
  }
]

export default timeline
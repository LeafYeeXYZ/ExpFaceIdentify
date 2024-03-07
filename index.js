// 初始化 jsPsych
const exp = initJsPsych()

// 声明实验流程时间线
const timeline = []

// 导入试次生成函数
import generateBlock from './block.js'

// -------------------------------------------------------

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
    <p>...还没写完</p>
  `,
  choices: ['开始实验']
})

// 获取人口学信息
timeline.push({
  type: jsPsychSurvey,
  pages: [
    [
      {
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
  button_label_finish: '继续'
})
timeline.push({
  type: jsPsychSurvey,
  pages: [
    [
      {
        type: 'html',
        prompt: '正式实验前，我们需要收集您的一些基本信息'
      },
      {
        type: 'likert',
        prompt: '您对中国明星的熟悉程度',
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
        type: 'likert',
        prompt: '您对韩国明星的熟悉程度',
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
  button_label_finish: '继续'
})

// 正式实验开始
// 将生成好的 block 加入时间线
console.log(generateBlock())

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
      const data = exp.data.get()
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





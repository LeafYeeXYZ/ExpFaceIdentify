export default {
  // --- 常用调试参数 ---
  TRIAL_DURATION: 500, // 试次间间隔，即十字出现时间，应为 500ms
  STUDY_TEST_DURATION: 30 * 1000, // 练习阶段和学习阶段的间隔，应为 30 * 1000ms
  BLOCKS: 4, // block 数，应为 4 个
  // --- 服务器相关 ---
  SERVER: 'https://expapi.leafyee.xyz', // 服务器地址，应为 'https://expapi.leafyee.xyz'
  DEV: true, // 是否为开发阶段（与打印一些调试信息有关）
  STAGE: '开发阶段数据', // 标记实验状态，开发阶段数据 → 预测数据 → 有效数据
  // --- 页面显示相关 ---
  HTML_UPLOADING: `
    <h1>正在上传实验数据</h1>
    <h1>请勿关闭网页</h1>
  `, // 上传数据时的页面显示
  HTML_ENDING: `
    <h1>实验数据已上传</h1>
    <h1>感谢您的参与</h1>
    <h1>您现在可以关闭网页</h1>
  `, // 上传数据完成后的页面显示
  HTML_ERROR: `
    <h1>实验出错，请联系主试</h1>
    <p>错误信息：@@@</p>
  `, // 实验出错时的页面显示
  // --- 下面的一般不用改 ---
  BLOCK_DURATION: 20 * 1000, // block 间间隔，应为 20 * 1000ms
  STUDY_IMAGE_DURATION: 2 * 1000, // 学习阶段的图片最长呈现时间，应为 3 * 1000ms
  NO_RIGHT_CLICK: true, // 是否禁用右键、选中、长按等操作
  SHOW_BAR: false, // 是否显示顶部的实验进度条
  TOFIXED: 4, // 上传的数据保留的小数点位数
  BLOCKS_ORDER: ['cnStar', 'krStar', 'cnNorm', 'usStar'].sort(() => Math.random() - 0.5), // block 的顺序
}
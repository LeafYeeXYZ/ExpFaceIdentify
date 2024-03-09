export default {
  TRIAL_DURATION: 500, // 试次间间隔，即十字出现时间，应为 500ms
  BLOCKS: 3, // block 数，应为 3 个
  STUDY_TEST_DURATION: 30 * 1000, // 练习阶段和学习阶段的间隔，应为 30 * 1000ms
  STUDY_IMAGE_DURATION: 4 * 1000, // 学习阶段的图片最长呈现时间，应为 4 * 1000ms
  // --- 下面的一般不用改 ---
  NO_RIGHT_CLICK: true, // 是否禁用右键、选中、长按等操作
  SHOW_BAR: false, // 是否显示顶部的实验进度条
  TOFIXED: 4, // 上传的数据保留的小数点位数
  // --- 服务器相关 ---
  SERVER: 'https://expapi.leafyee.xyz', // 服务器地址，应为 'https://expapi.leafyee.xyz'
  DEV: true // 是否为还未进入正式实验阶段
}
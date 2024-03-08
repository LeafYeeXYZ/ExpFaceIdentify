export default {
  TRIAL_DURATION: 500, // 试次间间隔，即十字出现时间，应为 500ms
  BLOCKS: 3, // block 数，应为 3 个
  STUDY_TEST_DURATION: 30 * 1000, // 练习阶段和学习阶段的间隔，应为 30 * 1000ms
  STUDY_IMAGE_DURATION: 4 * 1000, // 学习阶段的图片最长呈现时间，应为 4 * 1000ms
  // --- 下面的一般不用改 ---
  SHOW_BAR: false, // 是否显示顶部的实验进度条
  TOFIXED: 2, // 上传的数据保留的小数点位数
}
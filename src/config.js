const DEV = false // 一键调整参数
export default {
  // --- 调试参数 ---
  STAGE: '开发阶段数据', // 标记实验状态，开发阶段数据 → 预测数据 → 有效数据
  TRIAL_DURATION: DEV ? 50 : 500, // 试次间间隔，即十字出现时间，应为 500ms
  STUDY_TEST_DURATION: DEV ? 5 * 1000 : 30 * 1000, // 练习阶段和学习阶段的间隔，应为 30 * 1000ms
  NO_RIGHT_CLICK: !DEV, // 是否禁用右键、选中、长按等操作
  BLOCKS: 4, // block 数，应为 4 个
  BLOCK_DURATION: 20 * 1000, // block 间最大间隔，应为 20 * 1000ms
  STUDY_IMAGE_DURATION: 3 * 1000, // 学习阶段的图片最长呈现时间，应为 3 * 1000ms
  TOFIXED: 4, // 上传的数据保留的小数点位数
  SHOW_BAR: false, // 是否显示顶部的实验进度条
  SERVER: 'https://expapi.leafyee.xyz', // 服务器地址
  BLOCKS_ORDER: ['cnStar', 'krStar', 'cnNorm', 'usStar'].sort(() => Math.random() - 0.5), // block 的顺序
  DEV, // 是否为开发阶段（与打印一些调试信息有关）
  // --- 明星名单 ---
  CN_STAR_M: ['成毅', '邓为', '龚俊', '檀健次', '丁程鑫', '王鹤棣'], // 中国明星男性名单
  CN_STAR_F: ['关晓彤', '赵露思', '张婧仪', '金晨', '唐嫣', '虞书欣'], // 中国明星女性名单
  KR_STAR_M: ['车银优', '李敏镐', '李钟硕', '边伯贤', '金泰亨', '朴灿烈'], // 韩国明星男性名单
  KR_STAR_F: ['裴智秀', 'somi', '金泰妍', 'jennie', 'iu', 'jisoo'], // 韩国明星女性名单
  // ---
  US_STAR_M: ['Jsutinbieber', 'Troye Sivan', 'Timothee Chalamet', 'Tom Holland', 'Tom Felton', 'Charlie Puth'], // 美国明星男性名单
  US_STAR_F: ['Ariana Grande', 'Billie Eilish', 'Kylie Jenner', 'Lady Gaga', 'Katy Perry', 'Selena Gomez'], // 美国明星女性名单 
  CN_NORM_M: ['小明', '小红', '小刚', '小李', '小张', '小王'], // 中国普通人男性名单, 不一定用
  CN_NORM_F: ['小丽', '小芳', '小美', '小娟', '小婷', '小霞'], // 中国普通人女性名单, 不一定用
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
  HTML_ERROR_EXP: `
    <h1>实验出错，请联系主试</h1>
    <p>错误信息：@@@</p>
  `, // 实验出错时的页面显示
  HTML_ERROR_UPLOAD: `
    <h1>上传数据出错，请联系主试</h1>
    <p>错误信息：@@@</p>
  `, // 上传数据出错时的页面显示
}

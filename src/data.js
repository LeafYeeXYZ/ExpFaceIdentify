import config from './config.js'

/**
 * 将原始数据转换为上传到数据库的数据
 * @param {object} data 原始数据 
 * @returns 处理后数据
 */
export default function calcData(data) {
  const res = {
    // 处理后数据，返回值
    subject: {},
    // 实验数据暂存
    trials: data.trials
  }
  // 实验程序是否完成
  res.subject.stage = config.STAGE
  // 数据是否有效
  if (res.trials.find(trial => trial.isDoneOrSerious).response.isDone === '以前参加过，不要使用这份数据' || res.trials.find(trial => trial.isDoneOrSerious).response.isSerious === '没有认真作答，不要使用此份数据') {
    res.subject.valid = '重复或不认真作答数据'
  } else {
    res.subject.valid = '有效数据'
  }
  // 当前时间
  res.subject.date = new Date().toLocaleString()
  // 总耗时
  res.subject.totalTime = res.trials.at(-1).time_elapsed
  // 学习阶段耗时
  res.subject.studyTime = res.trials.filter(ele => ele.trialType === 'study').reduce((acc, cur) => acc + cur.rt, 0)
  // 再认阶段耗时
  res.subject.recogTime = res.trials.filter(ele => ele.trialType === 'recog').reduce((acc, cur) => acc + cur.rt, 0)

  // 处理数据，只留下人口学信息和再认阶段数据
  res.trials = res.trials.filter(ele => ele.shouldSave)
  // 删除不必要属性
  res.trials.forEach(ele => {
    delete ele.shouldSave
    delete ele.stimulus
    delete ele.time_elapsed
    delete ele.internal_node_id
    delete ele.trial_index
    delete ele.trial_type
    if (ele.response === 0) ele.response = '出现过'
    if (ele.response === 1) ele.response = '没出现过'
    if (typeof ele.accuracy) delete ele.accuracy
    if (typeof ele.trialType) delete ele.trialType
  })

  // 人口学信息
  Object.assign(res.subject, res.trials.shift().response, res.trials.shift().response)
  // 再认阶段平均反应时
  res.subject.cnStarMeanRT = (res.trials.filter(trial => trial.stimulusType === 'cnStar').reduce((acc, cur) => acc + cur.rt, 0) / 24).toFixed(config.TOFIXED)
  res.subject.krStarMeanRT = (res.trials.filter(trial => trial.stimulusType === 'krStar').reduce((acc, cur) => acc + cur.rt, 0) / 24).toFixed(config.TOFIXED)
  res.subject.cnNormMeanRT = (res.trials.filter(trial => trial.stimulusType === 'cnNorm').reduce((acc, cur) => acc + cur.rt, 0) / 24).toFixed(config.TOFIXED)
  res.subject.usStarMeanRT = (res.trials.filter(trial => trial.stimulusType === 'usStar').reduce((acc, cur) => acc + cur.rt, 0) / 24).toFixed(config.TOFIXED)
  // 再认阶段正确率
  res.subject.cnStarCorrectRate = (res.trials.filter(trial => trial.stimulusType === 'cnStar').reduce((acc, cur) => acc + (cur.correctResponse === cur.response ? 1 : 0), 0) / 24).toFixed(config.TOFIXED)
  res.subject.krStarCorrectRate = (res.trials.filter(trial => trial.stimulusType === 'krStar').reduce((acc, cur) => acc + (cur.correctResponse === cur.response ? 1 : 0), 0) / 24).toFixed(config.TOFIXED)
  res.subject.cnNormCorrectRate = (res.trials.filter(trial => trial.stimulusType === 'cnNorm').reduce((acc, cur) => acc + (cur.correctResponse === cur.response ? 1 : 0), 0) / 24).toFixed(config.TOFIXED)
  res.subject.usStarCorrectRate = (res.trials.filter(trial => trial.stimulusType === 'usStar').reduce((acc, cur) => acc + (cur.correctResponse === cur.response ? 1 : 0), 0) / 24).toFixed(config.TOFIXED)
  // 再认阶段反应时标准差
  res.subject.cnStarStdRT = Math.sqrt(res.trials.filter(trial => trial.stimulusType === 'cnStar').reduce((acc, cur) => acc + (cur.rt - res.subject.cnStarMeanRT) ** 2, 0) / (24 - 1)).toFixed(config.TOFIXED)
  res.subject.krStarStdRT = Math.sqrt(res.trials.filter(trial => trial.stimulusType === 'krStar').reduce((acc, cur) => acc + (cur.rt - res.subject.krStarMeanRT) ** 2, 0) / (24 - 1)).toFixed(config.TOFIXED)
  res.subject.cnNormStdRT = Math.sqrt(res.trials.filter(trial => trial.stimulusType === 'cnNorm').reduce((acc, cur) => acc + (cur.rt - res.subject.cnNormMeanRT) ** 2, 0) / (24 - 1)).toFixed(config.TOFIXED)
  res.subject.usStarStdRT = Math.sqrt(res.trials.filter(trial => trial.stimulusType === 'usStar').reduce((acc, cur) => acc + (cur.rt - res.subject.usStarMeanRT) ** 2, 0) / (24 - 1)).toFixed(config.TOFIXED)

  return res.subject
}
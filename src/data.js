/**
 * 将原始数据转换为上传到数据库的数据
 * @param {object} data 原始数据 
 * @returns 处理后数据
 */
export default function calcData(data) {
  // 处理数据
  data = data.filter(ele => ele.shouldSave)
  // 删除不必要属性
  data.forEach(ele => {
    delete ele.shouldSave
    delete ele.stimulus
    delete ele.time_elapsed
    delete ele.internal_node_id
    delete ele.trial_index
    delete ele.trial_type
    if (ele.response === 0) ele.response = '出现过'
    if (ele.response === 1) ele.response = '没出现过'
    if (typeof ele.accuracy) delete ele.accuracy
  })
  return data
}
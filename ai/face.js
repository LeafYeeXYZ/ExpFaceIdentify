/**
 * 实验 2 : 通过 AI 人脸识别判断两张人脸的相似度
 */

// 引入百度 AI SDK
const { APP_ID, API_KEY, SECRET_KEY } = require('./secret.js')
const AipFaceClient = require('baidu-aip-sdk').face
const fs = require('fs').promises
const path = require('path')
const client = new AipFaceClient(APP_ID, API_KEY, SECRET_KEY)

// ---------------------------------------------------

// const A = path.resolve(__dirname, 'CN_star/M1_1.jpg')
// const B = path.resolve(__dirname, 'CN_star/M1_2.jpg')
// match(A, B).then(console.log('done')).catch(console.error('error'))
// 注意: 不管是测试还是实际运行, 请一次只运行一个函数!!!!!

// // 测试用 match 函数
// async function match() {
//   return new Promise((resolve, _reject) => {
//     setTimeout(() => {
//       resolve({ result: { score: parseInt(Math.random() * 100 + 1) } })
//     }, 10)
//   })
// }
// // 测试
// withinSubjSimi(['KR_star'])
// betweenSubjSimi(['KR_star'])
// withinSubjSimiSingle('CN_star', 'M', '1')

// ---------------------------------------------------

/**
 * 两张人脸图片对比
 * @param {string} imgPathA 图片 A 的绝对路径
 * @param {string} imgPathB 图片 B 的绝对路径
 * @returns {Promise<object>} 人脸识别结果
 */
async function match(imgPathA, imgPathB) {
  await new Promise(resolve => setTimeout(resolve, 1000))
  try {
    // 读取图片文件
    const imgA = (await fs.readFile(imgPathA)).toString('base64')
    const imgB = (await fs.readFile(imgPathB)).toString('base64')
    // 调用百度 AI SDK 的人脸识别接口
    const result = await client.match([{
      image: imgA,
      image_type: 'BASE64'
    }, {
      image: imgB,
      image_type: 'BASE64'
    }])
    // 附加一些额外信息
    result.imgs = [imgPathA, imgPathB]
    result.time = new Date().toLocaleString()
    // 如果成功, 将结果保存到日志文件 result.log, 并返回结果
    if (result.error_code == 0) {
      const log = path.resolve(__dirname, 'result.log')
      await fs.appendFile(log, `${JSON.stringify(result)}\n`)
      return result
    } else {
      // 如果失败, 抛出错误
      throw result
    }
  } catch (err) {
    // 将错误保存到日志文件 error.log
    const log = path.resolve(__dirname, 'error.log')
    await fs.appendFile(log, `${JSON.stringify(err)}\n`)
    throw err
  }
}

/**
 * 计算单个人内部的相似度
 * @info 结果会保存到 ./result/withinCN_star.json 等文件
 * @info 算法：每个人的八张照片两两比较 (1-2, 2-3, ..., 8-1)，取平均值
 * @param {string[]} target 目标群体 ['CN_star', 'KR_star', 'US_star', 'CN_norm'] 中的一个或多个
 * @returns {Promise<object>} 人脸识别结果
 */
async function withinSubjSimi(target) {
  const result = {
    CN_star: {
      Min: 0, Mean: 0,
      M1: 0, M2: 0, M3: 0, M4: 0, M5: 0, M6: 0,
      F1: 0, F2: 0, F3: 0, F4: 0, F5: 0, F6: 0,
    },
    KR_star: {
      Min: 0, Mean: 0,
      M1: 0, M2: 0, M3: 0, M4: 0, M5: 0, M6: 0,
      F1: 0, F2: 0, F3: 0, F4: 0, F5: 0, F6: 0,
    },
    US_star: {
      Min: 0, Mean: 0,
      M1: 0, M2: 0, M3: 0, M4: 0, M5: 0, M6: 0,
      F1: 0, F2: 0, F3: 0, F4: 0, F5: 0, F6: 0,
    },
    CN_norm: {
      Min: 0, Mean: 0,
      M1: 0, M2: 0, M3: 0, M4: 0, M5: 0, M6: 0,
      F1: 0, F2: 0, F3: 0, F4: 0, F5: 0, F6: 0,
    },
  }
  // const target = ['CN_star', 'KR_star', 'US_star', 'CN_norm']
  const gender = ['M', 'F']
  const person = ['1', '2', '3', '4', '5', '6']
  
  for (const t of target) {
    for (const g of gender) {
      for (const p of person) {
        for (i = 0; i < 8; i++) {
          const imgPathA = path.resolve(__dirname, `${t}/${g}${p}_${i + 1}.jpg`)
          const imgPathB = path.resolve(__dirname, `${t}/${g}${p}_${(i === 7) ? 1 : i + 2 }.jpg`)
          const res = await match(imgPathA, imgPathB)
          result[t][`${g}${p}`] += +res.result.score
        }
        result[t][`${g}${p}`] /= 8
      }
    }
    result[t].Min = Math.min(...Object.values(result[t]).filter(v => v !== 0))
    result[t].Mean = Object.values(result[t]).filter(v => v !== 0).reduce((a, b) => a + b) / 12
    await fs.writeFile(path.resolve(__dirname, `results/within${t}.json`), JSON.stringify(result[t]))
  }

  return result
}

/**
 * 单独检测一个人的内部相似度
 * @info 结果会保存到 ./result/withinSingle.json 文件
 * @param {'CN_star' | 'KR_star' | 'US_star' | 'CN_norm'} target 要单独检测的群体
 * @param {'M' | 'F'} gender 要单独检测的性别
 * @param {'1' | '2' | '3' | '4' | '5' | '6'} person 要单独检测的人
 * @returns {Promise<object>} 人脸识别结果
 */
async function withinSubjSimiSingle(target, gender, person) {
  const result = {
    Mean: 0,
    Self12: 0, Self23: 0, Self34: 0, Self45: 0,
    Self56: 0, Self67: 0, Self78: 0, Self81: 0,
  }
  for (i = 0; i < 8; i++) {
    const imgPathA = path.resolve(__dirname, `${target}/${gender}${person}_${i + 1}.jpg`)
    const imgPathB = path.resolve(__dirname, `${target}/${gender}${person}_${(i === 7) ? 1 : i + 2 }.jpg`)
    const res = await match(imgPathA, imgPathB)
    result[`Self${i + 1}${(i === 7) ? 1 : i + 2}`] = +res.result.score
    result.Mean += +res.result.score
  }
  result.Mean /= 8
  await fs.writeFile(path.resolve(__dirname, `results/withinSingle.json`), JSON.stringify(result))
  return result
}  

/**
 * 计算不同人之间的相似度
 * @info 结果会保存到 ./result/betweenCN_star.json 等文件
 * @info 算法：每群体的六个人的第一张照片两两比较 (1-2, 2-3, ..., 6-1)，取平均值
 * @param {string[]} target 目标群体 ['CN_star', 'KR_star', 'US_star', 'CN_norm'] 中的一个或多个
 * @returns {Promise<object>} 人脸识别结果
 */
async function betweenSubjSimi(target) {
  const result = {
    CN_star: {
      Mean: 0, MeanM: 0, MeanF: 0,
      M12: 0, M23: 0, M34: 0, M45: 0, M56: 0, M61: 0,
      F12: 0, F23: 0, F34: 0, F45: 0, F56: 0, F61: 0,
    },
    KR_star: {
      Mean: 0, MeanM: 0, MeanF: 0,
      M12: 0, M23: 0, M34: 0, M45: 0, M56: 0, M61: 0,
      F12: 0, F23: 0, F34: 0, F45: 0, F56: 0, F61: 0,
    },
    US_star: {
      Mean: 0, MeanM: 0, MeanF: 0,
      M12: 0, M23: 0, M34: 0, M45: 0, M56: 0, M61: 0,
      F12: 0, F23: 0, F34: 0, F45: 0, F56: 0, F61: 0,
    },
    CN_norm: {
      Mean: 0, MeanM: 0, MeanF: 0,
      M12: 0, M23: 0, M34: 0, M45: 0, M56: 0, M61: 0,
      F12: 0, F23: 0, F34: 0, F45: 0, F56: 0, F61: 0,
    },
  }
  // const target = ['CN_star', 'KR_star', 'US_star', 'CN_norm']
  const gender = ['M', 'F']

  for (const t of target) {
    for (const g of gender) {
      for (i = 0; i < 6; i++) {
        const imgPathA = path.resolve(__dirname, `${t}/${g}${i + 1}_1.jpg`)
        const imgPathB = path.resolve(__dirname, `${t}/${g}${(i === 5) ? 1 : i + 2}_1.jpg`)
        const res = await match(imgPathA, imgPathB)
        result[t][`${g}${i + 1}${(i === 5) ? 1 : i + 2}`] = +res.result.score
        result[t].Mean += +res.result.score
        result[t][`Mean${g}`] += +res.result.score
      }
      result[t][`Mean${g}`] /= 6
    }
    result[t].Mean /= 12
    await fs.writeFile(path.resolve(__dirname, `results/between${t}.json`), JSON.stringify(result[t]))
  }
  
  return result
}

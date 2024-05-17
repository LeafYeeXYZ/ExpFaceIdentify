// 定义刺激路径
const stimulusMale = {
  cnStar: {
    m: [
      ['./CN_star/M1_1.jpg', './CN_star/M1_2.jpg', './CN_star/M1_3.jpg', './CN_star/M1_4.jpg', './CN_star/M1_5.jpg', './CN_star/M1_6.jpg', './CN_star/M1_7.jpg', './CN_star/M1_8.jpg'],
      ['./CN_star/M2_1.jpg', './CN_star/M2_2.jpg', './CN_star/M2_3.jpg', './CN_star/M2_4.jpg', './CN_star/M2_5.jpg', './CN_star/M2_6.jpg', './CN_star/M2_7.jpg', './CN_star/M2_8.jpg'],
      ['./CN_star/M3_1.jpg', './CN_star/M3_2.jpg', './CN_star/M3_3.jpg', './CN_star/M3_4.jpg', './CN_star/M3_5.jpg', './CN_star/M3_6.jpg', './CN_star/M3_7.jpg', './CN_star/M3_8.jpg'],
      ['./CN_star/M4_1.jpg', './CN_star/M4_2.jpg', './CN_star/M4_3.jpg', './CN_star/M4_4.jpg', './CN_star/M4_5.jpg', './CN_star/M4_6.jpg', './CN_star/M4_7.jpg', './CN_star/M4_8.jpg'],
      ['./CN_star/M5_1.jpg', './CN_star/M5_2.jpg', './CN_star/M5_3.jpg', './CN_star/M5_4.jpg', './CN_star/M5_5.jpg', './CN_star/M5_6.jpg', './CN_star/M5_7.jpg', './CN_star/M5_8.jpg'],
      ['./CN_star/M6_1.jpg', './CN_star/M6_2.jpg', './CN_star/M6_3.jpg', './CN_star/M6_4.jpg', './CN_star/M6_5.jpg', './CN_star/M6_6.jpg', './CN_star/M6_7.jpg', './CN_star/M6_8.jpg']
    ],
    f: [
      ['./CN_star/F1_1.jpg', './CN_star/F1_2.jpg', './CN_star/F1_3.jpg', './CN_star/F1_4.jpg'],
      ['./CN_star/F2_1.jpg', './CN_star/F2_2.jpg', './CN_star/F2_3.jpg', './CN_star/F2_4.jpg']
    ]
  },
  krStar: {
    m: [
      ['./KR_star/M1_1.jpg', './KR_star/M1_2.jpg', './KR_star/M1_3.jpg', './KR_star/M1_4.jpg', './KR_star/M1_5.jpg', './KR_star/M1_6.jpg', './KR_star/M1_7.jpg', './KR_star/M1_8.jpg'],
      ['./KR_star/M2_1.jpg', './KR_star/M2_2.jpg', './KR_star/M2_3.jpg', './KR_star/M2_4.jpg', './KR_star/M2_5.jpg', './KR_star/M2_6.jpg', './KR_star/M2_7.jpg', './KR_star/M2_8.jpg'],
      ['./KR_star/M3_1.jpg', './KR_star/M3_2.jpg', './KR_star/M3_3.jpg', './KR_star/M3_4.jpg', './KR_star/M3_5.jpg', './KR_star/M3_6.jpg', './KR_star/M3_7.jpg', './KR_star/M3_8.jpg'],
      ['./KR_star/M4_1.jpg', './KR_star/M4_2.jpg', './KR_star/M4_3.jpg', './KR_star/M4_4.jpg', './KR_star/M4_5.jpg', './KR_star/M4_6.jpg', './KR_star/M4_7.jpg', './KR_star/M4_8.jpg'],
      ['./KR_star/M5_1.jpg', './KR_star/M5_2.jpg', './KR_star/M5_3.jpg', './KR_star/M5_4.jpg', './KR_star/M5_5.jpg', './KR_star/M5_6.jpg', './KR_star/M5_7.jpg', './KR_star/M5_8.jpg'],
      ['./KR_star/M6_1.jpg', './KR_star/M6_2.jpg', './KR_star/M6_3.jpg', './KR_star/M6_4.jpg', './KR_star/M6_5.jpg', './KR_star/M6_6.jpg', './KR_star/M6_7.jpg', './KR_star/M6_8.jpg']
    ],
    f: [
      ['./KR_star/F1_1.jpg', './KR_star/F1_2.jpg', './KR_star/F1_3.jpg', './KR_star/F1_4.jpg'],
      ['./KR_star/F2_1.jpg', './KR_star/F2_2.jpg', './KR_star/F2_3.jpg', './KR_star/F2_4.jpg']
    ]
  },
  cnNorm: {
    m: [
      ['./CN_norm/M1_1.jpg', './CN_norm/M1_2.jpg', './CN_norm/M1_3.jpg', './CN_norm/M1_4.jpg', './CN_norm/M1_5.jpg', './CN_norm/M1_6.jpg', './CN_norm/M1_7.jpg', './CN_norm/M1_8.jpg'],
      ['./CN_norm/M2_1.jpg', './CN_norm/M2_2.jpg', './CN_norm/M2_3.jpg', './CN_norm/M2_4.jpg', './CN_norm/M2_5.jpg', './CN_norm/M2_6.jpg', './CN_norm/M2_7.jpg', './CN_norm/M2_8.jpg'],
      ['./CN_norm/M3_1.jpg', './CN_norm/M3_2.jpg', './CN_norm/M3_3.jpg', './CN_norm/M3_4.jpg', './CN_norm/M3_5.jpg', './CN_norm/M3_6.jpg', './CN_norm/M3_7.jpg', './CN_norm/M3_8.jpg'],
      ['./CN_norm/M4_1.jpg', './CN_norm/M4_2.jpg', './CN_norm/M4_3.jpg', './CN_norm/M4_4.jpg', './CN_norm/M4_5.jpg', './CN_norm/M4_6.jpg', './CN_norm/M4_7.jpg', './CN_norm/M4_8.jpg'],
      ['./CN_norm/M5_1.jpg', './CN_norm/M5_2.jpg', './CN_norm/M5_3.jpg', './CN_norm/M5_4.jpg', './CN_norm/M5_5.jpg', './CN_norm/M5_6.jpg', './CN_norm/M5_7.jpg', './CN_norm/M5_8.jpg'],
      ['./CN_norm/M6_1.jpg', './CN_norm/M6_2.jpg', './CN_norm/M6_3.jpg', './CN_norm/M6_4.jpg', './CN_norm/M6_5.jpg', './CN_norm/M6_6.jpg', './CN_norm/M6_7.jpg', './CN_norm/M6_8.jpg']
    ],
    f: [
      ['./CN_norm/F1_1.jpg', './CN_norm/F1_2.jpg', './CN_norm/F1_3.jpg', './CN_norm/F1_4.jpg'],
      ['./CN_norm/F2_1.jpg', './CN_norm/F2_2.jpg', './CN_norm/F2_3.jpg', './CN_norm/F2_4.jpg']
    ]
  },
  usStar: {
    m: [
      ['./US_star/M1_1.jpg', './US_star/M1_2.jpg', './US_star/M1_3.jpg', './US_star/M1_4.jpg', './US_star/M1_5.jpg', './US_star/M1_6.jpg', './US_star/M1_7.jpg', './US_star/M1_8.jpg'],
      ['./US_star/M2_1.jpg', './US_star/M2_2.jpg', './US_star/M2_3.jpg', './US_star/M2_4.jpg', './US_star/M2_5.jpg', './US_star/M2_6.jpg', './US_star/M2_7.jpg', './US_star/M2_8.jpg'],
      ['./US_star/M3_1.jpg', './US_star/M3_2.jpg', './US_star/M3_3.jpg', './US_star/M3_4.jpg', './US_star/M3_5.jpg', './US_star/M3_6.jpg', './US_star/M3_7.jpg', './US_star/M3_8.jpg'],
      ['./US_star/M4_1.jpg', './US_star/M4_2.jpg', './US_star/M4_3.jpg', './US_star/M4_4.jpg', './US_star/M4_5.jpg', './US_star/M4_6.jpg', './US_star/M4_7.jpg', './US_star/M4_8.jpg'],
      ['./US_star/M5_1.jpg', './US_star/M5_2.jpg', './US_star/M5_3.jpg', './US_star/M5_4.jpg', './US_star/M5_5.jpg', './US_star/M5_6.jpg', './US_star/M5_7.jpg', './US_star/M5_8.jpg'],
      ['./US_star/M6_1.jpg', './US_star/M6_2.jpg', './US_star/M6_3.jpg', './US_star/M6_4.jpg', './US_star/M6_5.jpg', './US_star/M6_6.jpg', './US_star/M6_7.jpg', './US_star/M6_8.jpg']
    ],
    f: [
      ['./US_star/F1_1.jpg', './US_star/F1_2.jpg', './US_star/F1_3.jpg', './US_star/F1_4.jpg'],
      ['./US_star/F2_1.jpg', './US_star/F2_2.jpg', './US_star/F2_3.jpg', './US_star/F2_4.jpg']
    ]
  }
}
const stimulusFemale = {
  cnStar: {
    m: [
      ['./CN_star/F1_1.jpg', './CN_star/F1_2.jpg', './CN_star/F1_3.jpg', './CN_star/F1_4.jpg', './CN_star/F1_5.jpg', './CN_star/F1_6.jpg', './CN_star/F1_7.jpg', './CN_star/F1_8.jpg'],
      ['./CN_star/F2_1.jpg', './CN_star/F2_2.jpg', './CN_star/F2_3.jpg', './CN_star/F2_4.jpg', './CN_star/F2_5.jpg', './CN_star/F2_6.jpg', './CN_star/F2_7.jpg', './CN_star/F2_8.jpg'],
      ['./CN_star/F3_1.jpg', './CN_star/F3_2.jpg', './CN_star/F3_3.jpg', './CN_star/F3_4.jpg', './CN_star/F3_5.jpg', './CN_star/F3_6.jpg', './CN_star/F3_7.jpg', './CN_star/F3_8.jpg'],
      ['./CN_star/F4_1.jpg', './CN_star/F4_2.jpg', './CN_star/F4_3.jpg', './CN_star/F4_4.jpg', './CN_star/F4_5.jpg', './CN_star/F4_6.jpg', './CN_star/F4_7.jpg', './CN_star/F4_8.jpg'],
      ['./CN_star/F5_1.jpg', './CN_star/F5_2.jpg', './CN_star/F5_3.jpg', './CN_star/F5_4.jpg', './CN_star/F5_5.jpg', './CN_star/F5_6.jpg', './CN_star/F5_7.jpg', './CN_star/F5_8.jpg'],
      ['./CN_star/F6_1.jpg', './CN_star/F6_2.jpg', './CN_star/F6_3.jpg', './CN_star/F6_4.jpg', './CN_star/F6_5.jpg', './CN_star/F6_6.jpg', './CN_star/F6_7.jpg', './CN_star/F6_8.jpg']
    ],
    f: [
      ['./CN_star/M1_1.jpg', './CN_star/M1_2.jpg', './CN_star/M1_3.jpg', './CN_star/M1_4.jpg'],
      ['./CN_star/M2_1.jpg', './CN_star/M2_2.jpg', './CN_star/M2_3.jpg', './CN_star/M2_4.jpg']
    ]
  },
  krStar: {
    m: [
      ['./KR_star/F1_1.jpg', './KR_star/F1_2.jpg', './KR_star/F1_3.jpg', './KR_star/F1_4.jpg', './KR_star/F1_5.jpg', './KR_star/F1_6.jpg', './KR_star/F1_7.jpg', './KR_star/F1_8.jpg'],
      ['./KR_star/F2_1.jpg', './KR_star/F2_2.jpg', './KR_star/F2_3.jpg', './KR_star/F2_4.jpg', './KR_star/F2_5.jpg', './KR_star/F2_6.jpg', './KR_star/F2_7.jpg', './KR_star/F2_8.jpg'],
      ['./KR_star/F3_1.jpg', './KR_star/F3_2.jpg', './KR_star/F3_3.jpg', './KR_star/F3_4.jpg', './KR_star/F3_5.jpg', './KR_star/F3_6.jpg', './KR_star/F3_7.jpg', './KR_star/F3_8.jpg'],
      ['./KR_star/F4_1.jpg', './KR_star/F4_2.jpg', './KR_star/F4_3.jpg', './KR_star/F4_4.jpg', './KR_star/F4_5.jpg', './KR_star/F4_6.jpg', './KR_star/F4_7.jpg', './KR_star/F4_8.jpg'],
      ['./KR_star/F5_1.jpg', './KR_star/F5_2.jpg', './KR_star/F5_3.jpg', './KR_star/F5_4.jpg', './KR_star/F5_5.jpg', './KR_star/F5_6.jpg', './KR_star/F5_7.jpg', './KR_star/F5_8.jpg'],
      ['./KR_star/F6_1.jpg', './KR_star/F6_2.jpg', './KR_star/F6_3.jpg', './KR_star/F6_4.jpg', './KR_star/F6_5.jpg', './KR_star/F6_6.jpg', './KR_star/F6_7.jpg', './KR_star/F6_8.jpg']
    ],
    f: [
      ['./KR_star/M1_1.jpg', './KR_star/M1_2.jpg', './KR_star/M1_3.jpg', './KR_star/M1_4.jpg'],
      ['./KR_star/M2_1.jpg', './KR_star/M2_2.jpg', './KR_star/M2_3.jpg', './KR_star/M2_4.jpg']
    ]
  },
  cnNorm: {
    m: [
      ['./CN_norm/F1_1.jpg', './CN_norm/F1_2.jpg', './CN_norm/F1_3.jpg', './CN_norm/F1_4.jpg', './CN_norm/F1_5.jpg', './CN_norm/F1_6.jpg', './CN_norm/F1_7.jpg', './CN_norm/F1_8.jpg'],
      ['./CN_norm/F2_1.jpg', './CN_norm/F2_2.jpg', './CN_norm/F2_3.jpg', './CN_norm/F2_4.jpg', './CN_norm/F2_5.jpg', './CN_norm/F2_6.jpg', './CN_norm/F2_7.jpg', './CN_norm/F2_8.jpg'],
      ['./CN_norm/F3_1.jpg', './CN_norm/F3_2.jpg', './CN_norm/F3_3.jpg', './CN_norm/F3_4.jpg', './CN_norm/F3_5.jpg', './CN_norm/F3_6.jpg', './CN_norm/F3_7.jpg', './CN_norm/F3_8.jpg'],
      ['./CN_norm/F4_1.jpg', './CN_norm/F4_2.jpg', './CN_norm/F4_3.jpg', './CN_norm/F4_4.jpg', './CN_norm/F4_5.jpg', './CN_norm/F4_6.jpg', './CN_norm/F4_7.jpg', './CN_norm/F4_8.jpg'],
      ['./CN_norm/F5_1.jpg', './CN_norm/F5_2.jpg', './CN_norm/F5_3.jpg', './CN_norm/F5_4.jpg', './CN_norm/F5_5.jpg', './CN_norm/F5_6.jpg', './CN_norm/F5_7.jpg', './CN_norm/F5_8.jpg'],
      ['./CN_norm/F6_1.jpg', './CN_norm/F6_2.jpg', './CN_norm/F6_3.jpg', './CN_norm/F6_4.jpg', './CN_norm/F6_5.jpg', './CN_norm/F6_6.jpg', './CN_norm/F6_7.jpg', './CN_norm/F6_8.jpg']
    ],
    f: [
      ['./CN_norm/M1_1.jpg', './CN_norm/M1_2.jpg', './CN_norm/M1_3.jpg', './CN_norm/M1_4.jpg'],
      ['./CN_norm/M2_1.jpg', './CN_norm/M2_2.jpg', './CN_norm/M2_3.jpg', './CN_norm/M2_4.jpg']
    ]
  },
  usStar: {
    m: [
      ['./US_star/F1_1.jpg', './US_star/F1_2.jpg', './US_star/F1_3.jpg', './US_star/F1_4.jpg', './US_star/F1_5.jpg', './US_star/F1_6.jpg', './US_star/F1_7.jpg', './US_star/F1_8.jpg'],
      ['./US_star/F2_1.jpg', './US_star/F2_2.jpg', './US_star/F2_3.jpg', './US_star/F2_4.jpg', './US_star/F2_5.jpg', './US_star/F2_6.jpg', './US_star/F2_7.jpg', './US_star/F2_8.jpg'],
      ['./US_star/F3_1.jpg', './US_star/F3_2.jpg', './US_star/F3_3.jpg', './US_star/F3_4.jpg', './US_star/F3_5.jpg', './US_star/F3_6.jpg', './US_star/F3_7.jpg', './US_star/F3_8.jpg'],
      ['./US_star/F4_1.jpg', './US_star/F4_2.jpg', './US_star/F4_3.jpg', './US_star/F4_4.jpg', './US_star/F4_5.jpg', './US_star/F4_6.jpg', './US_star/F4_7.jpg', './US_star/F4_8.jpg'],
      ['./US_star/F5_1.jpg', './US_star/F5_2.jpg', './US_star/F5_3.jpg', './US_star/F5_4.jpg', './US_star/F5_5.jpg', './US_star/F5_6.jpg', './US_star/F5_7.jpg', './US_star/F5_8.jpg'],
      ['./US_star/F6_1.jpg', './US_star/F6_2.jpg', './US_star/F6_3.jpg', './US_star/F6_4.jpg', './US_star/F6_5.jpg', './US_star/F6_6.jpg', './US_star/F6_7.jpg', './US_star/F6_8.jpg']
    ],
    f: [
      ['./US_star/M1_1.jpg', './US_star/M1_2.jpg', './US_star/M1_3.jpg', './US_star/M1_4.jpg'],
      ['./US_star/M2_1.jpg', './US_star/M2_2.jpg', './US_star/M2_3.jpg', './US_star/M2_4.jpg']
    ]
  }
}
// 定义主刺激性别
export const genderTarget = Math.random() > 0.45 ? '男' : '女'
// 导出刺激
export default genderTarget === '男' ? stimulusMale : stimulusFemale
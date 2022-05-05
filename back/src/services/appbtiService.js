import { Appbti } from '../db'; // from을 폴더(db) 로 설정 시, 디폴트로 index.js 로부터 import함.

class appbtiService {
  static async addResult({ answers }) {
    const fun = [
      'Game',
      'Entertainment',
      'Music & Audio',
      'Comics',
      'Food & Drink',
      'Dating',
      'Beauty',
      'Events',
      'Shopping',
      'Social',
      'Photography',
      'Communication',
      'Video Players & Editors',
      'Art & Design',
      'Travel & Local',
      'News & Magazines',
      'Books & Reference',
      'Personalization',
    ];

    const useful = [
      'Education',
      'Tools',
      'Lifestyle',
      'Medical',
      'Maps & Navigation',
      'House & Home',
      'Health & Fitness',
      'Finance',
      'Libraries & Demo',
      'Parenting',
      'Business',
      'Weather',
      'Personalization',
      'Productivity',
      'Books & Reference',
      'Communication',
      'Video Players & Editors',
      'Art & Design',
      'Travel & Local',
      'Auto & Vehicles',
      'News & Magazines',
      'Social',
      'Shopping',
    ];
    // const filtercondition = {
    //   a1: [{ type: 'and', content: { category: { $in: fun } } }],
    //   a2: [{ type: 'and', content: { category: { $in: useful } } }],
    //   b1: [{ type: 'and', content: { lastUpdated: { $gt: 2019 } } }],
    //   b2: [{ type: 'and', content: {} }],
    //   c1: [{ type: 'and', content: { installs: { $gte: 200000 } } }],
    //   c2: [{ type: 'and', content: { rating: { $gte: 4.0 }, installs: { $lte: 200000 } } }],
    //   d1: [
    //     { type: 'or', content: { inAppPurchases: { $eq: true } } },
    //     { type: 'or', content: { free: { $eq: false } } },
    //     { type: 'and', content: { rating: { $gte: 3.9 } } },
    //   ],
    //   d2: [{ type: 'and', content: { free: { $eq: true }, rating: { $gte: 3.5 } } }],
    //   e1: [{ type: 'and', content: { released: { $lt: 2018 }, installs: { $gte: 100000 } } }],
    //   e2: [{ type: 'and', content: { released: { $gt: 2018 }, installs: { $gte: 50000 } } }],
    //   f1: [
    //     { type: 'or', content: { adsupported: { $eq: true } } },
    //     { type: 'or', content: { inAppPurchases: { $eq: true } } },
    //     { type: 'and', content: { installs: { $gte: 100000 } } },
    //   ],
    //   f2: [
    //     { type: 'or', content: { editorsChoice: { $eq: true } } },
    //     { type: 'or', content: { installs: { $gte: 2000000 } } },
    //     { type: 'or', content: { adsupported: { $eq: false } } },
    //   ],
    // };

    // let resultNum = 20;
    // let result = [];
    // let orfilter = [];
    // let filter = { $and: [] };

    // for (let i = 0; i < answers.length - 1; i++) {
    //   orfilter = [];
    //   for (let j = 0; j < filtercondition[answers[i]].length; j++) {
    //     if (filtercondition[answers[i]][j].type == 'and') {
    //       filter['$and'].push(filtercondition[answers[i]][j].content);
    //     } else {
    //       orfilter.push(filtercondition[answers[i]][j].content);
    //     }
    //   }
    //   if (orfilter.length != 0) {
    //     filter['$and'].push({ $or: [...orfilter] });
    //   }
    // }
    // const createdAppbtiResult = await Appbti.findResult({ filter });

    const filtercondition = {
      a1: { category: { $in: fun } },
      a2: { category: { $in: useful } },
      b1: { lastUpdated: { $gt: 2019 } },
      b2: {},
      c1: { installs: { $gte: 200000 } },
      c2: { rating: { $gte: 4.0 }, installs: { $lte: 200000 } },
      d1: [
        { type: 'or', content: { inAppPurchases: { $eq: true } } },
        { type: 'or', content: { free: { $eq: false } } },
        { type: 'and', content: { rating: { $gte: 3.9 } } },
      ],
      d2: { free: { $eq: true }, rating: { $gte: 3.5 } },
      e1: { released: { $lt: 2018 }, installs: { $gte: 100000 } },
      e2: { released: { $gt: 2018 }, installs: { $gte: 50000 } },
      f1: [
        { type: 'or', content: { adsupported: { $eq: true } } },
        { type: 'or', content: { inAppPurchases: { $eq: true } } },
        { type: 'and', content: { installs: { $gte: 100000 } } },
      ],
      f2: [
        { type: 'or', content: { editorsChoice: { $eq: true } } },
        { type: 'or', content: { installs: { $gte: 2000000 } } },
        { type: 'or', content: { adsupported: { $eq: false } } },
      ],
    };

    let resultNum = 20;
    let result = [];
    let orfilter = [];
    let filter = { $and: [] };
    for (let i = 0; i < answers.length - 1; i++) {
      orfilter = [];
      if (!Array.isArray(filtercondition[answers[i]])) {
        filter['$and'].push(filtercondition[answers[i]]);
        continue;
      }
      for (let j = 0; j < filtercondition[answers[i]].length; j++) {
        if (filtercondition[answers[i]][j].type == 'and') {
          filter['$and'].push(filtercondition[answers[i]][j].content);
        } else {
          orfilter.push(filtercondition[answers[i]][j].content);
        }
      }
      if (orfilter.length != 0) {
        filter['$and'].push({ $or: [...orfilter] });
      }
    }
    console.log(filter);
    const createdAppbtiResult = await Appbti.findResult({ filter });

    if (answers[-1] == 'g1') {
      const lastanswerResult = await Appbti.findByKey({ answers: lastanswer });
      resultNum = 17;
      for (let j = 0; j < 3; j++) {
        result.push(lastanswerResult.result[Math.floor(Math.random() * lastanswerResult.result.length)]);
      }
    }

    // { field: { $in: [<value1>, <value2>, ... <valueN> ] } }
    // const lastanswer = answers.substring(12, 14);
    // const otheranswers = answers.substring(0, 12);

    // const lastanswer = answers[6];
    // const otheranswers = answers.slice(0, 6);
    // // 마지막 질문에 대한 답변 추가

    // const appbtiresult = await Appbti.findByKey({ answers: otheranswers });
    // for (let i = 0; i < resultNum; i++) {
    //   result.push(appbtiresult.result[Math.floor(Math.random() * appbtiresult.result.length)]);
    // }

    // const newResult = { userId, answers, result };
    // const previousresult = await Appbti.findById({ userId });
    // let createdAppbtiResult;
    // if (previousresult) {
    //   createdAppbtiResult = await Appbti.update({ userId, newResult });
    // } else {
    //   createdAppbtiResult = await Appbti.create({ newResult });
    // }
    // createdAppbtiResult.errorMessage = null; // 문제 없이 db 저장 완료되었으므로 에러가 없음.

    return createdAppbtiResult;
  }

  static async getAppbtiResult({ userId }) {
    const appbtiresult = await Appbti.findById({ userId });

    if (!appbtiresult) {
      const errorMessage = '해당 포스트가 없습니다. 다시 한 번 확인해 주세요.';
      return { errorMessage };
    }

    return appbtiresult;
  }
}

export { appbtiService };

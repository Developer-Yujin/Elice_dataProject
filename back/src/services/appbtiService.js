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
    let createdAppbtiResult = [];
    let orfilter = [];
    let filter = { $and: [] };
    //  답변에 맞는 filter 생성
    for (let i = 0; i < answers.length - 1; i++) {
      orfilter = [];
      if (!Array.isArray(filtercondition[answers[i]])) {
        filter['$and'].push(filtercondition[answers[i]]);
        console.log(filtercondition[answers[i]]);
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
    const appbtiresult = await Appbti.findResult({ filter });

    // if (answers[-1] == 'g1') {
    //   const lastanswerResult = await Appbti.findByKey({});
    //   resultNum = 17;
    //   for (let j = 0; j < 3; j++) {
    //     result.push(lastanswerResult.result[Math.floor(Math.random() * lastanswerResult.result.length)]);
    //   }
    // }

    for (let i = 0; i < resultNum; i++) {
      createdAppbtiResult.push(appbtiresult[Math.floor(Math.random() * appbtiresult.length)]);
    }

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

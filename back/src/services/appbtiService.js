import { Appbti } from '../db'; // from을 폴더(db) 로 설정 시, 디폴트로 index.js 로부터 import함.
import { googleplayScrape } from '../utils/googleplayScrape';
import { cacheget, cachehas, cacheset } from '../utils/cache';
class appbtiService {
  static async addResult({ answers }) {
    // let start = new Date();
    const cachekey = answers.join('');
    let appbtiresult = {};
    if (cachehas(cachekey)) {
      appbtiresult = cacheget(cachekey);
    } else {
      const fun = ['Game', 'Entertainment', 'Music & Audio', 'Comics', 'Food & Drink', 'Dating', 'Beauty', 'Events', 'Social', 'Photography', 'Travel & Local', 'Books & Reference', 'Personalization'];

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
        'Productivity',
        'Communication',
        'Art & Design',
        'Auto & Vehicles',
        'News & Magazines',
        'Shopping',
        'Video Players & Editors',
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

      let orfilter = [];
      let filter = { $and: [] };
      //  답변에 맞는 filter 생성
      for (let i = 0; i < answers.length; i++) {
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
      appbtiresult = await Appbti.findResult({ filter });
      cacheset(cachekey, appbtiresult);
    }
    // let end = new Date();

    // console.log(end - start);
    let maxNum = 30;
    let createdAppbtiResult = [];
    let selectedApps = [];
    let scrapedApp;

    for (let i = 0; i < maxNum; i++) {
      selectedApps.push(appbtiresult[Math.floor(Math.random() * appbtiresult.length)]);
    }

    await Promise.all(
      selectedApps.map(async app => {
        scrapedApp = await googleplayScrape({ appId: app.id });
        if (scrapedApp === null) {
          return;
        }
        app.icon = scrapedApp.icon;
        createdAppbtiResult.push(app);
      })
    );
    return createdAppbtiResult.slice(0, 20);
  }
}

export { appbtiService };

import { GoogleAppModel } from '../schemas/googleApp';
// import { KoreanAppModel } from '../schemas/googlekoreanApp';
import { AppbtiResultModel } from '../schemas/appbtiresult';

class Appbti {
  // static async findkoreanApps({}) {
  //   const apps = await KoreanAppModel.findAll({});
  //   return apps;
  // }
  // static async create({ newResult }) {
  //   const createdNewResult = await AppbtiResultModel.create(newResult);
  //   return createdNewResult;
  // }
  // static async findById({ userId }) {
  //   const appbtiresult = await AppbtiResultModel.findOne({ userId });

  //   return appbtiresult;
  // }

  static async findResult({ filter }) {
    const appbtiresult = await GoogleAppModel.find(filter);
    return appbtiresult;
  }

  // static async update({ userId, newResult }) {
  //   const filter = { userId };
  //   const update = { $set: newResult };
  //   const option = { returnOriginal: false };
  //   const updatedPost = await AppbtiResultModel.findOneAndUpdate(filter, update, option);
  //   return updatedPost;
  // }
}

export { Appbti };

import { GoogleAppModel } from '../schemas/googleApp';

class Appbti {
  static async findResult({ filter }) {
    const appbtiresult = await GoogleAppModel.find(filter);
    return appbtiresult;
  }
}

export { Appbti };

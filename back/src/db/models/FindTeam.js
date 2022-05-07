import { FindTeamModel } from '../schemas/findteam';

class FindTeam {
  static async create({ newPost }) {
    const createdNewPost = await FindTeamModel.create(newPost);
    return createdNewPost;
  }

  static async findById({ post_id }) {
    // 변수명 수정
    const findTeamPost = await FindTeamModel.findOne({ _id: post_id }).populate('author', 'id email name');
    return findTeamPost;
  }

  static async findlike({ post_id, userId }) {
    const findTeamPost = await FindTeamModel.findOne({ _id: post_id }, { likes: { $elemMatch: { $eq: userId } } });
    return findTeamPost.likes;
  }

  static async findAll(newFilter, order) {
    // 변수명 변경
    const findTeamPosts = await FindTeamModel.find(newFilter)
      .find({ tag: { $in: newFilter.tag } })
      .populate('author', 'id email name')
      .sort({ [order]: -1 });
    return findTeamPosts;
  }

  static async findAllNoTag(newFilter, order) {
    const findTeamPosts = await FindTeamModel.find(newFilter)
      .populate('author', 'id email name')
      .sort({ [order]: -1 });
    return findTeamPosts;
  }

  static async findAllNoTagWithStatus(newFilter, order) {
    const findTeamPosts = await FindTeamModel.find(newFilter)
      .find({ status: { $eq: newFilter.status } })
      .populate('author', 'id email name')
      .sort({ [order]: -1 });
    return findTeamPosts;
  }

  static async update({ post_id, newValues }) {
    const filter = { _id: post_id };
    const update = newValues;
    const option = { returnOriginal: false };
    const updatedPost = await FindTeamModel.findOneAndUpdate(filter, update, option);
    return updatedPost;
  }

  static async delete({ post_id }) {
    await FindTeamModel.deleteOne({ _id: post_id });
    return true;
  }
}

export { FindTeam };

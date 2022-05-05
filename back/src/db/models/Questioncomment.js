import { QuestioncommentModel } from '../schemas/questioncomment';

class Questioncomment {
  static async createComment({ newComment }) {
    const createdNewComment = await QuestioncommentModel.create(newComment);
    return createdNewComment;
  }

  static async findById({ comment_id }) {
    const comment = await QuestioncommentModel.findOne({ _id: comment_id });
    return comment;
  }

  static async findByUserId({ user_id }) {
    const comments = await QuestioncommentModel.find({ user_id });
    return comments;
  }

  static async findByBoardId({ board_id }) {
    const comments = await QuestioncommentModel.find({ board_id });
    return comments;
  }

  static async update({ comment_id, newValues }) {
    const filter = { _id: comment_id };
    const update = { $set: newValues };
    const option = { returnOriginal: false };

    const comment = await QuestioncommentModel.findOneAndUpdate(filter, update, option);
    return comment;
  }

  static async delete({ comment_id }) {
    const deletedComment = await QuestioncommentModel.deleteOne({ _id: comment_id });
    return deletedComment;
  }
}

export { Questioncomment };

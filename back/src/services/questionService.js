import { Question } from '../db';

class questionService {
  static async addPost({ user_id, name, title, content }) {
    const newPost = { user_id, name, title, content };
    const createdNewPost = await Question.create({ newPost });
    createdNewPost.errorMessage = null;
    return createdNewPost;
  }

  static async getUserPosts({ user_id }) {
    const questionPosts = await Question.findAllByUserId({ user_id });
    return questionPosts;
  }

  static async getPosts() {
    const questionPosts = await Question.findAll();
    return questionPosts;
  }

  static async setPost({ post_id, toUpdate }) {
    let questionPost = await Question.findById({ post_id });

    if (!questionPost) {
      const errorMessage = '해당 포스트가 없습니다. 다시 한 번 확인해 주세요.';
      return { errorMessage };
    }

    if (!toUpdate.title) {
      toUpdate.title = questionPost.title;
    }
    if (!toUpdate.content) {
      toUpdate.content = questionPost.content;
    }

    const newValues = {
      title: toUpdate.title,
      content: toUpdate.content,
    };

    questionPost = await Question.update({ post_id, newValues });
    return questionPost;
  }

  static async getPostInfo({ post_id }) {
    const questionPost = await Question.findById({ post_id });

    if (!questionPost) {
      const errorMessage = '해당 포스트가 없습니다. 다시 한 번 확인해 주세요.';
      return { errorMessage };
    }

    return questionPost;
  }

  static async deletePost({ post_id }) {
    const questionPost = await Question.findById({ post_id });

    if (!questionPost) {
      const errorMessage = '해당 포스트가 없습니다. 다시 한 번 확인해 주세요.';
      return { errorMessage };
    }
    const res = await Question.delete({ post_id });

    return res;
  }
}

export { questionService };

import { FreeBoard } from '../db';

class freeboardService {
  static async addPost({ user_id, name, title, content }) {
    const newPost = { user_id, name, title, content };
    const createdNewPost = await FreeBoard.create({ newPost });
    createdNewPost.errorMessage = null;
    return createdNewPost;
  }

  static async getUserPosts({ user_id }) {
    const posts = await FreeBoard.findAllByUserId({ user_id });
    return posts;
  }

  static async getPosts({ currentPage, perPage }) {
    const posts = await FreeBoard.findAll({ currentPage, perPage })
    return posts;
  }

  static async setPostlike({ userId, post_id }) {
    const post = await FreeBoard.findById({ post_id });

    if (!post) {
      const errorMessage = '해당 포스트가 없습니다. 다시 한 번 확인해 주세요.';
      return { errorMessage };
    }

    const like = await FreeBoard.findlike({ post_id, userId });
    let status, result;
    // 이미 좋아요를 누른 상태라면?
    if (like.length != 0) {
      status = '$pull';
      result = -1;
    } else {
      status = '$push';
      result = 1;
    }
    const newValues = {
      [status]: {
        likes: userId,
      },
      $inc: { likesCount: result },
    };

    const res = await FreeBoard.updatearray({ post_id, newValues });
    return res;
  }

  static async setPost({ post_id, toUpdate }) {
    let post = await FreeBoard.findById({ post_id });

    if (!post) {
      const errorMessage = '해당 포스트가 없습니다. 다시 한 번 확인해 주세요.';
      return { errorMessage };
    }

    if (!toUpdate.title) {
      toUpdate.title = post.title;
    }
    if (!toUpdate.content) {
      toUpdate.content = post.content;
    }

    const newValues = {
      title: toUpdate.title,
      content: toUpdate.content,
    };

    post = await FreeBoard.update({ post_id, newValues });
    return post;
  }

  static async getPostInfo({ post_id }) {
    const post = await FreeBoard.findById({ post_id });

    if (!post) {
      const errorMessage = '해당 포스트가 없습니다. 다시 한 번 확인해 주세요.';
      return { errorMessage };
    }

    return post;
  }

  static async deletePost({ post_id }) {
    const post = await FreeBoard.findById({ post_id });

    if (!post) {
      const errorMessage = '해당 포스트가 없습니다. 다시 한 번 확인해 주세요.';
      return { errorMessage };
    }
    const res = await FreeBoard.delete({ post_id });

    return res;
  }
}

export { freeboardService };

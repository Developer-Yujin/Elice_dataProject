import { Recruit, User } from '../db';

class recruitService {
  static async addPost({ userId, title, content, tag }) {
    const author = await User.findById({ userId });
    const newPost = { author, title, content, tag };
    const createdNewPost = await Recruit.create({ newPost });
    createdNewPost.errorMessage = null;
    return createdNewPost;
  }

  static async getPostInfo({ post_id }) {
    const recruitPost = await Recruit.findById({ post_id });

    if (!recruitPost) {
      const errorMessage = '해당 포스트가 없습니다. 다시 한 번 확인해 주세요.';
      return { errorMessage };
    }

    return recruitPost;
  }
  static async setPostlike({ userId, post_id }) {
    const recruitPost = await Recruit.findById({ post_id });

    if (!recruitPost) {
      const errorMessage = '해당 포스트가 없습니다. 다시 한 번 확인해 주세요.';
      return { errorMessage };
    }

    const like = await Recruit.findlike({ post_id, userId });
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

    const res = await Recruit.update({ post_id, newValues });
    return res;
  }

  static async getPostTag({ tag }) {
    const recruitPost = await Recruit.findTag({ tag });
    return recruitPost;
  }

  static async setPost({ userId, post_id, toUpdate }) {
    let recruitPost = await Recruit.findById({ post_id });

    if (!recruitPost) {
      const errorMessage = '해당 포스트가 없습니다. 다시 한 번 확인해 주세요.';
      return { errorMessage };
    }

    if (recruitPost.author.id !== userId) {
      const errorMessage = '권한이 없습니다. 자신이 작성한 게시글만 변경할 수 있습니다. ';
      return { errorMessage };
    }

    if (!toUpdate.title) {
      toUpdate.title = recruitPost.title;
    }
    if (!toUpdate.content) {
      toUpdate.content = recruitPost.content;
    }
    if (!toUpdate.status) {
      toUpdate.status = recruitPost.status;
    }
    if (!toUpdate.tag) {
      toUpdate.tag = recruitPost.tag;
    }

    const newValues = {
      $set: {
        title: toUpdate.title,
        content: toUpdate.content,
        status: toUpdate.status,
        tag: toUpdate.tag,
      },
    };

    recruitPost = await Recruit.update({ post_id, newValues });
    return recruitPost;
  }

  static async getPosts(filter) {
    let newFilter = {};
    let order;

    if (filter.status && !filter.tag) {
      newFilter.status = filter.status.replace('/', '');

      if (filter.order) {
        newFilter.order = filter.order;
      } else {
        order = 'updatedAt';
      }

      const recruitPosts = await Recruit.findAllNoTagWithStatus(newFilter, order);
      return recruitPosts;
    }

    if (filter.status) {
      newFilter.status = filter.status;
    }
    if (filter.tag) {
      newFilter.tag = filter.tag.split(',');
      var last = newFilter.tag[newFilter.tag.length - 1].replace('/', '');
      newFilter.tag.pop();
      newFilter.tag.push(last);
    }
    if (filter.order) {
      newFilter.order = filter.order;
    } else {
      order = 'updatedAt';
    }

    if (!filter.tag) {
      const recruitPosts = await Recruit.findAllNoTag(newFilter, order);
      return recruitPosts;
    }

    const recruitPosts = await Recruit.findAll(newFilter, order);
    return recruitPosts;
  }

  static async deletePost({ userId, post_id }) {
    const recruitPost = await Recruit.findById({ post_id });

    if (!recruitPost) {
      const errorMessage = '해당 포스트가 없습니다. 다시 한 번 확인해 주세요.';
      return { errorMessage };
    }

    if (recruitPost.author.id !== userId) {
      const errorMessage = '권한이 없습니다. 자신이 작성한 게시글만 삭제할 수 있습니다. ';
      return { errorMessage };
    }

    const res = await Recruit.delete({ post_id });

    return res;
  }
}

export { recruitService };

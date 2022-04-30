import is from '@sindresorhus/is';
import { Router } from 'express';
import { loginRequired } from '../middlewares/loginRequired';
import { findteamService } from '../services/findteamService';

const findteamRouter = Router();
// findteamRouter.use(loginRequired);

// 특정 글 조회 API
findteamRouter.post('/findteams', loginRequired, async (req, res, next) => {
  try {
    /*
     #swagger.tags = ['findteam'] 
     #swagger.summary = '팀 찾기 게시글에 글 생성' 
     #swagger.security = [{ "bearerAuth": [] }]
    */
    const { user_id, name, title, content, stack } = req.body;

    const newPost = await findteamService.addPost({
      user_id,
      name,
      title,
      content,
      stack,
    });

    if (newPost.errorMessage) {
      throw new Error(newPost.errorMessage);
    }

    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
});

// 특정 글 조회 API
findteamRouter.get('/findteams/:id', loginRequired, async (req, res, next) => {
  try {
    /*
     #swagger.tags = ['findteam'] 
     #swagger.summary = '게시글 id에 해당하는 글 가져오기' 
     #swagger.security = [{ "bearerAuth": [] }]
    */
    const post_id = req.params.id;
    const currentPostInfo = await findteamService.getPostInfo({ post_id });

    if (currentPostInfo.errorMessage) {
      throw new Error(currentPostInfo.errorMessage);
    }

    res.status(200).send(currentPostInfo);
  } catch (error) {
    next(error);
  }
});

// 특정 글 수정 API
findteamRouter.put('/findteams/:id', loginRequired, async (req, res, next) => {
  try {
    /*
     #swagger.tags = ['findteam'] 
     #swagger.summary = '게시글 수정하기' 
     #swagger.security = [{ "bearerAuth": [] }]
    */
    const post_id = req.params.id;
    const title = req.body.title ?? null;
    const content = req.body.content ?? null;
    const stack = req.body.stack ?? null;

    const toUpdate = { title, content, stack };

    const updatedPost = await findteamService.setPost({ post_id, toUpdate });

    if (updatedPost.errorMessage) {
      throw new Error(updatedPost.errorMessage);
    }

    res.status(200).json(updatedPost);
  } catch (error) {
    next(error);
  }
});

// 특정 유저의 모든 글 접근
findteamRouter.get('/findteamlist/:user_id', loginRequired, async (req, res, next) => {
  try {
    /*
     #swagger.tags = ['findteam'] 
     #swagger.summary = '유저 id에 해당하는 모든 글 목록 가져오기' 
     #swagger.security = [{ "bearerAuth": [] }]
    */
    const user_id = req.params.user_id;
    const posts = await findteamService.getUserPosts({ user_id });
    res.status(200).send(posts);
  } catch (error) {
    next(error);
  }
});

// findteam 게시판의 모든 글
findteamRouter.get('/findteamlist', loginRequired, async (req, res, next) => {
  try {
    /*
     #swagger.tags = ['findteam'] 
     #swagger.summary = '모든 게시글 가져오기' 
     #swagger.security = [{ "bearerAuth": [] }]
    */
    const posts = await findteamService.getPosts();
    res.status(200).send(posts);
  } catch (error) {
    next(error);
  }
});

// 특정 글 삭제 API
findteamRouter.delete('/findteams/:id', loginRequired, async (req, res, next) => {
  try {
    /*
     #swagger.tags = ['findteam'] 
     #swagger.summary = '게시글 삭제하기' 
     #swagger.security = [{ "bearerAuth": [] }]
    */
    const post_id = req.params.id;
    const deletedPost = await findteamService.deletePost({ post_id });

    if (deletedPost.errorMessage) {
      throw new Error(deletedPost.errorMessage);
    }

    res.status(200).send(deletedPost);
  } catch (error) {
    next(error);
  }
});

export { findteamRouter };

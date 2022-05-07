import is from '@sindresorhus/is';
import { Router } from 'express';
import { appbtiService } from '../services/appbtiService';

const appbtiRouter = Router();

appbtiRouter.post('/appbti', async (req, res, next) => {
  try {
    /*
     #swagger.tags = ['Appbti'] 
     #swagger.summary = 'appbti 결과 생성, 답변을 body로 받음' 
     #swagger.description = 'appbti 테스트 결과를 반환한다.' 
     #swagger.security = [{ "bearerAuth": [] }]
    */
    if (is.emptyObject(req.body)) {
      throw new Error('headers의 Content-Type을 application/json으로 설정해주세요');
    }

    const answers = req.body.answers;

    const newresult = await appbtiService.addResult({ answers });
    res.status(201).json(newresult);
  } catch (error) {
    next(error);
  }
});

export { appbtiRouter };

import { rest } from 'msw';


export const postMessagesSet = (customResult: any = {}) => {
  return rest.post(
    '*ZHRXSS_FDBK_SERV_NEW_SRV/messagesSet*',
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(customResult));
    }
  );
};

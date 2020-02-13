const koa = require('koa');

class CORS {
  proxy() {
    return async (ctx, next) => {
      const requestOrigin = ctx.get('origin')
      if (requestOrigin) {
        ctx.res.setHeader('Access-Control-Allow-Origin', requestOrigin);
      }
      await next()
    }
  }
}

module.exports = CORS
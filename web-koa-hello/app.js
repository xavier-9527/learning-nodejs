const Koa = require('koa');

const app = new Koa();

app.use(async function (ctx, next) {
  console.log(`Request URL: ${ctx.request.method}, ${ctx.request.url}`);
  await next();
});

app.use(async function (ctx, next) {
  const start = new Date().getTime();
  await next();
  const time = new Date().getTime() - start;
  console.log(`Time: ${time} ms`);
});

app.use(async function (ctx, next) {
  await next();
  ctx.response.type = 'text/html';
  ctx.response.body = '<h1>This is my first Koa APP....</h1>';
});

app.listen(8080);

console.log('app started at port 8080...');

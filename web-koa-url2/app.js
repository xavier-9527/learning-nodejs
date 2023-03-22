const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const controller = require('./controller');

const app = new Koa();

app.use(async (ctx, next) => {
  console.log(`Method: ${ctx.request.method}, URL: ${ctx.request.url}`);
  await next();
});

app.use(bodyParser());

app.use(controller());

app.listen(8080);

console.log('Koa APP started at port: 8080...');

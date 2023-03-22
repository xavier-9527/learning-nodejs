const Koa = require('koa');
const koaRouterFn = require('koa-router');
const bodyParser = require('koa-bodyparser');

const router = koaRouterFn();

const app = new Koa();

/***
 * web koa url 基本版本
 */
// router.get('/', async function (ctx, next) {
//   ctx.response.type = 'text/html';
//   ctx.response.body = '<h1>The Home of KOA URL</h1>';
//   await next();
// });

router.get('/user/:name', async (ctx, next) => {
  const name = ctx.params.name;
  ctx.response.type = 'text/html';
  ctx.response.body = `<h1>Hello, ${name} !`;
  await next();
});

/***
 *  web koa url 登录版本， 可处理POST请求
 */

router.get('/', async (ctx, next) => {
  ctx.response.type = 'text/html';
  ctx.response.body = `
  <form action="/sign-in" method="post">
    <div>
      User Name: <input type="text" name="userName" value="koa" />
    </div>
    <div>
      Password: <input name="password" type="password" />
    </div>
    <div>
      <input type="submit" value="Submit" />
    </div>
  </form>
  `;
});

router.post('/sign-in', async (ctx, next) => {
  // const body = ctx.request.body;
  // console.log(`Post Body: ${body}`);
  // ctx.response.type = 'text/html';
  // ctx.response.body = `<h1> Welcom, ${body} </h1>`;
  const { userName = '', password = '' } = ctx.request.body;
  console.log(`Signin with name: ${userName}, password: ${password}`);

  ctx.response.type = 'text/html';
  if (userName === 'Mike' && password === '123456') {
    ctx.response.body = `Welcome ${userName} !`;
  } else {
    ctx.response.body = `
      <p><h1>Signin Failed !</h1></p>
      <p><a href="/">Try again</a></p>
    `;
  }

  await next();
});

/**
 * 自定义获取POST请求中的body数据的中间件
 */

// 从ctx.req stream中获取body数据
// http://dev.nodejs.cn/learn/get-http-request-body-data-using-nodejs
// 在连接回调中传入的 ctx.req 对象是一个流。
// 通过监听流的 data 事件来获取数据

// app.use(async (ctx, next) => {
//   const getBody = new Promise((resolve, reject) => {
//     let data = '';
//     ctx.req.on('data', (chunk) => {
//       data += chunk;
//     });
//     ctx.req.on('end', () => {
//       resolve(data);
//     });
//     ctx.req.on('error', (error) => {
//       reject(error);
//     });
//   });

//   const body = await getBody;
//   ctx.request.body = body;
//   await next();
// });

/**
 * 使用第三方库解析request的body
 */
app.use(bodyParser());

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method}, ${ctx.request.url}`);
  await next();
});

app.use(router.routes());

app.listen(8080);

console.log('Koa started at the port 8080...');

const homePage = async (ctx, next) => {
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

  await next();
};

const signinPage = async (ctx, next) => {
  const { userName = '', password = '' } = ctx.request.body;
  console.log(`Current User: ${userName}, Password: ${password}`);

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
};

module.exports = {
  'GET /': homePage,
  'POST /sign-in': signinPage,
};

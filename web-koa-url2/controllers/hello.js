const helloPage = async (ctx, next) => {
  const name = ctx.params.name;
  ctx.response.type = 'text/html';
  ctx.response.body = `
    <h1>Hello, ${name} !</h1>
  `;
  await next();
};

module.exports = {
  'GET /hello/:name': helloPage,
};

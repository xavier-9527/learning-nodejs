const routerFn = require('koa-router');
const fs = require('fs');
const router = routerFn();

const mapControllerToRoute = (controller) => {
  for (let name in controller) {
    const fn = controller[name];
    console.log(`Register URL Mapping: ${name}`);

    if (name.startsWith('GET ')) {
      const url = name.substring(4);
      router.get(url, fn);
    } else if (name.startsWith('POST ')) {
      const url = name.substring(5);
      router.post(url, fn);
    } else if (name.startsWith('PUT ')) {
      const url = name.substring(4);
      router.put(url, fn);
    } else if (name.startsWith('DELETE ')) {
      const url = name.substring(7);
      router.delete(url, fn);
    } else {
      console.log(`Invalid URL: ${name}`);
    }
  }
};

module.exports = function (dir) {
  let controllersDir = dir || 'controllers';
  const path = `${__dirname}/${controllersDir}`;

  fs.readdirSync(path)
    .filter((file) => file.endsWith('.js'))
    .forEach((file) => {
      console.log(`File Name: ${file}`);
      const controller = require(`${path}/${file}`);
      mapControllerToRoute(controller);
    });

  return router.routes();
};

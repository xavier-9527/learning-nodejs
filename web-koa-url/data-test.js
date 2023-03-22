const request = {
  method: 'POST',
  url: '/sign-in',
  header: {
    host: 'localhost:8080',
    connection: 'keep-alive',
    'content-length': '25',
    'cache-control': 'max-age=0',
    'sec-ch-ua':
      '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'upgrade-insecure-requests': '1',
    'user-agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
    origin: 'http://localhost:8080',
    'content-type': 'application/x-www-form-urlencoded',
    accept:
      'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-user': '?1',
    'sec-fetch-dest': 'document',
    referer: 'http://localhost:8080/',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7',
    cookie: 'SESSION=4aa4f9d0-333e-40a3-ae3a-ee1baa4bb4d4',
  },
};

const ctx = {
  request: {
    method: 'POST',
    url: '/sign-in',
    header: {
      host: 'localhost:8080',
      connection: 'keep-alive',
      'content-length': '25',
      'cache-control': 'max-age=0',
      'sec-ch-ua':
        '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'upgrade-insecure-requests': '1',
      origin: 'http://localhost:8080',
      'content-type': 'application/x-www-form-urlencoded',
      'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
      accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'sec-fetch-site': 'same-origin',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-user': '?1',
      'sec-fetch-dest': 'document',
      referer: 'http://localhost:8080/',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7',
      cookie: 'SESSION=4aa4f9d0-333e-40a3-ae3a-ee1baa4bb4d4',
    },
  },
  response: { status: 404, message: 'Not Found', header: {} },
  app: { subdomainOffset: 2, proxy: false, env: 'development' },
  originalUrl: '/sign-in',
  req: '<original node req>',
  res: '<original node res>',
  socket: '<original node socket>',
};

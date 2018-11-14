const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const bearerToken = require('koa-bearer-token');
const cors = require('@koa/cors');
const config = require('config');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
  const { name } = ctx.request.body;
  ctx.body = { text: `Welcome! ${name}` };
});

app.use(cors());
app.use(bodyParser());
app.use(bearerToken());
app.use(router.routes())
app.use(router.allowedMethods());

app.listen(config.port, () => {
  console.log(`Server start port ${config.port}`);
});

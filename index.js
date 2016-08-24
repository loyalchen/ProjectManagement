import Koa from 'Koa';
import path from 'path';
import bodyParser from 'koa-bodyparser';
import etag from 'koa-etag';
import Router from 'koa-router';
import logger from 'koa-logger';
import Views from 'koa-views';
import serve from 'koa-static';

const app = new Koa();
const htmlRouter = new Router();


const view = Views('public/view', {
    map: {
        html: 'ejs'
    }
});

htmlRouter.get('/', (ctx, next) => {
    return ctx.render('task');
});


app.use(logger());
app.use(bodyParser());
app.use(etag());
app.use(view);
app.use(serve(path.join(__dirname, 'public')));

app.use(htmlRouter.routes());
app.use(htmlRouter.allowedMethods());

module.exports = app;
// const app = new Koa();
// app.use(async (ctx,next)=>{
// 	try{
// 		ctx.body = 'Holy Shit!';
// 	}catch(err){
// 		ctx.body = 'Holy Shit:' + err.message;
// 	}
// });

// module.exports = app;
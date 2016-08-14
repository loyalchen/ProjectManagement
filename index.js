import Koa from 'Koa';

const app = new Koa();
app.use(async (ctx,next)=>{
	try{
		ctx.body = 'Holy Shit!';
	}catch(err){
		ctx.body = 'Holy Shit:' + err.message;
	}
});

module.exports = app;
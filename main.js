require('babel-core/register')({
	presets:['es2015-node5','stage-3']
});

const app = require('./index.js');
app.listen(4000);
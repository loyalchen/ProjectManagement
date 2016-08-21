import moment from 'moment';
import request from 'superagent';
import noCache from 'superagent-no-cache';
import Promise from 'bluebird';

const shortTimeFormat = 'hh:mm:ss'

module.exports = {
	localLog: function(msg, time = new Date()) {
		time = moment(time).format(shortTimeFormat);
		let output = `${time} : ${msg}`
		console.log(output);
		return output;
	},

	/**
	 * [noCacheGETRequest description]
	 * @param  {[type]} url      [description]
	 * @param  {[type]} queryObj [description]
	 * @return {[type]}          [description]
	 */
	noCacheGETRequest: function(url, queryObj) {
		return new Promise((resolve, reject) => {
			request
				.get(url)
				.use(noCache)
				.query(queryObj)
				.end(function(err, res) {
					if (err) {
						reject(err, res);
					} else {
						resolve(err, res);
					}
				});
		});
	}
}
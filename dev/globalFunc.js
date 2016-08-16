import moment from 'moment';


const shortTimeFormat = 'hh:mm:ss'

module.exports = {
	localLog: function(msg, time = new Date()) {
		time = moment(time).format(shortTimeFormat);
		let output = `${time} : ${msg}`
		console.log(output);
		return output;
	}
}
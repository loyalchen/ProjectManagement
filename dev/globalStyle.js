import moment from 'moment';
import keyMirror from 'keymirror';

const formats = {
	time: 'YYY-MM-DD hh:mm:ss'
}

module.exports = {
	formatTime: function(time) {
		return time ? moment(time).format(formats.time) : '';
	},

	debugLog: function(msg) {
		console.log(this.formatTime(moment()) + ': ' + msg);
	},

	get constV() {
		return {
			True: 'Yes',
			False: 'No',
			delimiter: '|'
		}
	}

}
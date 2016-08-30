import {connect} from 'react-redux';


let mapStateToProps = (state) => {
	return {
		taskCardInfo:{
			title: state.get('title'),
			tags: state.get('tags')
		}
	};
};

let mpaDispatchToProps = (dispatch) => {
	return {
		nameCheck: (name) => {
			dispatch(actions.isValideName(name));
		}
	};
};
let initialState = Immutable.fromJS({
    title: 'Unit test',
    tags: ['Holly', 'Shit', 'Babe', 'just a test tag'],
    hasCompleted: false
});


export default function taskReducer(state = initialState, action) {
	switch (action.type) {
		case 'CLICK_TASKCARD':
			return state.set('hasCompleted', );
		default:
			return state;
	}
}
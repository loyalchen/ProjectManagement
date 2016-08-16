import {
	List,
	Record
} from 'immutable';


class UserProjectInfo extends Record({
	projectId: 0,
	roleIds: List([]),
	showName: ''
}) {
	/**
	 * [constructor description]
	 * @param  {projectId, roleIds, showName} props {[description]}
	 * @return {[type]}       [description]
	 */
	constructor(props) {
		if (!props) {
			throw new Error('props can\'t be null.')
		}
		super();
		this.projectId = props.projectId || 0;
		this.roleIds = List(props.roleIds) || List([]);
		this.showName = props.showName || '';
	}

}

module.exports = UserProjectInfo;
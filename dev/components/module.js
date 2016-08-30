import React, {
	PropTypes,
	Component
} from 'react';
import TaskCard from './TaskCard';

import gFunc from '../globalFunc';
import _s from 'underscore.string';

class Module extends Component {
	constructor(props) {
		super(props);
		this._handleMore = this._handleMore.bind(this);
		this._handleAdd = this._handleAdd.bind(this);
	}

	_handleMore(){

	}

	_handleAdd(){

	}

	render() {

		return(
			<div className="s_module_init">
				<div className="row s_module_title">
					<div className="col-xs-10">
						{this.props.moduleInfo.name}
					</div>
					<div className="col-xs-2">
						<span className="glyphicon glyphicon-menu-down" onClick="this._handleMore" />
					</div>
				</div>
				<div className="s_module_bottom">
					<span class="glyphicon glyphicon-plus-sign" style="margin:0 auto" aria-hidden="true"></span>
				</div>
			</div>
		);
	}
}
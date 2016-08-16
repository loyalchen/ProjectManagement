import _ from 'underscore';
import UserProjectInfo from './userProjectInfo';
import {
    List,
    Record
} from 'immutable';
import {
    Promise
} from 'bluebird';
import request from 'superagent';
import noCache from 'superagent-no-cache';
import {localLog} from '../../globalFunc';

/**
 * [ownProjects description]
 * @type {Array}
 */
let ownProjects = [];

/**
 * [ownPermissions description]
 * @type {Object}
 */
let ownPermissions = {};

/**
 * [setPermissionObj description]
 * @param {[type]} permisionIds [description]
 */
function setPermissionObj(permisionIds) {
    for (let i = 0; i < permisionIds.length; i++) {
        ownPermissions[permisionIds[i].toString()] = true;
    }
}

function _loadingUserInfo(userId) {
    //TODO: Ajax fatch the UserInfo
    return new Promise(function(resolve,reject){
        request
            .get('URL')
            .use(noCache)
            .then(resolve,reject);
    });
}

class UserInfo extends Record({
    id: 0,
    name: '',
    pictureId: 0,
    pictureUrl: '',
    basePermissionIds: List([]),
    projectInfos: List([])
}) {
    constructor(userId) {
        super();
        // this.id = userId;
        // this.name = userName;
        // this.pictureId = pictureId;
        // this.basePermissionIds = basePermissionIds || [];
        // this.projectInfos = projectInfos || [];
        this.id = userId;    
        loadingUserInfo();
        setPermissionObj(this.basePermissionIds);
    }

    loadingUserInfo(){
        _loadingUserInfo(this.id).then(
            function(err,res){
                this.id = res.body.id;
                this.name = res.body.name;
                this.pictureId = res.body.pictureId;
                this.pictureUrl = res.body.pictureUrl;
                this.basePermissionIds = List(res.body.basePermissionIds);
                this.projectInfos = List(res.body.projectInfos);
        },function(err,res){
            localLog('Fail to fetch the user info.');
            throw new Error('Fail to fetch the user info.');
        })
    }

    

    /**
     * [hasBasePermission description]
     * @param  {[type]}  permissionId [description]
     * @return {Boolean}              [description]
     */
    hasBasePermission(permissionId) {
        //return this.basePermissionIds.indexOf(permissionId) != -1;
        return this.ownPermissions.hasOwnProperty(permissionId.toString());


    }

    /**
     * [ownProjects description]
     * @return {[type]} [description]
     */
    ownProjects() {
        if (ownProjects.length == 0) {
            ownProjects = _.map(this.projectInfos, function(item) {
                return item.projectId;
            });
        }
        return ownProjects;
    }
}
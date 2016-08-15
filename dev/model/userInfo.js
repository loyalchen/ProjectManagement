import _ from 'underscore';

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

class UserInfo {
    constructor(userId, userName, pictureId, basePermissionIds, projectInfos) {
        super();
        this.id = userId;
        this.name = userName;
        this.pictureId = pictureId;
        this.basePermissionIds = basePermissionIds || [];
        this.projectInfos = projectInfos || [];
        setPermissionObj(this.basePermissionIds);
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
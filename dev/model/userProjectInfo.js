class UserProjectInfo {
    constructor(projectId, roleIds, showName) {
        super();
        this.projectId = projectId;
        this.roleIds = roleIds || [];
        this.showName = showName;
    }
    
}

module.exports = UserProjectInfo;
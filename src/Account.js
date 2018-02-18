class Account {
    constructor(client) {
        this.client = client;
    }

    /**
     * GET /v1/account
     */
    get() {
        return this.client.get("/account");
    }

    /**
     * GET /v1/account/teams
     */
    getTeams(params) {
        return this.client.get("/account/teams", params);
    }

    /**
     * GET /v1/account/workspaces
     */
     getWorkspaces(params) {
         return this.client.get("/account/workspaces", params);
     }
}

module.exports = Account;
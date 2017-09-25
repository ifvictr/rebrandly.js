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
}

module.exports = Account;
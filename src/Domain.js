class Domain {
    constructor(client) {
        this.client = client;
    }

    /**
     * GET /v1/domains/count
     */
    count(params) {
        return this.client.get("/domains/count", params);
    }

    /**
     * GET /v1/domains/:id
     */
    get(id) {
        return this.client.get(`/domains/${id}`);
    }

    /**
     * GET /v1/domains
     */
    list(params) {
        return this.client.get("/domains", params);
    }
}

module.exports = Domain;
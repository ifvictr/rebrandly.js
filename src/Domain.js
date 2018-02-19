class Domain {
    constructor(client) {
        this.client = client;
    }

    /**
     * GET /v1/domains/count
     */
    count(params) {
        return this.client.get("/domains/count", params, {
            query: [
                "active",
                "type",
            ]
        });
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
        return this.client.get("/domains", params, {
            query: [
                "active",
                "type",
                "orderBy",
                "orderDir",
                "offset",
                "limit"
            ]
        });
    }
}

module.exports = Domain;
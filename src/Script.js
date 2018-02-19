class Script {
    constructor(client) {
        this.client = client;
    }

    /**
     * GET /v1/scripts/count
     */
    count() {
        return this.client.get("/scripts/count");
    }

    /**
     * POST /v1/scripts
     */
    create(params) {
        return this.client.post("/scripts", params, {
            body: [
                "name",
                "value"
            ]
        });
    }

    /**
     * DELETE /v1/scripts/:id
     */
    delete(id) {
        return this.client.delete(`/scripts/${id}`);
    }

    /**
     * GET /v1/scripts/:id
     */
    get(id) {
        return this.client.get(`/scripts/${id}`);
    }

    /**
     * GET /v1/scripts
     */
    list(params) {
        return this.client.get("/scripts", params, {
            query: [
                "orderBy",
                "orderDir",
                "offset",
                "limit"
            ]
        });
    }

    /**
     * POST /v1/scripts/:id
     */
    update(id, params) {
        return this.client.post(`/scripts/${id}`, params, {
            body: [
                "name",
                "value"
            ]
        });
    }
}

module.exports = Script;
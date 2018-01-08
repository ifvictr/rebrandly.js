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
        return this.client.post("/scripts", params);
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
        return this.client.get("/scripts", params);
    }

    /**
     * POST /v1/scripts/:id
     */
    update(id, params) {
        return this.client.post(`/scripts/${id}`, params);
    }
}

module.exports = Script;
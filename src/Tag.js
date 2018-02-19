class Tag {
    constructor(client) {
        this.client = client;
    }

    /**
     * GET /v1/tags/count
     */
    count() {
        return this.client.get("/tags/count");
    }

    /**
     * POST /v1/tags
     */
    create(params) {
        return this.client.post("/tags", params, {
            body: [
                "name",
                "color"
            ]
        });
    }

    /**
     * DELETE /v1/tags/:id
     */
    delete(id) {
        return this.client.delete(`/tags/${id}`);
    }

    /**
     * GET /v1/tags/:id
     */
    get(id) {
        return this.client.get(`/tags/${id}`);
    }

    /**
     * GET /v1/tags
     */
    list(params) {
        return this.client.get("/tags", params, {
            query: [
                "orderBy",
                "orderDir",
                "offset",
                "limit"
            ]
        });
    }

    /**
     * POST /v1/tags/:id
     */
    update(id, params) {
        return this.client.post(`/tags/${id}`, params, {
            body: [
                "name",
                "color"
            ]
        });
    }
}

module.exports = Tag;
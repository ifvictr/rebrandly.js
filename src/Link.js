class Link {
    constructor(client) {
        this.client = client;
    }

    /**
     * GET /v1/links/count
     */
    count(params) {
        return this.client.get("/links/count", params);
    }

    /**
     * POST /v1/links
     */
    create(params) {
        return this.client.post("/links", params);
    }

    /**
     * DELETE /v1/links/:id
     */
    delete(id, params) {
        return this.client.delete(`/links/${id}`, params);
    }

    /**
     * GET /v1/links/:id
     */
    get(id) {
        return this.client.get("/links/" + id);
    }

    /**
     * GET /v1/links/:id/scripts
     */
    getScripts(id, params) {
        return this.client.get(`/links/${id}/scripts`, params);
    }

    /**
     * GET /v1/links
     */
    list(params) {
        return this.client.get("/links", params);
    }

    /**
     * POST /v1/links/:id
     */
    update(id, params) {
        return this.client.post(`/links/${id}`, params);
    }
}

module.exports = Link;
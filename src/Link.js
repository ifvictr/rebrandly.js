class Link {
    constructor(client) {
        this.client = client;
    }

    /**
     * GET /v1/links/count
     */
    count(params) {
        return this.client.get("/links/count", params, {
            query: [
                "favourite",
                "status",
                "id"
            ]
        });
    }

    /**
     * POST /v1/links
     */
    create(params) {
        return this.client.post("/links", params, {
            body: [
                "destination",
                "slashtag",
                "title",
                "domain"
            ]
        });
    }

    /**
     * DELETE /v1/links/:id
     */
    delete(id, params) {
        return this.client.delete(`/links/${id}`, params, {
            query: [
                "trashed"
            ]
        });
    }

    /**
     * GET /v1/links/:id
     */
    get(id) {
        return this.client.get(`/links/${id}`);
    }

    /**
     * GET /v1/links/:id/scripts
     */
    getScripts(id, params) {
        return this.client.get(`/links/${id}/scripts`, params, {
            query: [
                "orderDir",
                "offset",
                "limit",
                "orderBy"
            ]
        });
    }

    /**
     * GET /v1/links/:id/tags
     */
    getTags(id, params) {
        return this.client.get(`/links/${id}/tags`, params, {
            query: [
                "orderDir",
                "offset",
                "limit",
                "orderBy"
            ]
        });
    }

    /**
     * GET /v1/links
     */
    list(params) {
        return this.client.get("/links", params, {
            query: [
                "id",
                "status",
                "favourite",
                "orderBy",
                "orderDir",
                "offset",
                "limit"
            ]
        });
    }

    /**
     * POST /v1/links/:id
     */
    update(id, params) {
        return this.client.post(`/links/${id}`, params, {
            body: [
                "title",
                "destination"
            ]
        });
    }
}

module.exports = Link;
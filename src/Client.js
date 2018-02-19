const axios = require("axios");
const pick = require("object.pick");

const Account = require("./Account");
const Domain = require("./Domain");
const Link = require("./Link");
const Script = require("./Script");
const Tag = require("./Tag");

class Client {
    constructor(opts) {
        this.opts = opts;

        this.account = new Account(this);
        this.domains = new Domain(this);
        this.links = new Link(this);
        this.scripts = new Script(this);
        this.tags = new Tag(this);
    }

    delete(uri, data, schema) {
        return this._request("DELETE", uri, data, schema);
    }

    get(uri, data, schema) {
        return this._request("GET", uri, data, schema);
    }

    post(uri, data, schema) {
        return this._request("POST", uri, data, schema);
    }

    put(uri, data, schema) {
        return this._request("PUT", uri, data, schema);
    }

    _request(method, uri, data, schema) {
        schema.query = schema.query || [];
        schema.body = schema.body || [];

        return axios({
            method: method,
            baseURL: "https://api.rebrandly.com/v1/",
            url: uri,
            params: pick(data, schema.query),
            headers: this.opts,
            data: pick(data, schema.body),
            responseType: "json"
        })
            .then(res => res.data)
            .catch(res => res.response.data);
    }
}

module.exports = Client;
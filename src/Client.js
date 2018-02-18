const Promise = require("bluebird");
const request = Promise.promisify(require("request"));

const Account = require("./Account");
const Domain = require("./Domain");
const Link = require("./Link");
const Script = require("./Script");
const Tag = require("./Tag");

class Client {
    constructor(apiKey) {
        this.apiKey = apiKey;

        this.account = new Account(this);
        this.domains = new Domain(this);
        this.links = new Link(this);
        this.scripts = new Script(this);
        this.tags = new Tag(this);
    }

    delete(uri, data) {
        return this._request("DELETE", uri, data);
    }

    get(uri, data) {
        return this._request("GET", uri, data);
    }

    post(uri, data) {
        return this._request("POST", uri, data);
    }

    put(uri, data) {
        return this._request("PUT", uri, data);
    }

    _request(method, uri, data = {}) {
        return request({
            uri: uri,
            baseUrl: "https://api.rebrandly.com/v1/",
            method: method,
            headers: {
                apikey: this.apiKey
            },
            qs: data,
            body: data,
            json: true
        })
            .then(res => res.body);
    }
}

module.exports = Client;
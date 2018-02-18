const axios = require("axios");

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

    _request(method, uri, data) {
        return axios({
            method: method,
            baseURL: "https://api.rebrandly.com/v1/",
            url: uri,
            params: data,
            headers: {
                apikey: this.apiKey
            },
            data: data,
            responseType: "json"
        }).then(({data}) => data);
    }
}

module.exports = Client;
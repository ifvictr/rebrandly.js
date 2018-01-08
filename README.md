# [rebrandly.js](https://npmjs.com/package/rebrandly)
A promise-based client for the Rebrandly API in Node.js.

## Installation
```
npm install rebrandly --save
```

## Usage
```js
const Rebrandly = require("rebrandly");
const client = new Rebrandly("TOKEN");

// Output all shortlinks and the destinations they point to
client.links.list().then(res => {
    for(const link of res) {
        console.log(`${link.domainName}/${link.slashtag} -> ${link.destination}`);
    }
});
```

## Methods
Methods in this module wrap around the HTTP API specified here: https://developers.rebrandly.com
- `rebrandly.account.get()`
- `rebrandly.account.getTeams(params)`
- `rebrandly.domains.count(params)`
- `rebrandly.domains.get(id)`
- `rebrandly.domains.list(params)`
- `rebrandly.links.count(params)`
- `rebrandly.links.create(params)`
- `rebrandly.links.delete(id, params)`
- `rebrandly.links.get(id)`
- `rebrandly.links.list(params)`
- `rebrandly.links.update(id, params)`
- `rebrandly.scripts.count()`
- `rebrandly.scripts.create(params)`
- `rebrandly.scripts.delete(id)`
- `rebrandly.scripts.get(id)`
- `rebrandly.scripts.list(params)`
- `rebrandly.scripts.update(id, params)`
- `rebrandly.tags.count()`
- `rebrandly.tags.create(params)`
- `rebrandly.tags.delete(id)`
- `rebrandly.tags.get(id)`
- `rebrandly.tags.list(params)`
- `rebrandly.tags.update(id, params)`

## License
[MIT](LICENSE.txt)

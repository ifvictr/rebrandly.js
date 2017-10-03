import test from 'ava';

const Account = require("../../../src/Account");
const Domain = require("../../../src/Domain");
const Link = require("../../../src/Link");
const Script = require("../../../src/Script");
const Tag = require("../../../src/Tag");
const Client = require("../../../src/Client");

/**
 * Client constructor tests
 */
test('Client constructor sets and stores the API key', t => {
    const c = new Client('thisIsAnAPIKey');

    t.true(c instanceof Client);
    t.is(c.apiKey, 'thisIsAnAPIKey');
});

test('Client constructor instantiates Account class', t => {
    const c = new Client('thisIsAnAPIKey');

    t.true(c instanceof Client);
    t.true(c.account instanceof Account);
});

test('Client constructor instantiates Domain class', t => {
    const c = new Client('thisIsAnAPIKey');

    t.true(c instanceof Client);
    t.true(c.domains instanceof Domain);
});

test('Client constructor instantiates Link class', t => {
    const c = new Client('thisIsAnAPIKey');

    t.true(c instanceof Client);
    t.true(c.links instanceof Link);
});

test('Client constructor instantiates Script class', t => {
    const c = new Client('thisIsAnAPIKey');

    t.true(c instanceof Client);
    t.true(c.scripts instanceof Script);
});

test('Client constructor instantiates Tag class', t => {
    const c = new Client('thisIsAnAPIKey');

    t.true(c instanceof Client);
    t.true(c.tags instanceof Tag);
});

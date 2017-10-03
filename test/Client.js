import test from 'ava';
import sinon from 'sinon';

const Account = require("../src/Account");
const Domain = require("../src/Domain");
const Link = require("../src/Link");
const Script = require("../src/Script");
const Tag = require("../src/Tag");
const Client = require("../src/Client");

/**
 * constructor
 */
test('Client constructor sets and stores the API key', t => {
    const client = new Client('thisIsAnAPIKey');

    t.true(client instanceof Client);
    t.is(client.apiKey, 'thisIsAnAPIKey');
});

test('Client constructor instantiates Account class', t => {
    const client = new Client('thisIsAnAPIKey');

    t.true(client instanceof Client);
    t.true(client.account instanceof Account);
});

test('Client constructor instantiates Domain class', t => {
    const client = new Client('thisIsAnAPIKey');

    t.true(client instanceof Client);
    t.true(client.domains instanceof Domain);
});

test('Client constructor instantiates Link class', t => {
    const client = new Client('thisIsAnAPIKey');

    t.true(client instanceof Client);
    t.true(client.links instanceof Link);
});

test('Client constructor instantiates Script class', t => {
    const client = new Client('thisIsAnAPIKey');

    t.true(client instanceof Client);
    t.true(client.scripts instanceof Script);
});

test('Client constructor instantiates Tag class', t => {
    const client = new Client('thisIsAnAPIKey');

    t.true(client instanceof Client);
    t.true(client.tags instanceof Tag);
});

/**
 * delete
 */
test('Client delete function should call _request with uri and data endpoints', t => {
    const requestSpy = sinon.spy(Client.prototype, '_request');
    const client = new Client('thisIsAnAPIKey');

    t.false(requestSpy.called);
    client.delete('test/delete/endpoint', { foo: 'foo', bar: 'bar' })
    t.true(requestSpy.calledWith('delete', 'test/delete/endpoint', { foo: 'foo', bar: 'bar' }));
    Client.prototype._request.restore();
});

/**
 * get
 */
test('Client get function should call _request with uri and data endpoints', t => {
    const requestSpy = sinon.spy(Client.prototype, '_request');
    const client = new Client('thisIsAnAPIKey');

    t.false(requestSpy.called);
    client.get('test/get/endpoint', { foo: 'foo', bar: 'bar' })
    t.true(requestSpy.calledWith('get', 'test/get/endpoint', { foo: 'foo', bar: 'bar' }));
    Client.prototype._request.restore();
});

/**
 * post
 */
test('Client post function should call _request with uri and data endpoints', t => {
    const requestSpy = sinon.spy(Client.prototype, '_request');
    const client = new Client('thisIsAnAPIKey');

    t.false(requestSpy.called);
    client.post('test/post/endpoint', { foo: 'foo', bar: 'bar' })
    t.true(requestSpy.calledWith('post', 'test/post/endpoint', { foo: 'foo', bar: 'bar' }));
    Client.prototype._request.restore();
});

/**
 * put
 */
test('Client put function should call _request with uri and data endpoints', t => {
    const requestSpy = sinon.spy(Client.prototype, '_request');
    const client = new Client('thisIsAnAPIKey');

    t.false(requestSpy.called);
    client.put('test/put/endpoint', { foo: 'foo', bar: 'bar' })
    t.true(requestSpy.calledWith('put', 'test/put/endpoint', { foo: 'foo', bar: 'bar' }));
    Client.prototype._request.restore();
});

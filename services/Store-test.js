/*
 * node C:\ddd\pebble_remote_control_for_computer\back_end\services\Store-test.js
 */

const Store = require('./Store');

const DEFAULT_PORT = 3033;

const store = new Store({
    configName: 'user-preferences',
    defaults: { port: DEFAULT_PORT },
});

var s = store.get('port');
console.log(s)

store.set('port', 1231)

var a = store.get('port');
console.log(a)

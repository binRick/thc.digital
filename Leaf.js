#!/usr/bin/env node

var options = require('/Users/rick/leafly.json.js');
var leafly = require('./leafly');



leafly.search('strains', {
    page: 0,
    take: 20,
    search: 'blue',
    sort: 'newest',
    filters: {
        flavors: ['blueberry'],
        category: ['hybrid'],
        exclude: ['dry-mouth'],
        conditions: ['anxiety'],
        tags: ['anxious'],
        symptoms: ['stress']
    },
    app_key: options.appKey,
    app_id: options.appId,
}).then(function(strains) {
    console.log(strains);
}).catch(function(err) {
    console.error(err);
});




//var leaf = new Leaf(

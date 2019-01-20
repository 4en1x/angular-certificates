const { JSDOM } = require('jsdom');

const document = new JSDOM('<!doctype html><html><body></body></html>');
const window = document.window;

global.window = window;
global.document = document;

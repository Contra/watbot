/**
 * Wat
 *
 * @author		Contra
 * @website		http://wearefractal.com/
 * @copyright	Contra 2012
 */
var sys = require('util');
var http = require('https');
Plugin = exports.Plugin = function (irc) {
  this.name = 'wat';
  this.title = 'Wat Quotes';
  this.version = '0.1';
  this.author = 'Contra';
  this.irc = irc;
  this.src = ['not ready'];
  var options = {
    host: 'raw.github.com',
    port: 443,
    path: '/gf3/WAT/master/wat.json'
  };
  var __bind = function (fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    };
  http.get(options, __bind(function (res) {
    var body;
    res.setEncoding("utf8");
    body = '';
    res.on('data', __bind(function (chunk) {
      return body += chunk;
    }, this));
    return res.on('end', __bind(function () {
      return this.src = JSON.parse(body);
    }, this));
  }, this));
};

Plugin.prototype.onMessage = function (msg) {
  if (msg.arguments[1].indexOf('wat') > -1) {
    var wat = this.src[Math.floor(Math.random() * this.src.length)];
    var channel = msg.arguments[0];
    var user = this.irc.user(msg.prefix);
    this.irc.send(channel, wat);
  }
};

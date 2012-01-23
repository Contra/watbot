/**
 * IRC Bot
 *
 * @author		Michael Owens
 * @website		http://www.michaelowens.nl
 * @copyright	Michael Owens 2011
 */
var sys = require('util'),
	irc = require('./irc');

/**
 * Config
 */
var config = {
	host:		'irc.freenode.com',
	port:		6667,
	nick:		'jQueryDev',
	username:	'jQueryDev',
	realname:	'Contra',
	channels:	['#Node.js', '#javascript'],
	command:	'.',
	debug:		true,

	plugins:	['global', 'reload', 'gezien', 'textfilter', 'wat']
};

/**
 * Let's power up
 */
var ircClient = new irc.Server(config);
ircClient.connect();

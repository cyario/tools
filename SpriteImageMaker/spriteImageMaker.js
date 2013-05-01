/*
 * Firstly, You have to install ImageMagick on your PC.
 *
 * sudo port install ImageMagick
 */

var config      = require('./config.js');

for( var i = 0; i < config.length; i++ ){

	if ( !config[i].originalImages.length || !config[i].spriteSheet ) {
		console.log('configfile error...');
		continue;
	}

	var imageMagick = require('imagemagick');
	var args = config[i].originalImages.concat(['-geometry', '+0+0', '-alpha', 'Set','-quality', '100', config[i].spriteSheet]);
	imageMagick.montage(args);
}

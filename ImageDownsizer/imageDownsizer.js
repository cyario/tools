/*
 * Firstly, You have to install ImageMagick on your PC.
 *
 * sudo port install ImageMagick
 */

var config      = require('./config.js');
var exec        = require('child_process').exec;
var imageMagick = require('imagemagick');

// Array Extension
Array.prototype.isContained = function(value){
	for(var i = 0; i < this.length; i++){
		if(this[i] === value){
			return true;
		}
	}
	return false;
};

exec('ls ' + config.inputPath, {timeout: 1000}, function(err, stdout, stderr) {

 	if (err) throw err

	var files = stdout.split('\n');

	for ( var i = 0; i < files.length; i++ ) {

		if ( !config.ignore.isContained(files[i]) ) {

			var reg = new RegExp( config.suffix+'.png$|' + config.suffix+'.jpg$|' + config.suffix+'.jpeg$|' + config.suffix+'.gif$' );
			if ( files[i].match(reg) ) {

				var resizedImgName = files[i].replace('@x2', '');

				imageMagick.resize({srcPath:config.inputPath + files[i], dstPath:config.inputPath + resizedImgName, width:'50%'}, function(err, stdout, stderr) {
					if (err) throw err
					console.log( config.inputPath + resizedImgName );
				});

			}

		}

	}

});

SpriteSheet作成スクリプト

    // montageに対応されていないのでimagemagick.jsに下記を追加
    exports.montage = function(args, timeout, callback) {
	    var procopt = {encoding: 'binary'};
	    if (typeof timeout === 'function') {
		    callback = timeout;
		    timeout = 0;
	    } else if (typeof timeout !== 'number') {
		    timeout = 0;
	    }
	    if (timeout && (timeout = parseInt(timeout)) > 0 && !isNaN(timeout))
		    procopt.timeout = timeout;
		    return exec2(exports.montage.path, args, procopt, callback);
	    }
    }
    exports.montage.path = 'montage';

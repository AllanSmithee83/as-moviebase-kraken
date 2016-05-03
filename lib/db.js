var mongoose = require('mongoose');

var db = function(){
	return {
		config: function(conf){
			mongoose.connect('mongodb://root:Branislav83@ds051635.mongolab.com:51635/moviebase');
			var db = mongoose.connection;
			db.on('error', console.log.bind(console, 'Connection Error'));
			db.once('open', function(){
				console.log('Database is Open...');
			});
		}
	}
}

module.exports = db();
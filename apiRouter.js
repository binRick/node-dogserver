module.exports = function(Setup, req, res, cb){
		var Up = {key: req.params.key};
		console.log(Up);
	cb(null, res.end('ok'));

};
module.exports.use = function(Setup){
	console.log('using', Setup);
};

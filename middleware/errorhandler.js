module.exports = {};

function error(err, req, res, next) {
	res.status(err.statusCode || 500).send(err.message);
}

module.exports = { error };
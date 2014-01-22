var hash = require('./pass');

//exports.autenticar = function (name, pass, callback) {
//    if (!module.parent) console.log('authenticating %s:%s', name, pass);

//    User.findOne({ username: name }, function (err, user) {
//        if (user) {
//            if (err) { 
//                return callback(new Error('cannot find user')); 
//            }

//            hash(pass, user.salt, function (err, hash) {
//                if (err) return callback(err);
//                if (hash == user.hash) return callback(null, user);
//                callback(new Error('invalid password'));
//            });
//        } else {
//            return callback(new Error('cannot find user'));
//        }
//    });
//};

exports.autenticacaoRequerida = function (req, res, next) {
    if (req.session.user) {
        next();
    } else {
        req.session.error = 'Access denied!';
        res.redirect('/login');
    }
};

//exports.usuarioExiste = function (req, res, next) {
//    User.count({
//        username: req.body.username
//    }, function (err, count) {
//        if (count === 0) {
//            next();
//        } else {
//            req.session.error = "User Exist"
//            res.redirect("/signup");
//        }
//    });
//};
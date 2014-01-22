var express = require('express'),
    engine = require('ejs-locals'),
    http = require('http'),
    path = require('path'),
    hash = require('./app/infra/pass').hash,
    login = require('./routes/login'),
    home = require('./routes/home'),
    admin = require('./routes/admin'),
    video = require('./routes/video'),
    artista = require('./routes/artista');

var app = express();

app.configure(function () {
    app.engine('ejs', engine);
    app.set('port', process.env.PORT || 3000);

    // LOGIN
    app.use(express.cookieParser('Authentication Tutorial '));
    app.use(express.session());

    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.locals({ _layoutFile: true });
    app.use(express.favicon());
    //app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.use(function (req, res, next) {
    var err = req.session.error,
        msg = req.session.success;
    delete req.session.error;
    delete req.session.success;
    res.locals.message = '';
    if (err) res.locals.message = err;
    if (msg) res.locals.message = msg;
    next();
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// routes

app.get('/', home.index);
app.get('/login', login.index);
app.get('/admin', admin.index);
app.get('/admin/videos', video.index);
app.get('/admin/video/novo', video.novo);
app.get('/admin/artistas', artista.index);
app.get('/admin/artista/novo', artista.novo);
app.get('/admin/artista/alterar/:id', artista.editar);
app.get('/artista/:id', artista.exibir);

// actions

app.post('/login', login.logar);
app.post('/admin/video/novo', video.incluir);
app.get('/admin/video/excluir/:id', video.excluir);
app.post('/admin/artista/novo', artista.incluir);
app.post('/admin/artista/alterar/dados-pessoais', artista.alterarDadosPessoais);
app.post('/admin/artista/alterar/musicas', artista.alterarMusicas);
app.post('/admin/artista/alterar/imagem-perfil', artista.alterarImagemPerfil);
app.post('/admin/artista/alterar/background', artista.alterarBackground);
app.get('/admin/artista/excluir/:id', artista.excluir);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

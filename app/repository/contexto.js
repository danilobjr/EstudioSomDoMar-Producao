var xml = require('./../infra/xml'),
    xmlParser = require('xml2js');

var contexto = (function () {

    var instancia;

    function init() {

        var dados = {
            //paginas: [
            //    {
            //        pagina: {
            //            id: 1,
            //            descricao: "Home",
            //            titulo: "Bem-vindo!",
            //            subtitulo: "Responsabilidade, compromisso e qualidade são o nosso lema",
            //            banners: [
            //                {
            //                    banner: {
            //                        id: 1,
            //                        grande: "/img/site/foto/tecnica-1_b.jpg",
            //                        pequeno: "/img/site/foto/tecnica-1_s.jpg",
            //                        legenda: "Técnica"
            //                    }
            //                },
            //                {
            //                    banner: {
            //                        id: 2,
            //                        grande: "/img/site/foto/aquario-1_b.jpg",
            //                        pequeno: "/img/site/foto/aquario-1_s.jpg",
            //                        legenda: "Aquário"
            //                    }
            //                },
            //                {
            //                    banner: {
            //                        id: 3,
            //                        grande: "/img/site/foto/bateria-4_b.jpg",
            //                        pequeno: "/img/site/foto/bateria-4_s.jpg",
            //                        legenda: "Bateria"
            //                    }
            //                },
            //                {
            //                    banner: {
            //                        id: 4,
            //                        grande: "/img/site/foto/mesa-4_b.jpg",
            //                        pequeno: "/img/site/foto/mesa-4_s.jpg",
            //                        legenda: "Mesa"
            //                    }
            //                },
            //                {
            //                    banner: {
            //                        id: 5,
            //                        grande: "/img/site/foto/perifericos-3_b.jpg",
            //                        pequeno: "/img/site/foto/perifericos-3_s.jpg",
            //                        legenda: "Periféricos"
            //                    }
            //                }
            //            ]
            //        }
            //    },
            //    {
            //        pagina: {
            //            id: 2,
            //            descricao: "Admin",
            //            titulo: "Dashboard",
            //            subtitulo: '',
            //            dica: {
            //                titulo: 'Bem-vindo ao modo Administrador!',
            //                descricao: 'Aqui você poderá modificar seu site com facilidade. Esteja sempre atento às instruções. Qualquer dúvida entre em contato conosco.'
            //            }
            //        }
            //    }
            //],
            usuario: {
                id: 1,
                email: 'anfrisiorocha@hotmail.com',
                nome: 'Anfrísio Rocha',
                senha: 'b8697f01954168599e814940515ba00972699bd62dcdd5756214c10dba9c84d1'
            },
            artistas: [
                {
                    artista: {
                        id: 1,
                        nome: 'Priscila Ribeiro',
                        site: 'www.priscilaribeiro.com.br',
                        email: 'priscilabribeiro@hotmail.com',
                        telefones: [
                            {
                                telefone: {
                                    numero: '(85) 8883.6480',
                                    tipo: 'oi'
                                }
                            }
                        ],
                        redesSociais: [
                            {
                                redeSocial: {
                                    link: 'www.facebook.com/profile.php?id=1012718819&ref=ts',
                                    tipo: 'facebook'
                                }
                            }
                        ],
                        imagens: {
                            perfil: 'artistas_priscila_ribeiro.jpg',
                            background: {
                                cor: '#ffffff',
                                imagem: 'priscila_ribeiro_background.jpg'
                            }
                        },
                        musicas: [
                            {
                                musica: {
                                    nome: 'Saudade',
                                    arquivoMusica: 'saudade.mp3',
                                    arquivoCapaAlbum: 'o_amor_e_suas_cancoes.jpg'
                                }
                            },
                            {
                                musica: {
                                    nome: 'Ah, o amor',
                                    arquivoMusica: 'ah_o_amor.mp3',
                                    arquivoCapaAlbum: 'ensaio_sobre_a_dor.jpg'
                                }
                            }
                        ]
                    }
                },
                {
                    artista: {
                        id: 2,
                        nome: 'Flavinho Souza',
                        email: 'flavioiconio@hotmail.com',
                        telefones: [
                            {
                                telefone: {
                                    numero: '(85) 8883.6480',
                                    tipo: 'oi'
                                }
                            }
                        ],
                        redesSociais: [
                            {
                                redeSocial: {
                                    link: 'www.facebook.com/profile.php?id=1012718819&ref=ts',
                                    tipo: 'facebook'
                                }
                            }
                        ],
                        imagens: {
                            perfil: 'imagem.jpg',
                            background: {
                                cor: '#ffffff',
                                imagem: 'imagem.jpg'
                            }
                        },
                        musicas: [
                            {
                                musica: {
                                    nome: 'Caminho Estreito',
                                    arquivoMusica: 'caminho estreito.mp3',
                                    arquivoCapaAlbum: 'caminho estreito.jpg'
                                }
                            }
                        ]
                    }
                }
            ],
            fotos: [
                {
                    foto: {
                        id: 1,
                        titulo: 'Aristides Cavalcante',
                        tipo: 'estudio',
                        imagemPequena: 'musico-aristides_cavalcante_xs.jpg',
                        imagemAmpliada: 'musico-aristides_cavalcante_b.jpg'
                    }
                },
                {
                    foto: {
                        id: 2,
                        titulo: 'Júnior Finnis',
                        tipo: 'estudio',
                        imagemPequena: 'musico-jr_finnis_xs.jpg',
                        imagemAmpliada: 'musico-jr_finnis_b.jpg'
                    }
                },
                {
                    foto: {
                        id: 3,
                        titulo: 'Ronald Melo',
                        tipo: 'estudio',
                        imagemPequena: 'musico-ronald_melo_xs.jpg',
                        imagemAmpliada: 'musico-ronald_melo_b.jpg'
                    }
                },
                {
                    foto: {
                        id: 4,
                        titulo: 'Rodrigo Cardozo',
                        tipo: 'estudio',
                        imagemPequena: 'musico-rodrigo_cardozo_xs.jpg',
                        imagemAmpliada: 'musico-rodrigo_cardozo_b.jpg'
                    }
                },
                {
                    foto: {
                        id: 5,
                        titulo: 'Backing Vocal - Thiago, Suelen e Daniel',
                        tipo: 'estudio',
                        imagemPequena: 'musico-thisudan_xs.jpg',
                        imagemAmpliada: 'musico-thisudan_b.jpg'
                    }
                }
            ],
            videos: [
                {
                    video: {
                        id: 1,
                        titulo: 'Flavinho Souza | Pseudo Amor',
                        //'#text': 'Flavinho Souza | Pseudo Amor',
                        url: '//www.youtube.com/embed/sX1EmPOwBsU'
                    }
                },
                {
                    video: {
                        id: 2,
                        titulo: 'Som do Mar | Anfrísio Rocha',
                        //'#text': 'Som do Mar | Anfrísio Rocha',
                        url: '//www.youtube.com/embed/u6wWBzDvZcE'
                    }
                },
                {
                    video: {
                        id: 3,
                        titulo: 'Banda Frequencia 33 || Making Of Gravação',
                        url: '//www.youtube.com/embed/J3ODdCOAY5E'
                    }
                },
                {
                    video: {
                        id: 4,
                        titulo: 'Espera | Anfrísio Rocha',
                        url: '//www.youtube.com/embed/6gUCAy6rWKU'
                    }
                },
                {
                    video: {
                        id: 5,
                        titulo: 'Sarquis Fermanian - Fast Track',
                        url: '//www.youtube.com/embed/2vPa1TT-3xY'
                    }
                },
                {
                    video: {
                        id: 6,
                        titulo: 'Estúdio Som do Mar | Institucional',
                        url: '//www.youtube.com/embed/RWOLnEuKGWA'
                    }
                }
            ]
        };

        // Criando arquivo XML com os dados

        var recriar = false;
        xml.criar(dados, recriar);

        // contexto

        var obterInstancia = function () {
            return xml.obterContexto();
        };

        // métodos úteis

        var obterNovoId = function (array) {
            var id = 0;

            for (var i = 0; i < array.length; i++) {
                if (array[i].id > id) {
                    id = array[i].id;
                }
            }

            return parseInt(id, 10) + 1;
        };

        // Páginas

        var obterPaginaPorId = function (id) {
            var contexto = xml.obterContexto();
            for (var cont in contexto.paginas) {
                if (contexto.paginas[cont].id.toString() === id) {
                    return contexto.paginas[cont];
                }
            }
        };

        var obterPaginaPorDescricao = function (descricao) {
            var contexto = xml.obterContexto();
            for (var cont in contexto.paginas) {
                if (contexto.paginas[cont].descricao === descricao) {
                    return contexto.paginas[cont];
                }
            }
        };

        // Usuário

        var obterUsuario = function (idUsuario, contexto) {
            if (!contexto) {
                contexto = xml.obterContexto();
            }

            return contexto.usuario;
        };

        var obterUsuarioPorEmail = function (emailUsuario, contexto) {
            if (!contexto) {
                contexto = xml.obterContexto();
            }

            if (contexto.usuario.email === emailUsuario) {
                return contexto.usuario;
            } else {
                return undefined;
            }
        };

        // Artistas

        var obterTodosOsArtistas = function () {
            var contexto = xml.obterContexto();
            return contexto.artistas;
        };

        var obterArtistaPorId = function (id, contexto) {
            if (!contexto) {
                contexto = xml.obterContexto();
            }

            for (var cont in contexto.artistas) {
                if (contexto.artistas[cont].id.toString() === id) {
                    return contexto.artistas[cont];
                }
            }
        };

        var obterArtistaPorNome = function (nome) {
            var contexto = xml.obterContexto();
            var artistaEncontrado = undefined;

            for (var cont in contexto.artistas) {
                if (contexto.artistas[cont].nome === nome) {
                    artistaEncontrado = contexto.artistas[cont];
                }
            }

            return artistaEncontrado;
        };

        var incluirNovoArtista = function (novoArtista) {
            var contexto = xml.obterContexto();
            var novoId = obterNovoId(contexto.artistas);
            novoArtista.id = novoId;
            contexto.artistas.push(novoArtista);
            xml.salvar(contexto);

            return novoArtista;
        };

        var alterarDadosPessoais = function (artistaAlterado) {
            var contexto = xml.obterContexto();
            var artistaExistente = obterArtistaPorId(artistaAlterado.id, contexto);

            artistaExistente.nome = artistaAlterado.nome;
            artistaExistente.site = artistaAlterado.site;
            artistaExistente.email = artistaAlterado.email;
            artistaExistente.telefones = artistaAlterado.telefones;
            artistaExistente.redesSociais = artistaAlterado.redesSociais;

            xml.salvar(contexto);

            return obterArtistaPorId(artistaAlterado.id);
        };

        var alterarMusicas = function (idArtista, musicas) {
            var contexto = xml.obterContexto();
            var artistaExistente = obterArtistaPorId(idArtista, contexto);

            artistaExistente.musicas = musicas;

            xml.salvar(contexto);

            return obterArtistaPorId(idArtista);
        };

        var alterarNomeArquivoImagemPerfil = function (idArtista, nomeArquivoImagemPerfil) {
            var contexto = xml.obterContexto();
            var artistaExistente = obterArtistaPorId(idArtista, contexto);

            artistaExistente.imagens.perfil = nomeArquivoImagemPerfil;

            xml.salvar(contexto);

            return obterArtistaPorId(idArtista);
        };

        var alterarBackground = function (idArtista, corDeFundo, nomeArquivoImagemBackground) {
            var contexto = xml.obterContexto();
            var artistaExistente = obterArtistaPorId(idArtista, contexto);

            artistaExistente.imagens.background.cor = corDeFundo;

            if (nomeArquivoImagemBackground) {
                artistaExistente.imagens.background.imagem = nomeArquivoImagemBackground;
            }

            xml.salvar(contexto);

            return obterArtistaPorId(idArtista);
        };

        var excluirArtistaPorId = function (id) {
            var contexto = xml.obterContexto();

            var artistaProcurado = undefined;

            for (var i = 0; i < contexto.artistas.length; i++) {
                if (contexto.artistas[i].id == id) {
                    artistaProcurado = contexto.artistas[i];
                }
            }

            if (artistaProcurado) {
                if (contexto.artistas.length > 1) {
                    var indiceArtista = contexto.artistas.indexOf(artistaProcurado);
                    contexto.artistas.splice(indiceArtista, 1);
                    xml.salvar(contexto);
                } else {
                    throw new Error('Não é permitido excluir todos os artistas');
                }
            }

            return artistaProcurado;
        };

        // Fotos

        var obterTodasAsFotos = function () {
            var contexto = xml.obterContexto();
            return contexto.fotos;
        };

        var obterFotosPorTipo = function (tipo) {
            var contexto = xml.obterContexto();
            var fotosEncontradas = undefined;

            for (var cont in contexto.fotos) {
                if (contexto.fotos[cont].tipo === tipo) {
                    if (!fotosEncontradas) {
                        fotosEncontradas = [];
                    }
                    
                    fotosEncontradas.push(contexto.fotos[cont]);
                }
            }

            return fotosEncontradas;
        };

        // Vídeos

        var obterTodosOsVideos = function () {
            var contexto = xml.obterContexto();
            return contexto.videos;
        };

        var obterVideoPorId = function (id) {
            var contexto = xml.obterContexto();
            var videoEncontrado = undefined;

            for (var cont in contexto.videos) {
                if (contexto.videos[cont].id.toString() === id) {
                    videoEncontrado = contexto.videos[cont];
                }
            }

            return videoEncontrado;
        };

        var obterVideoPorTitulo = function (titulo) {
            var contexto = xml.obterContexto();
            var videoEncontrado = undefined;

            for (var cont in contexto.videos) {
                if (contexto.videos[cont].titulo === titulo) {
                    videoEncontrado = contexto.videos[cont];
                }
            }

            return videoEncontrado;
        };

        var incluirNovoVideo = function (novoVideo) {
            var contexto = xml.obterContexto();
            var novoId = obterNovoId(contexto.videos);
            novoVideo.id = novoId;
            contexto.videos.push(novoVideo);
            xml.salvar(contexto);

            return novoVideo;
        };

        var excluirVideoPorId = function (id) {
            var contexto = xml.obterContexto();

            var videoProcurado = undefined;

            for (var i = 0; i < contexto.videos.length; i++) {
                if (contexto.videos[i].id == id) {
                    videoProcurado = contexto.videos[i];
                }
            }

            if (videoProcurado) {
                if (contexto.videos.length > 1) {
                    var indiceVideo = contexto.videos.indexOf(videoProcurado);
                    contexto.videos.splice(indiceVideo, 1);
                    xml.salvar(contexto);
                } else {
                    throw new Error('Não é permitido excluir todos os vídeos');
                }
            }

            return videoProcurado;
        };

        return {
            obterInstancia: obterInstancia,
            paginas: {
                obterPorId: obterPaginaPorId,
                obterPorDescricao: obterPaginaPorDescricao
            },
            usuario: {
                obterUsuario: obterUsuario,
                obterPorEmail: obterUsuarioPorEmail
            },
            artistas: {
                obterTodos: obterTodosOsArtistas,
                obterPorId: obterArtistaPorId,
                obterPorNome: obterArtistaPorNome,
                incluir: incluirNovoArtista,
                alterarDadosPessoais: alterarDadosPessoais,
                alterarMusicas: alterarMusicas,
                alterarNomeArquivoImagemPerfil: alterarNomeArquivoImagemPerfil,
                alterarBackground: alterarBackground,
                excluirPorId: excluirArtistaPorId
            },
            fotos: {
                obterTodas: obterTodasAsFotos,
                obterPorTipo: obterFotosPorTipo
            },
            videos: {
                obterTodos: obterTodosOsVideos,
                obterPorId: obterVideoPorId,
                obterPorTitulo: obterVideoPorTitulo,
                incluir: incluirNovoVideo,
                excluirPorId: excluirVideoPorId
            }
        };
    };

    return {
        // Get the Singleton instance if one exists
        // or create one if it doesn't
        obterInstancia: function () {
            if (!instancia) {
                instancia = init();
            }

            return instancia;
        }
    };
})();

module.exports = contexto.obterInstancia();
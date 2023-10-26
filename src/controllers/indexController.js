const db = require('../database/models');

module.exports = {
    index: (req, res) => {
        
        const bands = db.Band.findAll({
            include: [
                {
                    association: 'category',
                    include: [
                        {
                            all : true
                        }
                    ]
                }
            ]
        })
        const categories = db.Category.findAll()
        Promise.all([bands,categories])
            .then(([bands,categories]) => {
                return res.render('index',{
                    bands,
                    categories
                }
                )
            })
       
    },
    about: (req, res) => {
        res.render('about')
    },
    contact: (req, res) => {
        res.render('contact')
    },
    groups: (req, res) => {
        db.Group.findAll()
            .then(groups => {
                return db.Genre.findAll()
                    .then(genres => {
                        return db.Article.findAll({
                            order: [['createdAt', 'DESC']], 
                        })
                            .then(articles => {
                                res.render('groups', {
                                    groups,
                                    genres,
                                    articles,
                                });
                            });
                    });
            })
            .catch(error => {
                console.error(error)
            });
    },
    
    profile: (req, res) => {
        res.render('profile')
    },
    editProfile: (req, res) => {
        res.render('editProfile')
    },
    notices: (req, res) => {
        const groupId = req.params.id; 
    
        const group = db.Group.findByPk(groupId, {
            include: [
                {
                    model: db.Genre,
                    as: 'Genre'
                },
                {
                    model: db.Article, 
                    as: 'Articles'
                }
            ]
        });
    
        const articles = db.Article.findAll({
            where: {
                groupId: groupId
            }
        });
    
// Controlador
Promise.all([group, articles])
    .then(([group, articles]) => {
        console.log('Información del grupo:', group);
        console.log('Artículos:', articles); 
        if (!group) {
            return res.send('Grupo no encontrado');
        }

        return res.render('notices', {
            group,
            articles: articles, 
        });
    })
    .catch(error => {
        console.error(error);
    });

    },
    
    notice: (req, res) => {
        const articleId = req.params.id;
    
        let article, groupArticles;
        let currentGroupId, currentArticleIndex;
        let prevArticle, nextArticle;
    
        db.Article.findByPk(articleId, {
            include: [
                {
                    model: db.Group,
                    as: 'Group',
                    include: [
                        {
                            model: db.Genre,
                            as: 'Genre'
                        }
                    ]
                }
            ]
        })
        .then((result) => {
            article = result;
            currentGroupId = article.Group.id;
            return db.Article.findAll({
                where: {
                    groupId: currentGroupId
                },
                order: [['createdAt', 'ASC']]
            });
        })
        .then((articles) => {
            groupArticles = articles;
            currentArticleIndex = groupArticles.findIndex(a => a.id === articleId);
    
            if (currentArticleIndex > 0) {
                prevArticle = groupArticles[currentArticleIndex - 1];
            }
    
            if (currentArticleIndex < groupArticles.length - 1) {
                nextArticle = groupArticles[currentArticleIndex + 1];
            }
    
            res.render('notice', {
                article,
                prevArticle,
                nextArticle,
                groupArticles,
            });
        })
        .catch((error) => {
            console.error(error);
            res.send('Error en el servidor');
        });
    },
    
    

    cart: (req, res) => {
        res.render('cart')
    },
    selfcart: (req, res) => {
        res.render('selfcart')
    },
    giftcart: (req, res) => {
        res.render('giftcart')
    },
    cardInfo: (req, res) => {
        res.render('cardInfo')
    },
    checkout: (req, res) => {
        res.render('checkout')
    },
    fans: (req, res) => {
        const exclusivoMerchPromise = db.Merch.findAll({
            where: {
                exclusive: 0
            }
        });
        const exclusivoAlbumPromise = db.Album.findAll({
            where: {
                exclusive: 0
            }
        });
        
    
        const discountMerchPromise = db.Merch.findAll({
            where: {
                discount: {
                    [db.Sequelize.Op.ne]: null 
                }
            }
        });
        const discountAlbumPromise = db.Album.findAll({
            where: {
                discount: {
                    [db.Sequelize.Op.ne]: null 
                }
            }
        });
    
        const masVendidosMerchPromise = db.Merch.findAll({
            limit: 12,  
            order: [['cantidadVendida', 'DESC']]
        });
    
        const masVendidosAlbumsPromise = db.Album.findAll({
            limit: 12,  
            order: [['cantidadVendida', 'DESC']]
        });
    
        Promise.all([exclusivoMerchPromise, discountAlbumPromise, exclusivoAlbumPromise, discountMerchPromise, masVendidosMerchPromise, masVendidosAlbumsPromise])
            .then(([exclusivoMerchPromise, discountAlbumPromise, exclusivoAlbumPromise, discountMerch, masVendidosMerch, masVendidosAlbums]) => {
                res.render('fans', { exclusivoMerchPromise, discountAlbumPromise, exclusivoAlbumPromise, discountMerch, masVendidosMerch, masVendidosAlbums });
            })
            .catch(error => {
                console.error(error);
            });
    },
    
    capsule: (req, res) => {
        const capsuleArticulosPromise = db.Article.findAll({
            where: {
                nostalgia: 0
            },
            order: [['createdAt', 'DESC']],
        });
    
        const classicCategoryID = 4;
        
        const classicAlbumsPromise = db.Album.findAll({
            where: {
                discount: {
                    [db.Sequelize.Op.ne]: null
                }
            },
            include: {
                model: db.Band,
                as: 'band',
                where: {
                    categoryId: classicCategoryID
                }
            }
        });
    
        const capsuleProductsPromise = db.Merch.findAll({
            where: {
                typeId: 12
            }
        });
    
        Promise.all([classicAlbumsPromise, capsuleProductsPromise, capsuleArticulosPromise])
            .then(([classicAlbums, capsuleProducts, capsuleArticles]) => {
                console.log('Cantidad de álbumes clásicos con descuento:', classicAlbums.length);
                console.log('Cantidad de productos en la Capsula del tiempo:', capsuleProducts.length);
                console.log('Cantidad de artículos de cápsula:', capsuleArticles.length);
                res.render('capsule', { classicAlbums, capsuleProducts, capsuleArticles });
            })
            .catch(error => {
                console.error(error);
            });
    },

    
    prueba1: (req, res) => {
        const merchPromise = db.Merch.findAll({
            limit: 4,
            include: [{
                model: db.Type,
                as: 'type',
            }],
        });
    
        const typesPromise = db.Type.findAll();
    
        Promise.all([merchPromise, typesPromise])
            .then(([merchData, types]) => {
                res.render('partials/partialDetailMerch', { merchData, types });
            })
            .catch((error) => {
                console.error(error);
            });
    },
    
    prueba2: (req, res) => {
        db.Album.findAll({
            limit: 4,  
            include: [{
                model: db.Band,
                as: 'band',
            }],
        })
            .then(albumData => {
                res.render('partials/partialDetailAlbum', { albumData });
            })
    },
    prueba3: (req, res) => {
        db.Band.findAll({
            limit: 4,  
        })
            .then(bandData => {
                res.render('partials/partialDetailBand', { bandData });
            })    }
    
    
    
}
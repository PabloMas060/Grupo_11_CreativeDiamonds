'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Articles', [
        {
            title: 'Los Beatles: Iconos de la Música',
            image: 'clasicos-inmortales-noticia1.png',
            text: 'Descubre la historia y el legado de una de las bandas más influyentes en la historia de la música, los Beatles. Revive los momentos que marcaron la década de los 60 y su música atemporal.',
            subtitle: 'Subtitulo que va por debajo de la imagen',
            groupId: 1, 
            favorites: 6,
            nostalgia: 0, 
            createdAt: new Date(),
             updatedAt: new Date()
          },
          {
            title: 'El Rock de los 70: Década Dorada',
            image: 'clasicos-inmortales-noticia2.png',
            text: 'Recorre la vibrante escena del rock de los años 70 con bandas icónicas como Led Zeppelin, Pink Floyd y Queen. Una década dorada de la música que sigue inspirando generaciones.',
            subtitle: 'Subtitulo que va por debajo de la imagen',
            groupId: 1, 
            favorites: 0,
            nostalgia: 0, 
            createdAt: new Date(),
             updatedAt: new Date()
          },
          {
            title: 'Queen: Leyendas del Rock',
            image: 'clasicos-inmortales-noticia3.png',
            text: 'Explora la increíble carrera de Queen, una de las bandas más icónicas del rock. Desde "Bohemian Rhapsody" hasta sus épicos conciertos, Queen dejó una huella imborrable en la música.',
            subtitle: 'Subtitulo que va por debajo de la imagen',
            groupId: 1, 
            favorites: 7,
            nostalgia: 0, 
            createdAt: new Date(),
             updatedAt: new Date()
          },
          {
            title: 'Los 80: La Era del Pop',
            image: 'clasicos-inmortales-noticia4.png',
            text: 'Revive la década de los 80, conocida como la era del pop. Desde Michael Jackson hasta Madonna, descubre cómo la música pop dominó la cultura y la pista de baile en los años 80.',
            subtitle: 'Subtitulo que va por debajo de la imagen',
            groupId: 1,
            favorites: 2,
            nostalgia: 0, 
            createdAt: new Date(),
             updatedAt: new Date()
          },
          {
            title: 'Bob Dylan: El Poeta del Rock',
            image: 'clasicos-inmortales-noticia5.png',
            text: 'Adéntrate en la vida y obra de Bob Dylan, el legendario cantautor que fusionó la poesía con el rock. Sus letras influyentes y su voz única dejaron una marca indeleble en la música.',
            subtitle: 'Subtitulo que va por debajo de la imagen',
            groupId: 1, 
            favorites: 2,
            nostalgia: 0, 
            createdAt: new Date(),
             updatedAt: new Date()
          },
          {
            title: 'Artistas Emergentes: Sonidos Innovadores',
            image: 'nuevo-matiz-noticia1.png',
            text: 'Descubre a los artistas emergentes que están redefiniendo la música. Desde géneros experimentales hasta fusiones únicas, estos talentos te llevarán en un viaje musical inexplorado.',
            subtitle: 'Subtitulo que va por debajo de la imagen',
            groupId: 2, 
            favorites: 2,
            nostalgia: 1, 
            createdAt: new Date(),
             updatedAt: new Date()
          },
          {
            title: 'Festivales del Futuro: Experiencias Inolvidables',
            image: 'nuevo-matiz-noticia2.png',
            text: 'Sumérgete en la emoción de los festivales de música más innovadores. Desde tecnología de vanguardia hasta espectáculos visuales asombrosos, estos eventos te transportarán al futuro de la música en vivo.',
            subtitle: 'Subtitulo que va por debajo de la imagen',
            groupId: 2, 
            favorites: 2,
            nostalgia: 1, 
            createdAt: new Date(),
             updatedAt: new Date()
          },
          {
            title: 'Ritmos Latinos: El Sonido del Presente',
            image: 'nuevo-matiz-noticia3.png',
            text: 'Explora la influencia de los ritmos latinos en la música contemporánea. Desde el reguetón hasta la cumbia, estos sonidos latinos están redefiniendo el panorama musical global.',
            subtitle: 'Subtitulo que va por debajo de la imagen',
            groupId: 2,
            favorites: 8,
            nostalgia: 1, 
            createdAt: new Date(),
             updatedAt: new Date()
          },
          {
            title: 'Eco-Conciertos: Música y Sostenibilidad',
            image: 'nuevo-matiz-noticia4.png',
            text: 'Descubre cómo la música y la sostenibilidad se unen en los eco-conciertos. Desde escenarios alimentados por energía solar hasta iniciativas ecológicas, estos eventos están cambiando la industria musical.',
            subtitle: 'Subtitulo que va por debajo de la imagen',
            groupId: 2, 
            favorites: 9,
            nostalgia: 1, 
            createdAt: new Date(),
             updatedAt: new Date()
          },
          {
            title: 'Electropop: El Sonido del Futuro',
            image: 'nuevo-matiz-noticia5.png',
            text: 'Sumérgete en el electropop, un género que está definiendo el futuro de la música. Desde sintetizadores hipnóticos hasta letras vanguardistas, el electropop te llevará a un viaje sonoro inolvidable.',
            subtitle: 'Subtitulo que va por debajo de la imagen',
            groupId: 2,
            favorites: 10,
            nostalgia: 1, 
            createdAt: new Date(),
             updatedAt: new Date()
          },
          {
            title: 'Guitarras Enloquecidas: Solos Épicos del Heavy Metal',
            image: 'heavy-noticia1.png',
            text: 'Descubre los solos de guitarra más épicos y enloquecidos en la historia del Heavy Metal. Desde los riffs de Black Sabbath hasta los solos de Metallica, prepárate para un viaje musical cargado de distorsión y velocidad.',
            subtitle: 'Subtitulo que va por debajo de la imagen',
            groupId: 3, 
            favorites: 2,
            nostalgia: 1,
            createdAt: new Date(),
             updatedAt: new Date()
          },
          {
            title: 'Iconos del Rock Pesado: De Ozzy Osbourne a Iron Maiden',
            image: 'heavy-noticia2.png',
            text: 'Explora las vidas y legados de los icónicos músicos del Rock Pesado. Desde Ozzy Osbourne hasta Iron Maiden, estos artistas han dejado una marca indeleble en la historia del género.',
            subtitle: 'Subtitulo que va por debajo de la imagen',
            groupId: 3, 
            favorites: 2,
            nostalgia: 1, 
            createdAt: new Date(),
             updatedAt: new Date()
          },
          {
            title: 'Nostalgia Metálica: Recordando los Clásicos del Metal',
            image: 'heavy-noticia3.png',
            text: 'Viaja en el tiempo y sumérgete en los clásicos del Metal que han resistido la prueba del tiempo. Desde Led Zeppelin hasta Black Sabbath, reviviremos los himnos que dieron forma al Metal.',
            subtitle: 'Subtitulo que va por debajo de la imagen',
            groupId: 3, 
            favorites: 2,
            nostalgia: 0,
            createdAt: new Date(),
             updatedAt: new Date()
          },
          {
            title: 'Heavy Metal en Vivo: Experiencia Inigualable en el Escenario',
            image: 'heavy-noticia4.png',
            text: 'Descubre la energía implacable y la pasión desenfrenada de los conciertos de Heavy Metal en vivo. Desde la pirotecnia de Rammstein hasta la ferocidad de Slayer, te llevaremos al corazón de la acción.',
            subtitle: 'Subtitulo que va por debajo de la imagen',
            groupId: 3, 
            favorites: 2,
            nostalgia: 1, 
            createdAt: new Date(),
             updatedAt: new Date()
          },
          {
            title: 'Los Pioneros del Metal: De Black Sabbath a Judas Priest',
            image: 'heavy-noticia5.png',
            text: 'Rinde homenaje a los pioneros del Metal que forjaron el camino para generaciones futuras. Desde Black Sabbath hasta Judas Priest, exploraremos cómo dieron forma a un género musical revolucionario.',
            subtitle: 'Subtitulo que va por debajo de la imagen',
            groupId: 3, 
            favorites: 2,
            nostalgia: 1, 
            createdAt: new Date(),
             updatedAt: new Date()
          },
          {
            title: 'Rock Femenino: Las Voces Poderosas de la Música',
            image: 'azucar-noticia1.png',
            text: 'Descubre la potencia y pasión de las voces femeninas en el mundo del rock. Desde Janis Joplin hasta Joan Jett, exploraremos las figuras icónicas que han dejado una huella imborrable.',
            subtitle: 'Subtitulo que va por debajo de la imagen',
            groupId: 4, 
            favorites: 2,
            nostalgia: 1,
            createdAt: new Date(),
             updatedAt: new Date()
          },
          {
            title: 'Bandas Emergentes: Mujeres en la Vanguardia del Rock',
            image: 'azucar-noticia2.png',
            text: 'Adéntrate en la escena musical actual con bandas emergentes lideradas por mujeres. Desde Haim hasta The Regrettes, te presentamos el futuro del rock.',
            subtitle: 'Subtitulo que va por debajo de la imagen',
            groupId: 4,
            favorites: 2,
            nostalgia: 1, 
            createdAt: new Date(),
             updatedAt: new Date()
          },
          {
            title: 'Clásicos del Rock Femenino: Voces que Marcaron una Época',
            image: 'azucar-noticia3.png',
            text: 'Viajemos atrás en el tiempo y revivamos los clásicos del rock interpretados por voces femeninas inolvidables. Desde Heart hasta Fleetwood Mac, estas canciones siguen emocionando a las generaciones.',
            subtitle: 'Subtitulo que va por debajo de la imagen',
            groupId: 4, 
            favorites: 5,
            nostalgia: 0, 
            createdAt: new Date(),
             updatedAt: new Date()
          },
          {
            title: 'Azúcar en el Escenario: Grandes Actuaciones en el Rock Femenino',
            image: 'azucar-noticia4.png',
            text: 'Explora las actuaciones en vivo más impactantes de bandas femeninas en la historia del rock. Desde el icónico Woodstock hasta presentaciones actuales, estas artistas se apoderan del escenario.',
            subtitle: 'Subtitulo que va por debajo de la imagen',
            groupId: 4, 
            favorites: 2,
            nostalgia: 1, 
            createdAt: new Date(),
             updatedAt: new Date()
          },
          {
            title: 'Rockeras Contemporáneas: Marcando el Camino hacia el Futuro',
            image: 'azucar-noticia5.png',
            text: 'Descubre a las rockeras contemporáneas que están dejando su huella en la escena musical actual. Desde St. Vincent hasta Courtney Barnett, estas artistas están definiendo el futuro del rock.',
            subtitle: 'Subtitulo que va por debajo de la imagen',
            groupId: 4,
            favorites: 2,
            nostalgia: 1, 
            createdAt: new Date(),
             updatedAt: new Date()
          },
          {
            title: 'El Sonido del Tango: Un Icono de la Música Argentina',
            image: 'celeste-noticia1.png',
            text: 'Sumérgete en la rica historia del tango argentino, desde los orígenes en los barrios de Buenos Aires hasta su influencia en la música global. Descubre por qué el tango es un verdadero ícono musical.',
            subtitle: 'Subtitulo que va por debajo de la imagen',
            groupId: 5, 
            favorites: 2,
            nostalgia: 1, 
            createdAt: new Date(),
             updatedAt: new Date()
          },
          {
            title: 'Rock Nacional: Las Bandas que Definieron una Época',
            image: 'celeste-noticia2.png',
            text: 'Recorre las décadas del rock argentino y conoce las bandas que dejaron una huella imborrable en la música nacional. Desde Soda Stereo hasta Los Redondos, estas son las leyendas del rock en Argentina.',
            subtitle: 'Subtitulo que va por debajo de la imagen',
            groupId: 5,
            favorites: 9,
            nostalgia: 0, 
            createdAt: new Date(),
             updatedAt: new Date()
          },
          {
            title: 'Música Popular Argentina: Géneros, Fusiones y Evolución',
            image: 'celeste-noticia3.png',
            text: 'Explora la diversidad musical de Argentina, desde el folclore hasta el rock y más allá. Conoce cómo los géneros se entrelazan y evolucionan en la vibrante escena musical de nuestro país.',
            subtitle: 'Subtitulo que va por debajo de la imagen',
            groupId: 5,
            favorites: 2,
            nostalgia: 1, 
            createdAt: new Date(),
             updatedAt: new Date()
          },
          {
            title: 'Folklore Argentino: Raíces y Tradiciones en la Música',
            image: 'celeste-noticia4.png',
            text: 'Adéntrate en el mundo del folklore argentino y descubre las raíces y tradiciones que influyen en esta música única. Desde la guitarra hasta el bombo legüero, el folklore es una parte esencial de nuestra cultura.',
            subtitle: 'Subtitulo que va por debajo de la imagen',
            groupId: 5,
            favorites: 2,
            nostalgia: 1, 
            createdAt: new Date(),
             updatedAt: new Date()
          },
          {
            title: 'Recuerdos Musicales: Grandes Conciertos de la Historia',
            image: 'celeste-noticia5.png',
            text: 'Viaja en el tiempo y revive los momentos memorables de los conciertos más emblemáticos de la música argentina. Desde el regreso de Spinetta hasta el último recital de Cerati, estos eventos dejaron una huella imborrable.',
            subtitle: 'Subtitulo que va por debajo de la imagen',
            groupId: 5, 
            favorites: 2,
            nostalgia: 0, 
            createdAt: new Date(),
             updatedAt: new Date()
          },

                                        
          
                    

          
                    
        
    
    
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Articles', null, {});
  }
};
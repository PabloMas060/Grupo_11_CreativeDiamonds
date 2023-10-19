'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Albums', [
      {
        "title": "Highway to Hell",
        "discography": "Discografía1",
        "image": "acdc-album1.jpg",
        "year": 1979,
        "price": 25,
        "discount": null,
        "description": "El sexto álbum de estudio de AC/DC, 'Highway to Hell', es uno de los discos más icónicos de la banda, con canciones como 'Highway to Hell' y 'Girls Got Rhythm'.",
        "exclusive": 1,
        "bandId": 1,
        "genreId": 1,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "title": "Iron Man 2",
        "discography": "Discografía1",
        "image": "acdc-album2.jpg",
        "year": 2010,
        "price": 25,
        "discount": null,
        "description": "'Iron Man 2' es la banda sonora de la película de Marvel. Incluye clásicos de AC/DC como 'Shoot to Thrill' y 'Thunderstruck'.",
        "exclusive": 1,
        "bandId": 1,
        "genreId": 1,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "title": "Back in Black",
        "discography": "Discografía1",
        "image": "acdc-album3.webp",
        "year": 1980,
        "price": 25,
        "discount": null,
        "description": "'Back in Black' es el séptimo álbum de estudio de AC/DC y uno de los álbumes más vendidos de todos los tiempos. Incluye éxitos como 'You Shook Me All Night Long'.",
        "exclusive": 1,
        "bandId": 1,
        "genreId": 1,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "title": "Who Made Who",
        "discography": "Discografía1",
        "image": "acdc-album4.jfif",
        "year": 1986,
        "price": 25,
        "discount": null,
        "description": "'Who Made Who' es la banda sonora de la película de Stephen King, 'Maximum Overdrive'. Incluye canciones de AC/DC como 'Sink the Pink'.",
        "exclusive": 1,
        "bandId": 1,
        "genreId": 1,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "title": "High Voltage",
        "discography": "Discografía1",
        "image": "acdc-album5.jpg",
        "year": 1976,
        "price": 25,
        "discount": null,
        "description": "'High Voltage' es el primer álbum internacional de AC/DC y presenta canciones como 'T.N.T.' y 'It's a Long Way to the Top (If You Wanna Rock 'n' Roll)'.",
        "exclusive": 1,
        "bandId": 1,
        "genreId": 1,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "title": "Power Up",
        "discography": "Discografía1",
        "image": "acdc-album6.jpg",
        "year": 2020,
        "price": 25,
        "discount": null,
        "description": "'Power Up' es el álbum más reciente de AC/DC, lanzado después de una pausa de seis años. Incluye canciones como 'Shot in the Dark' y 'Realize'.",
        "exclusive": 1,
        "bandId": 1,
        "genreId": 1,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "title": "Black Ice",
        "discography": "Discografía1",
        "image": "acdc-album7.jpg",
        "year": 2008,
        "price": 25,
        "discount": null,
        "description": "'Black Ice' es el decimoquinto álbum de estudio de AC/DC y marcó su regreso después de ocho años sin lanzar nuevos álbumes. Incluye canciones como 'Rock 'n' Roll Train'.",
        "exclusive": 1,
        "bandId": 1,
        "genreId": 1,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "title": "Use Your Illusion I",
        "discography": "Discografía1",
        "image": "guns-album1.jpg",
        "year": 1991,
        "price": 25,
        "discount": null,
        "description": "'Use Your Illusion I' es el tercer álbum de estudio de Guns N' Roses y contiene éxitos como 'November Rain' y 'Don't Cry'.",
        "exclusive": 1,
        "bandId": 2,
        "genreId": 1,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "title": "Chinese Democracy",
        "discography": "Discografía1",
        "image": "guns-album2.png",
        "year": 2008,
        "price": 25,
        "discount": null,
        "description": "'Chinese Democracy' es el quinto álbum de estudio de Guns N' Roses y marcó el regreso de la banda después de una larga pausa. Incluye canciones como 'Chinese Democracy' y 'Better'.",
        "exclusive": 1,
        "bandId": 2,
        "genreId": 1,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "title": "The Spaghetti Incident?",
        "discography": "Discografía1",
        "image": "guns-album3.png",
        "year": 1993,
        "price": 25,
        "discount": null,
        "description": "'The Spaghetti Incident?' es el quinto álbum de estudio de Guns N' Roses y es una colección de versiones de canciones punk y rock. Incluye canciones como 'Since I Don't Have You' y 'Ain't It Fun'.",
        "exclusive": 1,
        "bandId": 2,
        "genreId": 1,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "title": "Nothing Lasts Forever",
        "discography": "Discografía1",
        "image": "guns-album4.png",
        "year": 2022,
        "price": 25,
        "discount": null,
        "description": "'Nothing Lasts Forever' es un álbum recopilatorio de Guns N' Roses que presenta una selección de sus canciones más icónicas. Incluye éxitos como 'Sweet Child o' Mine' y 'Welcome to the Jungle'.",
        "exclusive": 1,
        "bandId": 2,
        "genreId": 1,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "title": "Greatest Hits",
        "discography": "Discografía1",
        "image": "guns-album5.webp",
        "year": 2004,
        "price": 25,
        "discount": null,
        "description": "'Greatest Hits' es un álbum recopilatorio de Guns N' Roses que abarca los éxitos más grandes de la banda, incluyendo 'Sweet Child o' Mine' y 'Paradise City'.",
        "exclusive": 1,
        "bandId": 2,
        "genreId": 1,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "title": "Presence",
        "discography": "Discografía1",
       "image": "zeppelin-album1.png",
        "year": 1976,
        "price": 25,
        "discount": null,
        "description": "'Presence' es el séptimo álbum de estudio de Led Zeppelin y presenta canciones como 'Achilles' Last Stand' y 'Nobody's Fault but Mine'.",
        "exclusive": 1,
        "bandId": 3,
        "genreId": 1,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "title": "In Through the Out Door",
        "discography": "Discografía1",
       "image": "zeppelin-album2.png",
        "year": 1979,
        "price": 25,
        "discount": null,
        "description": "'In Through the Out Door' es el octavo y último álbum de estudio de Led Zeppelin, con canciones como 'Fool in the Rain' y 'All My Love'.",
        "exclusive": 1,
        "bandId": 3,
        "genreId": 1,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "title": "The Song Remains the Same",
        "discography": "Discografía1",
       "image": "zeppelin-album3.webp",
        "year": 1976,
        "price": 25,
        "discount": null,
        "description": "'The Song Remains the Same' es la banda sonora de la película homónima de Led Zeppelin y presenta actuaciones en vivo de la banda, incluyendo 'Stairway to Heaven' y 'Whole Lotta Love'.",
        "exclusive": 1,
        "bandId": 3,
        "genreId": 1,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "title": "How the West Was Won",
        "discography": "Discografía1",
       "image": "zeppelin-album4.png",
        "year": 2003,
        "price": 25,
        "discount": null,
        "description": "'How the West Was Won' es un álbum en vivo de Led Zeppelin que documenta actuaciones en vivo de la banda en 1972. Incluye éxitos como 'Rock and Roll' y 'Dazed and Confused'.",
        "exclusive": 1,
        "bandId": 3,
        "genreId": 1,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "title": "Mothership",
        "discography": "Discografía1",
       "image": "zeppelin-album5.png",
        "year": 2007,
        "price": 25,
        "discount": null,
        "description": "'Mothership' es un álbum recopilatorio de Led Zeppelin que incluye algunas de sus mejores canciones, como 'Whole Lotta Love' y 'Immigrant Song'.",
        "exclusive": 1,
        "bandId": 3,
        "genreId": 1,
        "createdAt": new Date(),
        "updatedAt": new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Albums', null, {});
  }
};
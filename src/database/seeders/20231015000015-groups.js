'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Groups', [
      {
        name: 'Clasicos Inmortales',
        image: 'grupo-1.png',
        genreId: 5,
        description: '¡Bienvenidos a Clásicos Inmortales! Un viaje en el tiempo a través de las leyendas musicales del pasado. Descubre la nostalgia de la música que marcó época.',
        primaryColor: '#754711', // Amarillo mostaza
        secondaryColor: '#000000', // Negro
        tertiaryColor: '#800000', // Rojo bordo
        followers: 5,
        favorites: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nuevo Matiz',
        image: 'grupo-2.png',
        genreId: 3,
        description: '¡Bienvenidos a Nuevo Matiz! Explora el espectro musical del presente. Noticias frescas y vibrantes sobre la música actual.',
        primaryColor: '#FFA500', // Naranja
        secondaryColor: '#FFD700', // Amarillo mostaza
        tertiaryColor: '#4B0082', // Índigo oscuro
        followers: 10,
        favorites: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'HEAVY',
        image: 'grupo-3.png',
        genreId: 4,
        description: '¡Adéntrate en el mundo del Heavy Metal y Rock Pesado! En HEAVY, te traemos las noticias más ardientes y pesadas del género.',
        primaryColor: '#000000', // Negro
        secondaryColor: '#800000', // Rojo bordo
        tertiaryColor: '#C0C0C0', // Plata
        followers: 11,
        favorites: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Azucar picante',
        image: 'grupo-5.png',
        genreId: 2,
        description: '¡Azúcar y Rock Femenino! En Azúcar Picante, celebramos el mundo del rock en bandas femeninas. ¡Siente la potencia y pasión en la música!',
        primaryColor: '#FF1493', // Rosa brillante
        secondaryColor: '#F08080', // Rosa claro
        tertiaryColor: '#B22222', // Rojo fuego
        followers: 20,
        favorites: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Celeste y blanca',
        image: 'grupo-4.png',
        genreId: 6,
        description: 'Celebremos juntos la música argentina. En Celeste y Blanca, compartimos noticias sobre bandas argentinas que llenan de orgullo nuestro país.',
        primaryColor: '#00FFFF', // Cian brillante
        secondaryColor: '#FFFFFF', // Blanco
        tertiaryColor: '#003366', // Azul oscuro
        followers: 17,
        favorites: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Groups', null, {});
  }
};

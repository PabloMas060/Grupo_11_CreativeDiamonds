'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      years: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      avatar: {
        type: Sequelize.STRING,
        allowNull: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: true
      },
      nick_name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      about: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      state: {
        type: Sequelize.STRING,
        allowNull: true
      },
      addressId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: "Addresses"
          }
        }
      },
      rolId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Rols"
          }
        }
      },
      rangeId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Ranges"
          }
        }
      },
      identificatorId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: "Identificators"
          }
        }
      },
      headId: { 
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: "Heads"
          }
        }
      },
      faceId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: "Faces"
          }
        }
      },
      bustId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: "Busts"
          }
        }
      },
      hatId: { 
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: "Hats"
          }
        }
      },
      socialId: {
        type: Sequelize.STRING
      },
      socialProvider: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};

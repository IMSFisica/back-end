'use strict';
//references -> quantabela tem a chave estrangeirea; 
//onUpdate -> oq fzr se key for alterada (CASCADE) -> cascata de alterações
//onDelete -> idem
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_interests', { 
      id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        alowNull: false
      },
      user_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      interests_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'interests', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      created_at:{ 
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at:{ 
        type: Sequelize.DATE,
        allowNull: false
      }
      
    });
  },
  

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_interests');

  }
};

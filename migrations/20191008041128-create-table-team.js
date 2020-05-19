const { sequelize } = require('../migration');

const TABLENAME = 'team';

module.exports = {
    up: (queryInterface, Sequelize, done) => {
        queryInterface.createTable(TABLENAME, {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            competitionId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING(50),
                unique: true,
                allowNull: false,
            },
            city: {
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            createdAt: Sequelize.DATE,
            updatedAt: {
                type: Sequelize.DATE,
                defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
                allowNull: false,
            },
        }).then((result) => done(null, result), (err) => done(err));
    },
    down: (queryInterface, Sequelize, done) => {
        queryInterface.dropTable(TABLENAME)
            .then((result) => done(null, result), (err) => done(err));
    },
};

const { sequelize } = require('../migration');

const TABLENAME = 'record';

module.exports = {
    up: (queryInterface, Sequelize, done) => {
        queryInterface.createTable(TABLENAME, {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            memberId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'member',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                allowNull: false,
            },
            round: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            runningTime: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            sitUpCount: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            pushUpCount: {
                type: Sequelize.INTEGER,
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

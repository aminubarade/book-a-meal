import Sequelize from 'sequelize';

const sequelize = new Sequelize('postgres://barade:AMINU@localhost:5432/bookameal');

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

export default sequelize;
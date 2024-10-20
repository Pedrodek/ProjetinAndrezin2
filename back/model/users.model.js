module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define('users', {
        name: {
            type: Sequelize.STRING
        }
    })

    return Users;
}
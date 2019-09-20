'use strict';
module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define('Course', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Please provide a course title' },
            },
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Please provide a course description' },
            },
        },
        estimatedTime: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        materialsNeeded: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    }, {});
    Course.associate = function (models) {
        // associations can be defined here
        Course.belongsTo(models.User, {
            as: 'user',
            foreignKey: {
                fieldName: 'userId',
                allowNull: false,
            },
        });
    };
    return Course;
};  

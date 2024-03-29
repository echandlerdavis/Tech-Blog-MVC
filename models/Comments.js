const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init({
    id: {
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    date_created: {
        type: DataTypes.DATE,
        allowNull:false,
        defaultValue: DataTypes.NOW,
    },
    body:{
        type: DataTypes.STRING,
        allowNull:false
    },
    username: {
        type: DataTypes.STRING,
    },
    blog_id: {
        type: DataTypes.INTEGER,
        references: {
                model: 'blog',
                key: 'id',
            },
    },
    

},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
}
    
)


module.exports = Comment;
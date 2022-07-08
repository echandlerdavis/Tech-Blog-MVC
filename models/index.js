const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comments')

User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
    foreignKey: 'user_id'
});

Blog.hasMany(Comment, {
    foreignKey: 'blog_id'
    //is this right? maybe user_id?
});

Comment.belongsTo(Blog, {

});

Comment.belongsTo(User, {

});

module.exports = { User, Blog, Comment };

const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects an JOIN with user data
    const blogData = await Blog.findAll({
      include: [ User ]
    });
    //Do i need to use Comment Data as well? 

    // Serialize data so the template can read it
    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('allposts', { 
      blogs, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/posts/:id', async (req, res) => {

  const blogId = req.params.id
  try {
    const blogData = await Blog.findByPk(blogId, {});

    const blog = blogData.get({ plain: true });

    res.render('viewpost', {
      blog,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Blog }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/add-post', withAuth, (req, res) =>{

  res.render('newpost', {
    logged_in: req.session.logged_in
  })
});

router.get('/update-post/:id', withAuth, async(req, res)=> {

const postId = req.params.id;
try {
  const blogData = await Blog.findByPk (postId, {})
  let blog = blogData.get({ plain: true });

  res.render('updateblog', {
    blog,
    logged_in: req.session.logged_in
  });
} catch(err) {
  res.status(500).json(err);
}

});

module.exports = router;

//TODO: Include a comment route in some way. 
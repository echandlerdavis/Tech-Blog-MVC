const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all blogs
router.get('/', async (req, res) => {
    try {
      const blogData = await Blog.findAll();
      if (!blogData) {
        res.status(404).json({ message: 'No blog posts in the database!' });
        return;
      }
      res.status(200).json(blogData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// GET one blog
router.get('/:id', async (req, res) => {
    try {
      const blogData = await Blog.findByPk(req.params.id);
      if (!blogData) {
        res.status(404).json({ message: 'No blog with this id!' });
        return;
      }
      res.status(200).json(blogData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.post('/', withAuth, async(req, res)=>{
    try{
        const newBlog = await Blog.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newBlog);
    } catch(err){
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async(req, res) => {
    try{
        const blogData = await Blog.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            },
        });

        if (!blogData){
            res.status(404).json({ message: 'No blog post found with this id!' });
            return;
        }
        
        res.status(200).json(blogData);

    } catch(err){

        res.status(500).json(err);
    }
});

router.put('/:id', withAuth, async(req, res) => {
    try{
        const blogData = await Blog.update(
            {
                title: req.body.title,
                blog_post: req.body.blog_post
            },
            {
            where: {
                id: req.params.id,
            },
        })

        if (!blogData){
            res.status(404).json({ message: 'No blog post found with this id!' });
            return;
        }
        
        res.status(200).json(blogData); 
    }catch(err){
        res.status(400).json(err);
    }
})

 


module.exports = router;
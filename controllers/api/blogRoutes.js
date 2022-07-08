const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async(req, res)=>{
    try{
        const newBlog = await Blog.create({
            ...req.body,
            user_id: req.session.user_id,
            //can i get an explanation of ...req.body?
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
                //explanation of using .session here?
            },
        });

        if (!blogData){
            res.status(404).json({ message: 'No blog post found with this id!' });
            return;
        }
        
        res.status(200).json(blogData);

    } catch(err){

        res.status(500).json(err);
        //why 500 not 400
    }
});

//TODO: Fix this shit. refer to the ecommerce backend
router.put('/:id', withAuth, async(req, res) => {
    try{
        const blogData = await Blog.update({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            },
        })

        if (!blogData){
            res.status(404).json({ message: 'No blog post found with this id!' });
            return;
        }
        
        res.status(200).json(blogData);
        //I know there's more to it than this. Maybe look at the last homework. 
    }catch(err){
        res.status(400).json(err);
    }
})

 


module.exports = router;
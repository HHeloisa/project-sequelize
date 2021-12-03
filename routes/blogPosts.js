const router = require('express').Router();
const postController = require('../controllers/blogPosts');
const { validateToken } = require('../Middlewares/authorizations');
const { postMiddleware } = require('../Middlewares/blogPostsMiddleware');

router.post('/', validateToken, postMiddleware, postController.createPost);
router.get('/', validateToken, postController.getAllPosts);
router.get('/:id', validateToken, postController.getById);
module.exports = router;
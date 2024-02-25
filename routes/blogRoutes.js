const express = require('express')
const { getAllBlogsController, createBlogController, getBlogByIdController, deleteBlogController, updateBlogController, userBlogController } = require('../controllers/blogController')

//router objects
const router = express.Router()

//routes
//GET || all blogs
router.get('/all-blog',getAllBlogsController)

//POST || create blogs
router.post('/create-blogs',createBlogController)

//PUT || update blog
router.put('/update-blog/:id',updateBlogController)

//GET || Single blog details
router.get('/get-blog/:id',getBlogByIdController)

//DELETE || Delete Blog
router.delete('/delete-blog/:id',deleteBlogController)

//GET || User blog
router.get('/user-blg/:id',userBlogController)

module.exports = router
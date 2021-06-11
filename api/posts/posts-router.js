// implement your posts router here
const express = require('express')
const posts = require('./posts-model')

const router = express.Router(); //Express router creation

router.get('/api/posts', (req, res) => {
    users.find() 
        .then((posts) => {
            res.status(200).json(posts)
        })
        .catch((error) => {
            res.status(500).json({message: 'Post information not retrievable'})
        })
})

router.get('/api/posts/:id', (req, res) => {
    users.findById(req.params.id)
        .then((post) => {
            if(post) {
                res.status(200).json(post)
            }else{
                res.status(400).json({message: 'The ID you are attempting does not exist!'})
            }
        })
        .catch((error) => {
            res.status(500).json({message: 'The post could not be retrieved'})
        })
})

router.post('/api/posts', (req, res) => {
    if(!res.body.title || !req.body.contents) {
        return res.status(400).json({message: 'Title and Contents are needed to move forward!'})
    }
    router.insert(req.body) 
        .then(post => {
            res.status(201).json({post});
        })
        .catch(err => {
            res.status(500).json({message: 'The post could not be retrieved'})
        })
})


router.put('/api/posts/:id', (req, res) => {
   if(!req.params.id) {
       res.status(404).json({message: 'ERROR 404'})
   }
   
   posts.update(req.params.id, req.body) 
        .then(post => {
            if(!req.body.title || !req.body.contents) {
                res.status(400).json({message: 'Title and Contents are needed to move forward!'})
            }else{
                res.status(200).json(post)
            }
        })
        .catch(err => {
            res.status(500).json({message: 'The post could not be retrieved!'})
        })
})


router.delete('/api/posts/:id/', (req, res) => {
    if(!req.params.id) {
        res.status(404).json({message: 'The post that you are looking for does not exist'})
    }

    posts.remove(req.params.id)
        .then(post => {
            res.status(200).json({message: 'The post has deleted!'})
        })
        .catch(err => {
            res.status(500).json({message: 'The post you are attempting to delete could not be removed!'})
        })
})


router.get('/api/posts/:id/comments', (req, res) => {
    if(!req.params.id) {
        res.status(404).json({message: 'The post you are attempting to reach does not exist!'})
    }
    
    posts.findPostComments(req.params.id)
        .then(comments => {
            res.status(200).json(comments)
        })
        .catch(err => {
            res.status(500).json({message: 'The comments could not be accessed'})
        })
})


module.exports = router
    


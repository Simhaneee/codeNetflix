import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Movie from '../models/movieModel.js'
import { generateToken,isAuth } from '../middleware/webToken.js';
const movieRouter = express.Router();

movieRouter.post(
    '/addMovie',
    expressAsyncHandler(async(req, res) => {    
        console.log(req.body,"ppppp")
        const creatingNewMovie = new Movie({
            movie_name: req.body.movie_name,
            movie_category:req.body.movie_category,
            is_movie:req.body.is_movie,
            image_name:req.body.image_name
        });
        const createdMovie = await creatingNewMovie.save();
        res.send("Movie saved Successfully");
    })
);

movieRouter.get(
    '/listMovies',
    expressAsyncHandler(async(req, res) => {    
      
        const listedMovies = await Movie.find({});
        res.send(listedMovies);
    })
);

export default movieRouter;
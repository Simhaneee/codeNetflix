import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    movie_name: { type: String,unique:true},
    movie_category: { type: String },
    is_movie: { type: Boolean },
    is_recently_added: { type: Boolean,default:true},
    is_leaving_soon:{type:Boolean,default:false},
    image_name:{type:String}
}, {
    timestamps: true,
});
const Movie = mongoose.model('Movie', movieSchema);
export default Movie;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        filename: String,
        url: {
            type: String,
            default: "https://www.istockphoto.com/photo/sunset-on-beach-gm825319778-133848233?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fsun-set-sea&utm_medium=affiliate&utm_source=unsplash&utm_term=sun+set+sea%3A%3A%3A",
            set: (v) => v === "" ? "https://www.istockphoto.com/photo/sunset-on-beach-gm825319778-133848233?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fsun-set-sea&utm_medium=affiliate&utm_source=unsplash&utm_term=sun+set+sea%3A%3A%3A" : v,
        }
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

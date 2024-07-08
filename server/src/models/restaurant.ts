import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    userName: { type: String, required: true },
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant", required: true },
    //dishId: { type: mongoose.Schema.Types.ObjectId, ref: "MenuItem" }, // optional
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    date: { type: Date, default: Date.now },
  });


const menuItemSchema = new mongoose.Schema({

    name: {type: String, required: true},
   // description: { type: String}, // optional
    //category: { type: String, required: true },
    //available: {type: String, enum: ['Yes', 'No'], default: 'Yes', required: true},
    // imageUrl: {type: String, required: true},
    portionSize: { type: String, enum: ['small', 'medium', 'large', 'half', 'full'],  default: 'medium', required: true },
    price: { type: Number, required: true },
    reviews: [reviewSchema],

});

const restaurantSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    restaurantName: {type: String, required: true},
    address: { type: String, required: true },
    city: {type: String, required: true},
    state: {type: String, required: true},
    country: {type: String, required: true},
    pincode: {type: String, required: true},
    deliveryPrice: {type: Number, required: true},
    estimatedDeliveryTime: {type: Number, required: true},
    cuisines: [{type: String, required: true}],
    menuItems: [menuItemSchema],
    imageUrl: {type: String, required: true},
    lastUpdated: {type: Date, required: true},
    phoneNumber: { type: String, required: true },
    
//     operatingHours: {
//     openingTime: { type: String, required: true },
//     closingTime: { type: String, required: true },
//   },
  //status: { type: String, enum: ['Open', 'Closed'], default: 'Open'},
  averageRating: { type: Number, default: 0 },
  numberOfRatings: { type: Number, default: 0 },
  reviews: [reviewSchema], // nested reviews
 // specialties: [{ type: String }],
  
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
const Review = mongoose.model("Review", reviewSchema);
const MenuItem = mongoose.model("MenuItem", menuItemSchema);

export {Restaurant, Review, MenuItem};

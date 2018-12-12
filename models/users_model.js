var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: { type: String, unique: true },
    email: String,
    img: {type: String, default:"https://cdn.24.co.za/files/Cms/General/d/5898/ba3db653764646abb1cd60006dbe179c.png"},
    puppy: {type: String, default:"I hate dogs"},
    mission: {type: String, default:"Buy Eggs for the Queens of America - AKA Jennifer Lawerence and her Beloved Sister Beyonce"},
    hashed_password: String
});
mongoose.model('User', UserSchema);
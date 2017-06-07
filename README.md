# MovieStar


// mongoose user-model
var UserSchema = new Schema({
    name: { type: String, required: true, unique: true, minlength: 5 },
    password: { type: String, required: true, minlength: 8 },
    email: { type: String, required: true, index: { unique: true } },
    date_of_birth: { type: Date, required: true },
    is_admin: { type: Boolean, required: true, default: false }
});

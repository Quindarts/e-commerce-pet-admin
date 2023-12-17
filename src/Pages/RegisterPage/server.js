// Import the express module
const express = require('express');

// Import the mongoose module
const mongoose = require('mongoose');

// Import the jsonwebtoken module
const jwt = require('jsonwebtoken');

// Create an express app
const app = express();

// Use the express.json middleware to parse the request body as JSON
app.use(express.json());

// Connect to the MongoDB database using mongoose
mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true });

// Create a user schema and model using mongoose
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

// Define a function to generate access tokens using jsonwebtoken
const generateAccessToken = (user) => {
  // Create a payload with the user's id and email
  const payload = { id: user._id, email: user.email };

  // Create an access token with the payload, the secret key, and the expiration time
  const accessToken = jwt.sign(payload, 'BA688F418C221B7CC43A14DBDAAD8', { expiresIn: '1h' });

  // Return the access token
  return accessToken;
};

// Define a function to generate refresh tokens using jsonwebtoken
const generateRefreshToken = (user) => {
  // Create a payload with the user's id and email
  const payload = { id: user._id, email: user.email };

  // Create a refresh token with the payload, the secret key, and the expiration time
  const refreshToken = jwt.sign(payload, 'BA688F418C221B7CC43A14DBDAAD8', { expiresIn: '7d' });

  // Return the refresh token
  return refreshToken;
};

// Define a POST endpoint for registration
app.post('/auth/register', (req, res) => {
  // Get the user data from the request body
  const { firstName, lastName, email, password } = req.body;

  // Validate the user data (e.g., check if the email is valid, the password is strong, etc.)
  // If the user data is invalid, send a 400 (Bad Request) status code and an error message
  // For example:
  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: 'Invalid email' });
  }

  // Check if the email already exists in the database
  // If the email already exists, send a 409 (Conflict) status code and an error message
  // For example:
  User.findOne({ email }, (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Server error' });
    }
    if (user) {
      return res.status(409).json({ message: 'This email is already taken' });
    }

  // Create a new user object with the user data
  // You can also hash the password using a library like bcrypt (https://www.npmjs.com/package/bcrypt) to make it more secure
  // For example:
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ firstName, lastName, email, password: hashedPassword });

  // Save the new user object to the database
  // If the save operation is successful, generate an access token and a refresh token for the user using the functions defined above
  // Then, send a 201 (Created) status code and the user data (without the password), the access token, and the refresh token
  // For example:
  newUser.save((err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Server error' });
    }
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    return res.status(201).json({ firstName, lastName, email, accessToken, refreshToken });
  });
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  // Print a message to the console
  // For example:
  console.log('Server is running on port 3000');
})});

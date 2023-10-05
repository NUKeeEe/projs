// It imports three functions, addToLikedMovies, getLikedMovies, and removeFromLikedMovies, from the UserController module. 
// These functions likely correspond to different actions related to a user's liked movies.


const {
  addToLikedMovies,
  getLikedMovies,
  removeFromLikedMovies,
} = require("../controllers/UserController");

const router = require("express").Router();

router.get("/liked/:email", getLikedMovies);
router.post("/add", addToLikedMovies);
router.put("/remove", removeFromLikedMovies);

module.exports = router;

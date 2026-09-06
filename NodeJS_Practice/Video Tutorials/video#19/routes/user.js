const express = require("express");
const {
  handleGetRequest,
  handlePostRequest,
  handleApiGetRequest,
  handleApiPatchRequest,
  handleApiDeleteRequest,
} = require("../controllers/user");
const router = express.Router();

router.route("/").get(handleGetRequest).post(handlePostRequest);

router
  .route("/:id")
  .get(handleApiGetRequest)
  .patch(handleApiPatchRequest)
  .delete(handleApiDeleteRequest);

module.exports = router;

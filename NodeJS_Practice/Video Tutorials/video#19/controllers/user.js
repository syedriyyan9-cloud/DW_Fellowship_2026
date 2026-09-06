const userModel = require("../models/user");

async function handleGetRequest(req, res) {
  const user = await userModel.find({});
  const html = `
    <ul>
    ${user.map((user) => `<li> ${user.firstName} </li>`).join("")}
    </ul>
    `;
  return res.send(html);
}

async function handlePostRequest(req, res) {
  const body = req.body;
  await userModel.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    job_title: body.job_title,
  });
  return res.status(201).json({ status: "success" });
}

async function handleApiGetRequest(req, res) {
  const user = await userModel.findById(req.params.id);
  return res.status(200).json({ user: user });
}

async function handleApiPatchRequest(req, res) {
  const body = req.body;
  await userModel.findByIdAndUpdate(req.params.id, {
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    job_title: body.job_title,
  });
  return res.status(200).json({ status: "Success" });
}

async function handleApiDeleteRequest(req, res) {
  await userModel.findByIdAndDelete(req.params.id);
  return res.status(200).json({ status: "Success" });
}

module.exports = {
  handleGetRequest,
  handlePostRequest,
  handleApiGetRequest,
  handleApiPatchRequest,
  handleApiDeleteRequest,
};

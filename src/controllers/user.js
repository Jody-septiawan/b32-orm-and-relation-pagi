// import model here
const { user } = require('../../models');

exports.addUsers = async (req, res) => {
  try {
    await user.create(req.body);

    res.send({
      message: 'Insert data user with ORM finished',
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: 'failed',
      message: 'Server Error',
    });
  }
};

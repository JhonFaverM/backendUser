const ctrluser = {},
  User = require("../models/user");
ctrluser.create = async (req, res) => {
  const newuser = new User({
    user: req.body.user,
    status: req.body.status

    //date: new Date (req.body.date), //debe mandarse asi: 2021-11-20
    //time: new Date("1970-01-01 " + req.body.time), //debe mandarse asi: 21:07:00
    //patient: req.body.patient_id,
  });

  
  await newuser.save();

  

  res.json({
    msg: "User created successfully",
    
  });
};
module.exports = ctrluser;
import User from '../Model/userModel.js';
// api crations

//create

export const create = async (req, res) => {
  try {
    const userData = new User(req.body); //connecting with the user schema {User}

    if (!userData) {
      return res.status(404).json({ msg: 'User data not found' });
    }
    const savedData = await userData.save(); //saving the data
    res.status(200).json({ savedData, msg: 'User created Sucessfully' });
  } catch (err) {
    res.status(500).json({ err: err });
  }
};

// fetch

export const getAll = async (req, res) => {
  try {
    const userData = await User.find();
    if (!userData) {
      return res.status(404).json({ msg: 'User data not found' });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

//fetch one

export const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.status(200).json(userExist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

//update
export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ msg: 'User not Found' });
    }
    const updatedData = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

//delete
export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ msg: 'User not found' });
    }
    await User.findByIdAndDelete(id);
    res.status(200).json({ msg: 'User Data Deleted' });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

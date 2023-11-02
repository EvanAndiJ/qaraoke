'use server'
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const db = require("./db/models");
const Op = db.Sequelize.Op
const User = db.user;

export async function signUp (formData: FormData){
    const name = formData.get('name')
    const username = formData.get('username')
    const email = formData.get('email')
    const password = formData.get('password')

    const prevEmail = await User.findOne({ where: { email: {[Op.iLike]: email } } })
    if (prevEmail) { return {err: 'email already registered'}}

    const prevUser = await User.findOne({ where: {username: {[Op.iLike]: username} }})
    if (prevUser) { return {err: 'Username unavailable'} }

    const user = await User.create({
      name: name,
      username: username,
      email: email,
      password: bcrypt.hashSync(password, 8)
    })
    //then we need to navigate to login or profile page
    //read about handing back to client side
    console.log('signed up')
}

export async function login (formData: FormData) {
    const username = formData.get('username');
    const user = await User.findOne({
        where: { username: {[Op.iLike]: username}},
        attributes: ['id', 'username', 'name', 'email', 'password'], 
    });
    if (!user) { return {err: 'User not found'}};

    const password = formData.get('password');
    const passIsValid = bcrypt.compareSync(password, user.password);
    if (!passIsValid) { return {err: 'Password incorrect'}}

    const token = jwt.sign({id: user.id}, process.env.SECRET, {expiresIn: 86400})
    console.log('login')
    return {user: {id: user.id, username: user.username, name: user.name, email: user.email, token: token}}
  }
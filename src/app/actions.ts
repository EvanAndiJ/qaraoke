'use server'
 
import { redirect } from 'next/navigation'
import { revalidateTag } from 'next/cache'
import { cache } from 'react';

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
    if (prevEmail) { new Error('email already registered')}

    const prevUser = await User.findOne({ where: {username: {[Op.iLike]: username} }})
    if (prevUser) { new Error('Username unavailable')}

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

export const login = cache( async(formData: FormData) => {
    const username = formData.get('username');
    const user = await User.findOne({
        where: { username: {[Op.iLike]: username}},
    });
    if (!user) { return {err: new Error('User not found')}};
    
    const password = formData.get('password');
    const passIsValid = bcrypt.compareSync(password, user.password);
    if (!passIsValid) {
      console.log('wrong p')
      return {err: new Error('Password Incorrect')}
    }
    else {
      const token = jwt.sign({id: user.id}, process.env.SECRET, {expiresIn: 86400})
      const userData = {
        id: user.id, 
        username: user.username, 
        name: user.name, 
        email: user.email, 
        token: token
      }
      console.log('login', userData)
      return {user: userData}
    }

  })
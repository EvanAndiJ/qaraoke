
'use server'
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const db = require("./db/models");
const Op = db.Sequelize.Op
const User = db.user;

export const login =  async(formData: FormData) => {
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

}

export async function POST() {
      const res = await fetch('https://data.mongodb-api.com/...', {
        method: 'POST',
        //@ts-ignore
        headers: {
          'Content-Type': 'application/json',
          'API-Key': process.env.DATA_API_KEY,
        },
        body: JSON.stringify({ time: new Date().toISOString() }),
      })
   
    const data = await res.json()
   
    return Response.json(data)
  }

  
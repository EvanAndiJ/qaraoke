const db = require("../../db/models");
const User = db.user;
const Op = db.Sequelize.Op;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

export async function GET(req: Request) {
  console.log('signup', req.body)
    // const res = await fetch('https://data.mongodb-api.com/...', {
    // //@ts-ignore
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'API-Key': process.env.DATA_API_KEY,
    //   },
    // })
    // const data = await res.json()
   
    return Response.json({ })
  }
const express = require('express')
const ejs = require('ejs')

const app = express()

app.set('view engine', 'ejs')

const USERS = [
  {
    username: 'george',
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg",
  },
  {
    username: 'saksham',
    email: "saksham@reqres.in",
    first_name: "Saksham",
    last_name: "Verma",
    avatar: "https://reqres.in/img/faces/4-image.jpg",
  },
  {
    username: 'priti',
    email: "priti@reqres.in",
    first_name: "Priti",
    last_name: "Bishnoi",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
  },
  {
    username: 'hardik',
    email: "hardik@reqres.in",
    first_name: "Hardik",
    last_name: "Sharma",
    avatar: "https://reqres.in/img/faces/6-image.jpg",
  }
]

app.get('/', (req, res) => {
  res.send({
    status: 'SUCCESS',
    message: 'Server is up :)'
  })
})

app.get('/users/:username', (req, res) => {
  const { username } = req.params

  const userDetails = USERS.find(user => user.username === username)

  if(userDetails)
    res.render('user', userDetails)
  else
    res.redirect('/user/not-found')
})

app.get('/user/not-found', (req, res) => {
  res.sendFile(__dirname + '/html/not-found.html')
})

app.listen(3000, () => {
  console.log('Server is running :)')
})





















/*
  # View engine/ Template engine
    - EJS
    - Response method: .render
    - Formats
      - <%= variableName %>: Access variable's value
      - <% if() %>: Javascript expressions
  # Request Parameters
    - Variables in URL
    - Define - :variableName
    - Access - req.params.variableName

  # Extra code
  app.get('/george', (req, res) => {
    res.sendFile(__dirname + '/html/user1.html')
  })

  app.get('/janet', (req, res) => {
    res.sendFile(__dirname + '/html/user2.html')
  })

  app.get('/janet', (req, res) => {
    res.render('user', {
      "email": "janet.weaver@reqres.in",
      "first_name": "Janet",
      "last_name": "Weaver",
      "avatar": "https://reqres.in/img/faces/2-image.jpg",
      isPremium: true,
      hobbies: ["Coding"]
    })
  })

  app.get('/emma', (req, res) => {
    res.render('user', {
      "email": "emma.wong@reqres.in",
      "first_name": "Emma",
      "last_name": "Wong",
      "avatar": "https://reqres.in/img/faces/3-image.jpg",
      isPremium: false,
      hobbies: ["Reading novels", "Coding", "Swimming", "Dancing"]
    })
  })

  <% if(isPremium) { %>
    <span>PREMIUM USER 🌟</span>
  <% } %>

  <ul>
    <% hobbies.forEach((hobby) => { %>
      <li><%=hobby%></li>
    <% }) %>
  </ul>

  # Status Codes:
  - 200 (Default): Success
  - 404: Page/ Resource not found
*/
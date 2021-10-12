const express = require('express');
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) => {
  res.send('Respondendo!!!')
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('server is running!')
})



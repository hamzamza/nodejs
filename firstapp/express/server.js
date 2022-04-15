// console.log('server : hello hamza ');
// console.log('another message from the server');
// app.listen(3000);
const d = require('express');
const app = d();
app.listen(3000);

app.get('/', (req, res) => {
  console.log('here');
  res.send('<div> hello from the other side  </div>  <div>ello</div>');
});

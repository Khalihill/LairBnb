// backend/routes/api/index.js
const router = require('express').Router();

// backend/routes/api/index.js
// ...

router.post('/test', function (req, res) {
    res.json({ requestBody: req.body });
    fetch('/api/test', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "XSRF-TOKEN": `T3XJDqOU-3tZOLVg1lDUE5WozQgLSmV07eCU`
        },
        body: JSON.stringify({ hello: 'world' })
      }).then(res => res.json()).then(data => console.log(data));
});

// ...


module.exports = router;
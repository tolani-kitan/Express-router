const express = require('express');

const router = express.Router();

 const users = [];
 var id = 1;

 router
   .route("")
   .get((req, res) => res.json(users))
   .post((req, res) => {
     users.push({
       name: req.body.name,
       id: ++id,
     });
     res.json({ message: "User Created" });
   });

 router 
   .route("/:id")
   .get((req, res) => {
     const user = users.find((val) => val.id === Number(req.params.id));
     return res.json(user);
   })
   .patch((req, res) => {
     const user = users.find((val) => val.id === Number(req.params.id));
     user.name = req.body.name;
     res.json({ message: "User Updated" });
   })
   .delete((req, res) => {
     const userIndex = users.findIndex(
       (val) => val.id === Number(req.params.id)
     );
     users.splice(userIndex, 1);
     res.json({ message: "User Deleted" });
   });

 module.exports = router;

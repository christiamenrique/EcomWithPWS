/////////////////////////////////////////////
//// API endpoints for managing employees //
///////////////////////////////////////////
const router = require('express').Router();
let Contact = require('../models/contacts.models');

// 1. get all employee on record
router.get('/', (req, res) => {
    Contact.find({}, (err, data) => {
        if (err) {
            res.send(err)
        } else {
            res.json(data)
        }
    })
})

// 2. add a new employee
router.post('/add', async ({body}, res) => {
    Contact.create(body)
    .then(dbContacts => {
      res.json(dbContacts)
    })
.catch(err => {
  res.json(err)
})

})

// 2. retrieve a specific employee and update it 
router.post("/update/:id", (req, res) => {
    let id = req.param.id
    console.log(id)
    Contact.updateOne(
        {
            _id: req.params.id
        },
        {
            $set: {
                fullName: req.body.fullName,
                email: req.body.email,
                phoneNumber: req.body.phoneNumber,
                comments: req.body.comments,
            }

        }, { new: true }
    ).then(data => res.json(data).catch(err => console.error(err)))
});

// 3. delete an employee
router.delete("/:id", async (req, res) => {
    const contact = await Contact.deleteOne({ _id: req.params.id })
    res.send(contact)
})

module.exports = router;
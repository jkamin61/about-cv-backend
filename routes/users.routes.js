const express = require('express');
const router = express.Router();
const {findUserByEmail, addEmailToWaitlist} = require('../controllers/users.controller');

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/add-to-waitlist', async (req, res, next) => {
    try {
        const value = req.body;
        const {email, password} = value;
        const existingUser = await findUserByEmail(email);
        if (existingUser) {
            res.status(400).json({
                status: 'Conflict',
                code: 400,
                message: "Email already in waitlist",
            });
        } else {
            const user = await addEmailToWaitlist(email);
            res.status(201).json({
                status: 'Success',
                code: 201,
                data: user,
            });

        }
    } catch (err) {
        next(err);
    }
})

module.exports = router;

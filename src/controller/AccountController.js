const Account = require('../model/Account');


const AccountController = {
    postRegister: async(req, res, next) => {
        const { email, password } = req.body;
        try {
            Account.findOne({ email: email }).then(async account => {
                if (!account) {
                    let data = {
                        email: email,
                        password: password
                    }
                    await Account(data).save();
                    return res.status(200).json({ success: true, msg: 'Register success' })
                } else {
                    return res.status(300).json({ success: false, msg: 'Account exist' })
                }
            })
        } catch (error) {
            return res.status(500).json({ success: true, msg: 'server error' })
        }
    }
}
module.exports = AccountController;
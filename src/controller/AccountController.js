const Account = require('../model/Account');


const AccountController = {
    postRegister: async(req, res, next) => {
        const { email, password, dob, phone, fullname } = req.body;
        try {
            Account.findOne({ email: email }).then(async account => {
                if (!account) {
                    let data = {
                        email: email,
                        password: password,
                        fullname: fullname,
                        phone: phone,
                        avatar: 'abc',
                        dob: dob
                    }
                    await Account(data).save();
                    return res.status(200).json({ success: true, msg: 'Register success', data: data });
                } else {
                    return res.status(300).json({ success: false, msg: 'Account exist' });
                }
            })
        } catch (error) {
            return res.status(500).json({ success: true, msg: 'server error' });
        }
    },
    postLogin: async(req, res, next) => {
        const { email, password } = req.body;
        try {
            Account.findOne({ email: email }).then(async account => {
                if (!account) {
                    return res.status(300).json({ success: false, msg: 'account not exist' });
                } else {
                    if (password == account.password) {
                        return res.status(200).json({ success: true, msg: 'Login success', data: account });
                    } else {
                        return res.status(300).json({ success: false, msg: 'email or password was wrong' });
                    }
                }
            })
        } catch (error) {
            return res.status(500).json({ success: false, msg: 'server error' });
        }
    },
}
module.exports = AccountController;
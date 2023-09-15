const jwt = require('jsonwebtoken');
const Account = require('../model/Account');
const service = require('../service/email');

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
                        const token = jwt.sign(
                            {
                                email: account.email,
                                level: account.level
                            }, 
                            process.env.SESSION_SECRET, 
                            {expiresIn: 60*60*24});
                        return res.status(200).json({ success: true, msg: 'Login success', data: account, accessToken: token});
                    } else {
                        return res.status(300).json({ success: false, msg: 'email or password was wrong' });
                    }
                }
            })
        } catch (error) {
            return res.status(500).json({ success: false, msg: 'server error' });
        }
    },
    getLogout: async(req, res, next) => {
        try {
            await req.session.destroy();
            return res.status(200).json({ success: true, msg: 'Logout success' })
        } catch (error) {
            return res.status(500).json({ success: false, msg: 'server error' })
        }
    },
    getVerifyEmail: async(req, res, next) => {
        service.sendEmail('123', req.session.email)
    },
    // postUpdateInformation: async(req,res,next)=> {
    //     const {email, }
    // }

}
module.exports = AccountController;
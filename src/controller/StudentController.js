const Account = require('../model/Account');

const StudentController = {
    postChangePassword: async(req, res, next) => {
        const { password, newPassword } = req.body;
        try {
            Account.findOne({ email: req.session.email }).then(async account => {
                if (account.password != password) {
                    return res.status(300).json({ success: false, msg: 'Mat khau cu khong turng khop' });
                } else {
                    account.password = newPassword;
                    account.save();
                    return res.status(200).json({ success: true, msg: 'thay doi mat khau thanh cong' });
                }
            })
        } catch (error) {
            return res.status(500).json({ success: false, msg: 'Loi server' });
        }
    }
}
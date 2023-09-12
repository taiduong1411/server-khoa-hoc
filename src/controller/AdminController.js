const Account = require('../model/Account');

const AdminController = {
    getAllStudent: async (req, res, next) => {
        try {
            Account.find({ level: '1' }).lean().then(async accounts => {
                if (!accounts) {
                    return res.status(300).json({ success: false, msg: 'Dont have Student !!!' })
                } else {
                    return res.status(200).json({ success: true, data: accounts })
                }
            })
        } catch (error) {
            return res.status(500).json({ success: false, msg: 'server error' })
        }
    },
    getAllTeacher: async (req, res, next) => {
        try {
            Account.find({ level: '2' }).lean().then(async accounts => {
                if (!accounts) {
                    return res.status(300).json({ success: false, msg: 'Dont have Teacher !!!' })
                } else {
                    return res.status(200).json({ success: true, data: accounts })
                }
            })
        } catch (error) {
            return res.status(500).json({ success: false, msg: 'server error' })
        }
    }
}
module.exports = AdminController;
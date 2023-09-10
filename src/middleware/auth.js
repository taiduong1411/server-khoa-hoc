module.exports = auth = async(req, res, next) => {
    if (req.session.level != '1') {
        return res.status(300).json({ success: false, msg: 'you are not admin' })
    } else {
        next();
    }
}
module.exports = auth = async (req, res, next) => {
    if (!req.session.email) {
        return res.status(300).json({ success: false, msg: 'Please Login!' })
    } else {
        next();
    }
}
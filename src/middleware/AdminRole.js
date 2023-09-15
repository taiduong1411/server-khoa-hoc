module.exports = adminRole = async (req, res, next) => {
    if(req.user.level !== '3'){
        return res.status(300).json({ success: false, msg: 'you are not admin, please login !' })
    }
    next();
}
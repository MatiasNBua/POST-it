const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { users: { updatePasswordUser } } = require('../../logic')
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling(() => {

        const userId = verifyToken(req)

        const { body: { oldPassword, newPassword, newPasswordRepeat} } = req

        return updatePasswordUser(userId, oldPassword, newPassword, newPasswordRepeat)
            .then(()=> res.status(204).send())
    }, res, logger)
}
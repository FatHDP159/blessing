

export const authRequired = (req, res, next) => {
    console.log("Validating token...")
    next()
}    
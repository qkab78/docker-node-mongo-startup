module.exports = router =>{
    router.prefix("/api")
    router.use("/items", require('./items'))
}
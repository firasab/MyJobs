
if (process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: "mongodb+srv://admin:admin@cluster0.4y03j.mongodb.net/myjobs?retryWrites=true&w=majority", 
        secret: 'yoursecret'
    };
} else {
    module.exports = {
        mongoURI: "mongodb+srv://admin:admin@cluster0.4y03j.mongodb.net/myjobs?retryWrites=true&w=majority",
        secret: 'yoursecret'
    };
}

mongodb = 'mongodb+srv://testing:testing123@cluster0.hhrzyf0.mongodb.net/mean-book?retryWrites=true&w=majority'
db ='mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0'
module.exports = {
  //local MongoDB deployment ->
  "URI":mongodb || "mongodb://localhost/books229"
};

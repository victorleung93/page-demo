const db_link = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0';

module.exports = {
    sessionSecret : 'developmentSessionSecret',
    db:  db_link || 'mongodb://localhost/users'
    //db: 'mongodb://localhost/users1'
    //db: 'mongodb://ac-qxxeagw-shard-00-00.ehe7ifl.mongodb.net:27017,ac-qxxeagw-shard-00-01.ehe7ifl.mongodb.net:27017,ac-qxxeagw-shard-00-02.ehe7ifl.mongodb.net:27017/myFirstDatabase?replicaSet=atlas-gf1ivq-shard-0 --ssl --authenticationDatabase admin --username VictorLeung93 --password <password>'
}
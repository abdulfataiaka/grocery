import mongoose from 'mongoose';

const DBHOST = 'localhost';
const DBPORT = 27017;
const DBNAME = 'groceries';
const DBURL = `mongodb://${DBHOST}:${DBPORT}/${DBNAME}`;

const DBInitialize = () => {
  mongoose.connect(DBURL, { useNewUrlParser: true }, function() {
    console.log(`Mongoose connected to mongo database on port ${DBPORT}`);

    console.log(`[*] Seeding initial database collection documents`);
    mongoose.connection.db.dropCollection('groceryItems');
    mongoose.connection.db.dropCollection('autoCounters');
    require('./seeders/groceryItems');
    console.log(`[*] Initial database collection documents seeded`);
  });
}

export default DBInitialize;

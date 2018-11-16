/* eslint-disable no-console */
/* eslint-disable global-require */
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import groceryItemsSeeder from './seeders/groceryItems';

dotenv.config();
const { MONGODB_URI } = process.env;

const DBInitialize = () => {
  mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, () => {
    console.log('Mongoose connected to mongo database');
    console.log('[*] Seeding initial database collection documents');

    try {
      mongoose.connection.db.dropCollection('groceryItems');
      mongoose.connection.db.dropCollection('autoCounters');
    } catch (error) {
      console.log('[*] Mongoose skipping dropping non existing collections');
    }

    groceryItemsSeeder();
    console.log('[*] Initial database collection documents seeded');
  });
};

export default DBInitialize;

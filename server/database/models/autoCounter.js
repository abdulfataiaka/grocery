/* eslint-disable no-param-reassign */
import mongoose from 'mongoose';

const { Schema } = mongoose;
const autoCounterSchema = new Schema({
  _id: String,
  lastId: Number,
}, { _id: false });

const AutoCounter = mongoose.model(
  'AutoCounter',
  autoCounterSchema,
  'autoCounters',
);


/**
 *
 *
 * @description Get last added id for collection
 *
 * @memberof GroceryItem
 */
export const getLastId = (collection, callback) => {
  AutoCounter.findOne({ _id: collection }, (error, doc) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (!doc) {
      const docObj = new AutoCounter({ _id: collection, lastId: 0 });
      docObj.save(() => {
        callback(null, docObj.lastId);
      });
      return;
    }

    callback(null, doc.lastId);
  });
};


/**
 *
 *
 * @description update last added id for collection
 *
 * @memberof GroceryItem
 */
export const setLastId = (collection, lastId, callback) => {
  AutoCounter.findOne({ _id: collection }, (error, doc) => {
    if (error) {
      callback(error);
      return;
    }

    if (!doc) {
      callback({
        message: 'Collection does not exist',
      }); return;
    }

    doc.lastId = lastId;
    doc.save();
    callback(null);
  });
};

export default AutoCounter;

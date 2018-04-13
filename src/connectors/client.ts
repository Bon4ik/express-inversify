import { Db, ObjectID } from 'mongodb';
import { provide } from '../helpers/ioc';
import TYPES from '../constants/types';
import { MongoDBConnection } from './connection';

@provide(TYPES.MongoDBClient)
export class MongoDBClient {
  public db: Db;

  constructor() {
    MongoDBConnection.getConnection((connection) => {
      this.db = connection;
    });
  }

  public find(collection: string, filter: Object, result: (error, data) => void): void {
    this.db.collection(collection).find(filter).toArray((error, find) => {
      return result(error, find);
    });
  }

  public findOneById(collection: string, objectId: string, result: (error, data) => void): void {
    this.db.collection(collection).find({ _id: new ObjectID(objectId) }).limit(1).toArray((error, find) => {
      return result(error, find[0]);
    });
  }

  public insert(collection: string, model: Object, result: (error, data) => void): void {
    this.db.collection(collection).insertOne(model, (error, insert) => {
      return result(error, insert.ops[0]);
    });
  }

  public update(collection: string, objectId: string, model: Object, result: (error, data) => void): void {
    this.db.collection(collection).updateOne(
      { _id: new ObjectID(objectId) },
      { $set: model },
      (error, update) => result(error, model)
    );
  }

  public remove(collection: string, objectId: string, result: (error, data) => void): void {
    this.db.collection(collection).deleteOne({ _id: new ObjectID(objectId) }, (error, remove) => {
      return result(error, remove);
    });
  }
}

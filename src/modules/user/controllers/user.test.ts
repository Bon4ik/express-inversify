// import 'reflect-metadata';
// import { UserController } from './user';
// import { Container } from 'inversify';
// import { UserService } from '../services';
// import { User } from '../models';

// let userController: UserController;

// class MongoDBClientMock {
//   public db;

//   public find(collection, filter, result: (error, data) => void) {
//     return result(null, [
//       new User('lorem@ipsum.com', 'Lorem'),
//       new User('doloe@sit.com', 'Dolor'),
//     ]);
//   }

//   public findOneById(collection, objectId, result: (error, data) => void) {
//     return result(null, new User('lorem@ipsum.com', 'Lorem'));
//   }

//   public insert(collection, model, result: (error, data) => void) {
//     return result(null, new User('test@test.com', 'test'));
//   }

//   public update(collection, objectId, model, result: (error, data) => void) {
//     return result(null, new User('changed@changed.com', 'Lorem'));
//   }

//   public remove(collection, objectId, result: (error, data) => void) {
//     return result(null, 'Lorem');
//   }
// }

// beforeEach(() => {
//   let testContainer = new Container();

//   testContainer.bind(UserController).to(UserService);

//   userController = testContainer.get(UserController);
// });

// describe('UserController', () => {
//   it('getUsers', () => {
//     userController.getUsers().then((data) => {
//       expect(data).toEqual([{
//         email: 'lorem@ipsum.com',
//         name: 'Lorem'
//       }, {
//           email: 'doloe@sit.com',
//           name: 'Dolor'
//         }]);
//     });
//   });
// });

function sum(a: number, b: number): number {
  return a + b;
}

describe('sum', () => {
  it('#sum', () => {
    const s = sum(1, 2);

    expect(s).toEqual(3);
  });
});

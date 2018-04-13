import 'reflect-metadata';
import { Container } from 'inversify';
import { UserService } from '../services';
import COMMON_TYPES from '../../../constants/types';
import { MongoDBClient } from '../../../connectors/client';

let testContainer: Container;
let userService: UserService;

beforeAll(() => {
  testContainer = new Container();

  testContainer.bind(UserService).toSelf().inSingletonScope();
  testContainer.bind(MongoDBClient).toSelf().inSingletonScope();

  userService = testContainer.get(UserService);
});

describe('UserService', () => {
  it('getUsers should return list of all users', () => {
    userService.getUsers().then(r => {
      expect(r.length).toBe(2);
    });
  });
});

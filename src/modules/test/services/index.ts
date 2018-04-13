import { provide, inject } from '../../../helpers/ioc';
import TYPES from '../constants/types';
import USER_TYPES from '../../user/constants/types';
import COMMON_TYPES from '../../../constants/types';
import { MongoDBClient } from '../../../connectors/client';
import { UserService } from '../../user/services';
import { Test } from '../models';

@provide(TYPES.TestService)
export class TestService {
  private mongoClient: MongoDBClient;
  private userService: UserService;

  constructor(
    @inject(COMMON_TYPES.MongoDBClient) mongoClient: MongoDBClient,
    @inject(USER_TYPES.UserService) userService: UserService
  ) {
    this.mongoClient = mongoClient;
    this.userService = userService;
  }

  public getTestData(): Promise<any> {
    const tests = new Promise<Test>((resolve, reject) => {
      this.mongoClient.find('test', {}, (err, data: Test[]) => {
        resolve(data);
      });
    });

    const users = this.userService.getUsers();

    return Promise.all([tests, users]);
  }

  public addTest(test: Test): Promise<Test> {
    return new Promise<Test>((resolve, reject) => {
      return this.mongoClient.insert('test', test, (error, data: Test) => {
        resolve(data);
      });
    });
  }
}

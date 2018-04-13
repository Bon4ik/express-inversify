import { controller, httpGet, httpPost } from 'inversify-express-utils';
import { inject } from 'inversify';
import TYPES from '../constants/types';
import { Request } from 'express';
import { Test } from '../models';
import { TestService } from '../services';

@controller('/test')
export class TestController {

  constructor(
    @inject(TYPES.TestService) private testService: TestService,
  ) {}

  @httpGet('/')
  public getTest(): Promise<any> {
    return this.testService.getTestData();
  }

  @httpPost('/')
  public addTest(request: Request): Promise<Test> {
    return this.testService.addTest(request.body);
  }
}

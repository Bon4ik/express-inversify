import { provide } from '../../../helpers/ioc';
import TYPES from '../constants/types';

interface ITest {
  testField1: string;
  testField2: string;
  testField3: string;
}

@provide(TYPES.TestController)
export class Test implements ITest {
  constructor(
    private testField1: string,
    private testField2: string,
    private testField3: string,
  ) {}
}

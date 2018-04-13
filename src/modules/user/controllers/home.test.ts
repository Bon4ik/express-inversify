import 'reflect-metadata';
import { HomeController } from './home';
import { Container } from 'inversify';

let service: HomeController;

beforeAll(() => {
  const testContainer = new Container();
  testContainer.bind(HomeController).toSelf();
  service = testContainer.get(HomeController);
});

describe('HomeController', () => {
  it('should give back `Home sweet home`', () => {
    expect(service.get()).toBe('Home sweet home');
  });
});

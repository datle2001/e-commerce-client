import { testLoginInfo } from '../shared/test/data';
import { LoginInfo } from "./loginInfo"

describe('LoginInfo', () => {
  it('isReadyToSubmit should return false when email is missing', () => {
    const loginInfo: LoginInfo = new LoginInfo('', testLoginInfo.password);

    expect(loginInfo.isReadyToSubmit()).toBeFalse();
  })

  it('isReadyToSubmit should return false when password is missing', () => {
    const loginInfo: LoginInfo = new LoginInfo(testLoginInfo.email, '');

    expect(loginInfo.isReadyToSubmit()).toBeFalse();
  });

  it('isReadyToSubmit should return true when email and password exist', () => {
    const loginInfo: LoginInfo = new LoginInfo(testLoginInfo.email, testLoginInfo.password);

    expect(loginInfo.isReadyToSubmit()).toBeTrue();
  });
})
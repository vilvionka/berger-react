import { reducerRegister } from '../register/reducer';
import { SET_AUTH_CHECKED, SET_USER } from './action';



describe('Redux store reducer', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(
        { result: 'ok' }
      ),
      ok: true,
    })
  });
  afterEach(() => {
    jest.resetAllMocks();
  })

  test('reduser test register', () => {
    expect(reducerRegister(undefined, {})).toEqual(
      {
        user: null,
        isAuthChecked: false,
      }
    )
  })

  test('reduser test register', () => {
    
    expect(reducerRegister(undefined, {type: SET_AUTH_CHECKED, payload: true})).toEqual(
      {
        user: null,
        isAuthChecked: true,
      }
    )
  })

  test('reduser test register', () => {
    let user = {name: 'Alex', email: '1234@Test.ru'}
    expect(reducerRegister(undefined, {type: SET_USER, payload: user})).toEqual(
      {
        user: user,
        isAuthChecked: false,
      }
    )
  })

})
import { orderReducer } from '../order/reducer';
import { ADD_LOADING_ORDER, LOADING_ORDER, ERROR_ORDER } from './action';



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

  test('reduser test order', () => {
    expect(orderReducer(undefined, {})).toEqual(
      {
        order: null,
        loading: false,
        error: null,
      }
    )
  })

  test('reduser test order error', () => {
    let error = 'error'
    expect(orderReducer(undefined, { type: ERROR_ORDER, payload: error })).toEqual(
      {
        order: null,
        loading: false,
        error: error,
      }
    )
  })

  test('reduser test order error', () => {
    let order = 'заказ'
    expect(orderReducer(undefined, { type: ADD_LOADING_ORDER, payload: order })).toEqual(
      {
        order: order,
        loading: false,
        error: null,
      }
    )
  })

})
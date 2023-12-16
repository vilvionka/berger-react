import { wsReducer } from '../websocket/reducer';
import {WebsocketStatus} from '../type/index';
import { connecting, open, close, error, message } from './action';



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

  test('reduser test websocket', () => {
    expect(wsReducer(undefined, {})).toEqual(
      {
        status: WebsocketStatus.OFFLINE,
        orders: null,
        webSocketError: '',
      }
    )
  })

  test('reduser test websocket', () => {
    expect(wsReducer(undefined, {type: connecting })).toEqual(
      {
        status: WebsocketStatus.CONNECTING,
        orders: null,
        webSocketError: '',
      }
    )
  })

  test('reduser test websocket', () => {
    expect(wsReducer(undefined, {type:open})).toEqual(
      {
        status: WebsocketStatus.ONLINE,
        orders: null,
        webSocketError: '',
      }
    )
  })

  test('reduser test websocket', () => {
    expect(wsReducer(undefined, {type:close})).toEqual(
      {
        status: WebsocketStatus.OFFLINE,
        orders: null,
        webSocketError: '',
      }
    )
  })


  test('reduser test websocket', () => {
    let test = 'ошибка';
    expect(wsReducer(undefined, {type: error, payload: test})).toEqual(
      {
        status: WebsocketStatus.OFFLINE,
        orders: null,
        webSocketError: test,
      }
    )
  })

  test('reduser test websocket', () => {
    let test = {add: 'test'};
    expect(wsReducer(undefined, {type: message, payload: test})).toEqual(
      {
        status: WebsocketStatus.OFFLINE,
        orders: test,
        webSocketError: '',
      }
    )
  })

})
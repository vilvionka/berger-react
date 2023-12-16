import { ingredientsReducer } from '../ingredients/reducer';
import { ADD_LOADING, LOADING, ERROR } from './action';



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

  test('reduser test ingredient', () => {

    expect(ingredientsReducer(undefined, {})).toEqual(
      {
        ingredient: [],
        loading: false,
        error: null,
      }
    )
  })

  test('reduser test ingredient error', () => {

    let error = 'error'
    expect(ingredientsReducer(undefined, {type: ERROR, payload: error})).toEqual(
      {
        ingredient: [],
        loading: false,
        error: error,
      }
    )
  })

  test('reduser test ingredient add', () => {

    let Arr =
    {
      _id: "643d69a5c3f7b9001cfa0943",
      name: "Соус фирменный Space Sauce",
      type: "bun",
      proteins: 50,
      fat: 22,
      carbohydrates: 11,
      calories: 14,
      price: 80,
      image: "https://code.s3.yandex.net/react/code/sauce-04.png",
      image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
      __v: 0,
    }
    expect(ingredientsReducer(undefined, {type: ADD_LOADING, payload: Arr})).toEqual(
      {
        ingredient: Arr,
        loading: false,
        error: null,
      }
    )
  })

})
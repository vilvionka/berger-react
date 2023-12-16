import { BurgerConstructorReducer } from '../burgerConstructor/reducer';
import { ADD_INGREDIENT, DELETE_INGREDIENT, UPDATE_INGREDIENT, CLEAR } from './action';



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

  test('reduser test burgerReducer', () => {
    expect(BurgerConstructorReducer(undefined, {})).toEqual(
      {
        bun: null,
        burgerConstructor: [],
      }
    )
  })

  test('reducer test burger', () => {
    let Arr =
    {
      _id: "643d69a5c3f7b9001cfa0943",
      name: "Соус фирменный Space Sauce",
      type: "sauce",
      proteins: 50,
      fat: 22,
      carbohydrates: 11,
      calories: 14,
      price: 80,
      image: "https://code.s3.yandex.net/react/code/sauce-04.png",
      image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
      __v: 0,
      key: "7af3e32c-9e0c-407f-a14a-b36fc4ef679d"
    }

    expect(BurgerConstructorReducer(undefined, { type: ADD_INGREDIENT, payload: Arr })).toEqual(
      {
        bun: null,
        burgerConstructor: [Arr],
      }
    )
  })

  test('reducer test bun', () => {
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
      key: "7af3e32c-9e0c-407f-a14a-b36fc4ef679d"
    }

    expect(BurgerConstructorReducer(undefined, { type: ADD_INGREDIENT, payload: Arr })).toEqual(
      {
        bun: Arr,
        burgerConstructor: [],
      }
    )
  })


  test('reducer test delete', () => {
    let Arr =
    {
      _id: "643d69a5c3f7b9001cfa0943",
      name: "Соус фирменный Space Sauce",
      type: "sause",
      proteins: 50,
      fat: 22,
      carbohydrates: 11,
      calories: 14,
      price: 80,
      image: "https://code.s3.yandex.net/react/code/sauce-04.png",
      image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
      __v: 0,
      key: "7af3e32c-9e0c-407f-a14a-b36fc4ef679d"
    }


    expect(BurgerConstructorReducer(undefined, { type: DELETE_INGREDIENT, payload: Arr.key })).toEqual(
      {
        bun: null,
        burgerConstructor: [],
      }
    )
  })



})
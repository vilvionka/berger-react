import styles from './BurgerIngredients.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';


function BurgerIngredients({ data }) {
  return (
    <div className={styles.box}>
      <div className={styles.box_burger}>
        <div className={styles.box_constructor_bun}>
          <ConstructorElement
            key={data[0]._id}
            type={'top'}
            isLocked={true}
            text={data[0].name}
            price={data[0].price}
            thumbnail={data[0].image}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} className={`${styles.box_constructor} custom-scroll`}>
          {data.map(el =>
            el.type !== "bun" &&
            <div className={styles.block} key={el._id}>
              <div className={"mr-2"} >
                <DragIcon type="primary"/>
              </div>
              <ConstructorElement
                text={el.name}
                price={el.price}
                thumbnail={el.image}
              />
            </div>
          )}
        </div>
        <div className={styles.box_constructor_bun}>
          <ConstructorElement
            key={data[0]._id}
            type={'bottom'}
            isLocked={true}
            text={data[0].name}
            price={data[0].price}
            thumbnail={data[0].image}
          />
        </div>
      </div>
      <div className={`${styles.price} mt-10`}>
        <div className={`${styles.price_box} mr-10`}>
          <p className={'text text_type_digits-medium mr-2'}>610</p>
          <CurrencyIcon type="primary" />
        </div>
        <div className={styles.price_buuton}>
          <Button htmlType="button" type="primary" size="medium">
            Оформить заказ
          </Button>
        </div>
      </div>
    </div>

  )
}


export default BurgerIngredients;
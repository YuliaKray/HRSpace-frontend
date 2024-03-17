import { Tooltips } from "../Components/Tooltips/Tooltips"; //Компонент начальных зеленых карточек 
import "../Components/Form.scss"

type Payment = {
    numberOfPayment: number;
    paymentFormat: Array<string>
    // startDate: Array<number>;
}

type PaymentFormProps = Payment & {
    updateFields: (fields: Partial<Payment>) => void;
} & { currentStepIndex: number }


export function PaymentForm({ numberOfPayment, paymentFormat, updateFields, currentStepIndex }: PaymentFormProps) {

    return (
        <>
            <h2 className="form__title">Шаг 5. Оплата</h2>

            {/* тут будут три карточки */}
            <Tooltips currentStepIndex={currentStepIndex} />
            {/* {console.log(currentStepIndex)} */}
            <ul className='form__wrapper form__wrapper_last-step'>

                <li className="form__box">
                    <label htmlFor="numberOfPayment" className="form__subtitle">Вознаграждение за сотрудника, ₽ <span className="form__required">*</span></label>
                    <input
                        className="form__input-text form__input-text_small"
                        type="numder"
                        id="numberOfPayment"
                        name="numberOfPayment"
                        onChange={(e) => updateFields({ numberOfPayment: parseInt(e.target.value) })}
                        value={numberOfPayment}
                        required
                    />
                </li>

                <li>
                <p className='form__subtitle'>Тип оплаты <span className="form__required">*</span></p>
                    <fieldset className="form__fieldset-payment">
                    <div className="form__payment-wrapper">
                        <label htmlFor="prepayment" className='form__payment-text form__payment-label'>Выбрать</label>
                        <input type="radio" name="paymentFormat" id="prepayment" value="prepayment" className='form__radio form__payment-radio' />
                        <h3 className="form__payment-title">100%</h3>
                        <p className="form__payment-text form__payment-text_span">Когда</p>
                        <p className="form__payment-text">оплачиваете рекрутеру 100% в день выхода сотрудника</p>
                        <p className="form__payment-text form__payment-text_span">Гарантийный период</p>
                        <p className="form__payment-text">нет</p>
                        <p className="form__payment-text form__payment-text_span">Размер вознаграждения</p>
                        <p className="form__payment-text ">Не менее 30 000 ₽</p>
                    </div>
                    <div className="form__payment-wrapper">
                        <label htmlFor="higher" className='form__payment-text form__payment-label'>Выбрать</label>
                        <input type="radio" name="paymentFormat" id="higher" value="higher" className='form__radio form__payment-radio' />
                        <h3 className="form__payment-title">50% + 50%</h3>
                        <p className="form__payment-text form__payment-text_span">Когда</p>
                        <p className="form__payment-text">50% за выход и 50% по окончанию гарантийного периода</p>
                        <p className="form__payment-text form__payment-text_span">Гарантийный период</p>
                        <p className="form__payment-text">есть,1 месяц</p>
                        <p className="form__payment-text form__payment-text_span">Размер вознаграждения</p>
                        <p className="form__payment-text ">Не менее 50 000 ₽</p>

                    </div>

                    <div className="form__payment-wrapper">
                        <label htmlFor="postpayment" className='form__payment-text form__payment-label'>Выбрать</label>
                        <input type="radio" name="paymentFormat"  id="postpayment" value="postpayment" className='form__radio form__payment-radio' />
                        <h3 className="form__payment-title">100%</h3>
                        <p className="form__payment-text form__payment-text_span">Когда</p>
                        <p className="form__payment-text">оплачиваете рекрутеру 100% по окончанию гарантийного периода</p>
                        <p className="form__payment-text form__payment-text_span">Гарантийный период</p>
                        <p className="form__payment-text">есть,1 месяц</p>
                        <p className="form__payment-text form__payment-text_span">Размер вознаграждения</p>
                        <p className="form__payment-text ">Не менее 70 000 ₽</p>

                    </div>
                </fieldset>

                </li>

            </ul>

        </>
    )
}
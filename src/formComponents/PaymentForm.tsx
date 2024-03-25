import { Tooltips } from "../Components/Tooltips/Tooltips"; //Компонент начальных зеленых карточек 
import "../Components/Form.scss"

type Payment = {
    numberOfPayment: number;
    paymentFormat: string;
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
            <ul className='form__wrapper form__wrapper_last-step'>

                <li className="form__box">
                    <label htmlFor="numberOfPayment" className="form__subtitle">Вознаграждение за сотрудника, ₽ <span className="form__required">*</span></label>
                    <input
                        className="form__input-text form__input-text_small"
                        type="number"
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
                        <label htmlFor="100%_first_day" className='form__payment-text form__payment-label'>Выбрать</label>
                        <input type="radio" onChange={e => updateFields({paymentFormat: e.target.value })} checked={paymentFormat === '100%_first_day'} name="paymentFormat" id="100%_first_day" value="100%_first_day" className='form__radio form__payment-radio' />
                        <h3 className="form__payment-title">В день выхода сотрудника</h3>
                        <p className="form__payment-text form__payment-text_span">Размер вознаграждения</p>
                        <p className="form__payment-text">Не менее 30 000 ₽</p>
                        <p className="form__payment-text form__payment-text_span">Гарантийный период</p>
                        <p className="form__payment-text">Отсутствует</p>
                        <p className="form__payment-text form__payment-text_span">Когда</p>
                        <p className="form__payment-text ">Оплата всей суммы вознаграждения рекрутеру производится в день выхода сотрудника</p>
                    </div>
                    <div className="form__payment-wrapper">
                        <label htmlFor="50%_first_day_50%_warranty_period_expiration" className='form__payment-text form__payment-label'>Выбрать</label>
                        <input type="radio" onChange={e => updateFields({paymentFormat: e.target.value })} checked={paymentFormat === '50%_first_day_50%_warranty_period_expiration'} name="paymentFormat" id="50%_first_day_50%_warranty_period_expiration" value="50%_first_day_50%_warranty_period_expiration" className='form__radio form__payment-radio' />
                        <h3 className="form__payment-title">50% + 50%</h3>
                        <p className="form__payment-text form__payment-text_span">Размер вознаграждения</p>
                        <p className="form__payment-text">Не менее 50 000 ₽</p>
                        <p className="form__payment-text form__payment-text_span">Гарантийный период</p>
                        <p className="form__payment-text">Есть (1 месяц)</p>
                        <p className="form__payment-text form__payment-text_span">Когда</p>
                        <p className="form__payment-text ">50% оплаты производится в день выхода сотрудника, остальные 50% оплачиваются после
                        окончания гарантийного периода. Если сотрудник не проходит гарантийный период, то 50% от 
                        суммы вознаграждения останутся на вашем счёте</p>

                    </div>

                    <div className="form__payment-wrapper">
                        <label htmlFor="100%_warranty_period_expiration" className='form__payment-text form__payment-label'>Выбрать</label>
                        <input type="radio" onChange={e => updateFields({paymentFormat: e.target.value })} checked={paymentFormat === '100%_warranty_period_expiration'} name="paymentFormat"  id="100%_warranty_period_expiration" value="100%_warranty_period_expiration" className='form__radio form__payment-radio' />
                        <h3 className="form__payment-title">После гарантийного периода</h3>
                        <p className="form__payment-text form__payment-text_span">Размер вознаграждения</p>
                        <p className="form__payment-text ">Не менее 70 000 ₽</p>
                        <p className="form__payment-text form__payment-text_span">Гарантийный период</p>
                        <p className="form__payment-text">Есть (1 месяц)</p>
                        <p className="form__payment-text form__payment-text_span">Когда</p>
                        <p className="form__payment-text">Оплата всей суммы вознаграждения рекрутеру производится по 
                        окончанию гарантийного периода. Если сотрудник не проходит гарантийный период, 
                        то 100% суммы сохраняется, а заявка возвращается в «Активные»</p>
                    </div>
                </fieldset>

                </li>

            </ul>

        </>
    )
}
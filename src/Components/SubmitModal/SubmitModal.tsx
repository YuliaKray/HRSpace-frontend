import './submitModal.scss';
// import warningIcon from '../../images/akar-icons_triangle-alert.svg'
export function SubmitModal({submitForm, closeModal}: {submitForm: () => void, closeModal: () => void }) {
    return (
    <div className='submitModal__content'>
        <h2 className="submitModal__title"> Публикация заявки</h2>
        <div className='submitModal__text-container'>
            <div>
                <p className='submitModal__paragraph'>Важно! После публикации редактирование будет недоступно</p>
            </div>
            <p className='submitModal__paragraph'>Заявка будет отправлена на модерацию и сохранена в разделе «Неопубликованные»</p>
            <p className='submitModal__paragraph'>Ваша заявка появится на сайте после пополнения счета на сумму, достаточную для оплаты услуги</p>
        </div>
        <div className='submitModal__button-container'>
            <button className='submitModal__button' onClick={submitForm}>Да, опубликовать заявку</button>
            <button className='submitModal__button' onClick={closeModal}>Вернуться к редактированию</button>
        </div>
    </div>

    )
}
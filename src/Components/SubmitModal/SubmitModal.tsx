import './submitModal.scss';

export function SubmitModal(){
    return (
        <div className="submitModal__container">
            <div className='submitModal__content'></div>
            <h2 className="submitModal__title"> Публикация заявки</h2>
            <div className='submitModal__text-container'>
                <p>Важно! После публикации редактирование будет недоступно</p>
                <p>Заявка будет отправлена на модерацию и сохранена в разделе «Неопубликованные»</p>
                <p>Ваша заявка появится на сайте после пополнения счета на сумму, достаточную для оплаты услуги</p>
            </div>

            
        </div>
    )
}
import './Login.scss';

import { useState } from "react";

type api_login = {
    email: string;
    password: string
}

type Props = {
    handleLogin: ({ email, password }: api_login) => Promise<void>
}


export function Login({ handleLogin }: Props): JSX.Element {
    const [values, setValues] = useState<api_login>({ email: '', password: ''});


    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        console.log(values);
        handleLogin(values)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setValues({...values, [name]: value});
      };


    return (
        <section className='login'>
            <form onSubmit={handleSubmit} className='login__form'>
                <h1 className='login__title'>Поиск сотрудников</h1>
                <input className='login__input'
                name='email' 
                type="email" 
                pattern="^\S+@\S+\.\S+$" 
                required 
                value={values.email}
                onChange={e => handleChange(e)}
                placeholder='Электронная почта'
                />
                <input className='login__input'
                name='password' 
                type="password" 
                required
                value={values.password}
                onChange={e => handleChange(e)}
                placeholder='Пароль' />
                <div className='login__wrapper'>
                    <div className='login__checkbox-wrapper'>
                    <input type='checkbox' id='login' className='login__checkbox'/>
                    <label htmlFor='login'className='login__label'>Запомнить</label>
                    </div>
                    <a href='#' className='login__link'>Получить пароль</a>
                </div>
                <button type="submit" className='login__btn-submit'>Войти в личный кабинет</button>
                <button type="submit" className='login__btn-submit login__btn-submit_tink' disabled>Tinkoff</button>
                <a href='#' className='login__register'>Регистрация для поиска сотрудников</a>
            </form>
        </section>
    )
}
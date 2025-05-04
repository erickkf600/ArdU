import  logo  from './../../assets/white-logo.png'
import { useForm } from "react-hook-form"
import * as actions from './login.action'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginInterface } from '../../interfaces/login'
import schema from './index.validation'

function Login() {

    const {register, handleSubmit, errors } = useForm<LoginInterface>({
        resolver: yupResolver(schema)
    });


    return(
        <div className="login">
            <img src={logo} alt="logo ArdU" className="login__logo"/>
            <div className="login__card">
                <p className="login__card-welcome">Bem vindo ao ArdU!</p>
                <form className="login__card-form">
                    <div className={`login__card-input-control ${errors.email ? 'login__card-input-control--error':''}`}>
                        <input name="email" type="email" placeholder="Seu email" ref={register}/>
                        <b className="login__card-input-control-error-msg">{errors.email?.message}</b>
                    </div>
                    <div className={`login__card-input-control ${errors.password ? 'login__card-input-control--error':''}`}>
                        <input name="password" type="password"  placeholder="Senha" ref={register}/>
                        <b className="login__card-input-control-error-msg">{errors.password?.message}</b>
                    </div>

                    <button type="button" className="login__card-login-button" onClick={handleSubmit(actions.login)}>Já sou cadastrado</button>
                    <button type="button" className="login__card-login-button outline" onClick={handleSubmit(actions.regiterUser)}>Ainda não sou cadastrado</button>
                </form>

            </div>
        </div>
    )
}

export default Login
import AppConfig from './../../App.config'
import { showMsg } from './../../shared/alerts'
import { history } from './../../router-config/history'

export const login = async (user: any) =>{
    await AppConfig.post('login', user)
    .then((response) =>{
        if(response.data.token){
           let id = response.data.token.slice(-1)
           AppConfig.get(`users/${id}`)
           .then((user) =>{
               localStorage.setItem('user', JSON.stringify(user.data.data));
               localStorage.setItem('token', response.data.token);
                history.push('/home')
                window.location.reload()
           })
           .catch((err) => {
                console.log('Ocorreu um erro', err)
                showMsg('error', 'Erro', 'Usuário não encontrado!', 'Ok')
            })
            
        }
    })
    .catch((err) => {
        console.log('Ocorreu um erro', err)
        showMsg('error', 'Erro', 'Usuário não encontrado!', 'Ok')
    })
}

export const regiterUser = async (user: any, e: any) =>{
    await AppConfig.post('register', user)
    .then((response) =>{
        if(response){
            showMsg('success', 'Sucesso', 'Usuário cadastrado com sucesso, favor insira sua senha novamente', 'Ok')
        }
    })
    .catch((err) => {
        console.log('Ocorreu um erro', err)
        showMsg('error', 'Erro', 'Ocorreu um erro ao registrar!', 'Ok')
    }) 
} 
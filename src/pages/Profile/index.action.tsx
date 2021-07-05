import AppConfig from './../../App.config'
import { showMsg, loading } from './../../shared/alerts'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const logOut = () =>{
    MySwal.fire({
        title: "Tem certeza que deseja fazer logout?",
        icon: "warning",
        confirmButtonText: 'Sim',
        cancelButtonText: 'Cancelar',
        showCancelButton: true,
        customClass: {
          container: 'alert-swal',
          confirmButton: 'confirmBtn',
          cancelButton: 'cancelBtn',
        }
      }).then(result => {
        if (result.value) {
            localStorage.clear()
            window.location.reload()
        }
      })
}

export const editiUser = async (user: any) =>{
    await AppConfig.put(`users/${user.id}`, user)
    .then((response) =>{
        loading('Atualizando...')
        if(response.data){
            showMsg('success', 'Sucesso', 'Usuário alterado com sucesso', 'Ok')
        }
    })
}
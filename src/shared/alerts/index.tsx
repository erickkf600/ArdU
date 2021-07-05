
import Swal,  { SweetAlertIcon } from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const showMsg = (type: SweetAlertIcon, title: string, text: string, confirmButtonText: string) => {
    MySwal.fire({
        title: title,
        text: text,
        icon: type,
        confirmButtonText: confirmButtonText,
        customClass: {
            container: 'alert-swal',
            confirmButton: 'confirmBtn',
          }
    })
}

export const loading = (texto: string) => {
    MySwal.fire({
    title: texto,
    allowOutsideClick: false
  });
  MySwal.showLoading();
}

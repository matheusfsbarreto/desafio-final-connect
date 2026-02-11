import s from "./infoCard.module.scss"
import Swal from 'sweetalert2'

export const InfoCard = (props) => {
  const mostrarAlert = () => {
    const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});
Toast.fire({
  icon: "success",
  title: "Inscrito com Sucesso!"
});
  }

  return (
    <article className={s.article}>
        <img src={props.img} alt={props.alt} />
        <h2>{props.subtitulo}</h2>
        <p>{props.p1}</p>
        <p>{props.p2}</p>
        <button onClick={mostrarAlert}>{props.textoBotao}</button>
    </article>
  )
}

export default InfoCard

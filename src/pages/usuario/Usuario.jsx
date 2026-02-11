import s from "./usuario.module.scss"
import { MdOutlinePlace } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";

const Usuario = () => {
  return (
    <main className={s.main}>
      <section>
        <img src="https://avatars.githubusercontent.com/u/109607468?v=4" alt="Imagem de Perfil do Usuário" />
        <div className={s.div}>
          <h1>Matheus Barreto</h1>
          <h2>Voluntário Ativo</h2>
          <p>Apaixonado por fazer a diferença na comunidade. Acredito que pequenas ações podem transformar vidas e estou sempre em busca de novas oportunidades para ajudar.</p>

          <ul>
            <li><MdOutlinePlace /> Aracaju, SE</li>
            <li><CiMail /> matheus@gmail.com</li>
            <li><CiCalendar /> Membro desde 2025</li>
          </ul>

          <ul>
            <li className={s.cardsArea}>Educação</li>
            <li className={s.cardsArea}>Meio Ambiente</li>
            <li className={s.cardsArea}>Assistência Social</li>
            <li className={s.cardsArea}>Design</li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default Usuario

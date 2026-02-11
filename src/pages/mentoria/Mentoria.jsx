import s from "../Style.module.scss"
import InfoCard from "../../components/infoCard/InfoCard"
import mentoria from "../../assets/imagens/mentoria.png"
import compExp from "../../assets/imagens/compExp.png"
import acompanhamento from "../../assets/imagens/acompanhamento.png"


const Mentoria = () => {
  return (
    <main className={s.main}>
      <h1>Mentoria</h1>
      <section>
        <article>
          <InfoCard 
            img={mentoria}
            alt = "Reciclagem de garrafas pets"
            subtitulo = "Mentoria de Carreira e Emprego"
            p1 = "Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho."
            textoBotao = "Quero Participar"
        />
        </article>
        <article>
          <InfoCard 
          img = {compExp}
          alt = "Fotografia de um professor dando aula para 3 alunos com computadores"
          subtitulo = "Compartilhe Experiência"
          p1 = "Oriente jovens e profissionais iniciantes em sua área."
          textoBotao = "Quero Participar"
        />
        </article>
        <article>
          <InfoCard
          img = {acompanhamento}
          alt = "Professor dando aula de esporte"
          subtitulo = "Acompanhamento"
          p1 = "Participe como guia em jornadas de aprendizado e desenvolvimento."
          textoBotao = "Quero Participar" 
        /></article>
      </section>
    </main>
  )
}

export default Mentoria

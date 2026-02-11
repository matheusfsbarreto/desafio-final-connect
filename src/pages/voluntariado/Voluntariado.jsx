import s from "../Style.module.scss"
import InfoCard from "../../components/infoCard/infoCard"
import reciclagem from "../../assets/imagens/reciclagem.png"
import aulaTec from "../../assets/imagens/aulaTec.png"
import esporteInc from "../../assets/imagens/esporteInc.png"


const Voluntariado = () => {
  return (
    <main className={s.main}>
      <h1>Voluntariado</h1>
      <section>
        <article>
          <InfoCard 
            img={reciclagem}
            alt = "Reciclagem de garrafas pets"
            subtitulo = "Mutirão de reciclagem"
            p1 = "Coletar materiais recicláveis e orientar sobre descarte consciente."
            textoBotao = "Quero Participar"
        />
        </article>
        <article>
          <InfoCard 
          img = {aulaTec}
          alt = "Fotografia de um professor dando aula para 3 alunos com computadores"
          subtitulo = "Aulas de Tecnologia"
          p1 = "Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital."
          textoBotao = "Quero Participar"
        />
        </article>
        <article>
          <InfoCard
          img = {esporteInc}
          alt = "Professor dando aula de esporte"
          subtitulo = "Esporte e Inclusão"
          p1 = "Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens."
          textoBotao = "Quero Participar" 
        /></article>
      </section>
    </main>
  )
}

export default Voluntariado

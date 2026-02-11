import s from "../Style.module.scss"
import InfoCard from "../../components/infoCard/InfoCard"
import empoderando from "../../assets/imagens/empoderando.png"
import tecTransforma from "../../assets/imagens/tecTransforma.png"
import entrevista from "../../assets/imagens/entrevista.png"


const EventosEP = () => {
  return (
    <main className={s.main}>
      <h1>Eventos & Palestras</h1>
      <section>
        <article>
          <InfoCard 
            img={empoderando}
            alt = "Roda de jovens sentado em carteiras escolares discutindo o futuro."
            subtitulo = "Empoderando Jovens para o Futuro"
            p1 = "Atividade: Palestra motivacional sobre liderança jovem e transformação social."
            p2 ="Impacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades."
            textoBotao = "Quero Participar"
        />
        </article>
        <article>
          <InfoCard 
          img = {tecTransforma}
          alt = "Workshop de tecnologia."
          subtitulo = "Tecnologia que Transforma"
          p1 = "Atividade: Workshop de introdução à programação e inovação digital."
          p2="Impacto: Preparar jovens para o mercado de trabalho através da tecnologia."
          textoBotao = "Quero Participar"
        />
        </article>
        <article>
          <InfoCard
          img = {entrevista}
          alt = "Entrevista de Emprego."
          subtitulo = "Carreira e Primeiro Emprego"
          p1 = "Atividade: Palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado."
          p2 ="Impacto: Ajudar jovens a conquistar oportunidades de trabalho."
          textoBotao = "Quero Participar" 
        /></article>
      </section>
    </main>
  )
}

export default EventosEP


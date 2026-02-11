import s from "../Style.module.scss"
import InfoCard from "../../components/infoCard/InfoCard"
import igFamilia from "../../assets/imagens/igFamilia.png"
import pfEscola from "../../assets/imagens/pfEscola.png"
import conecta from "../../assets/imagens/conecta.png"



const Doacao = () => {
  return (
    <main className={s.main}>
      <h1>Doação</h1>
      <section>
        <article>
          <InfoCard 
            img={igFamilia}
            alt = "Imagem de um funcionário carregando uma cesta básica"
            subtitulo = "Instituto grande familia"
            p1 = "Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade."
            textoBotao = "Quero Doar"
        />
        </article>
        <article>
          <InfoCard 
          img = {pfEscola}
          alt = "Imagem de Livros"
          subtitulo = "Projeto Futuro na Escola"
          p1 = "Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura."
          textoBotao = "Quero Doar"
        />
        </article>
        <article>
          <InfoCard
          img = {conecta}
          alt = "Imagem de um técnico fazendo manutenção em um computador"
          subtitulo = "Instituto Conecta Jovem"
          p1 = "Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital e novas oportunidades."
          textoBotao = "Quero Doar" 
        /></article>
      </section>
    </main>
  )
}

export default Doacao

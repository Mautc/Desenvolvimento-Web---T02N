import React from 'react'
import './App.css'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#estrategias">Estratégias</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
  )
}

const Header = () => {
  return (
    <header>
      <h1>Blog de Tráfego Pago e Conversão</h1>
      <Navigation />
    </header>
  )
}

const Article = ({ titulo, autor, data, conteudo }) => {
  return (
    <article>
      <h2>{titulo}</h2>
      <p><strong>Autor:</strong> {autor}</p>
      <time dateTime="2026-03-04">{data}</time>

      {conteudo.map((paragrafo, index) => (
        <p key={index}>{paragrafo}</p>
      ))}

      <figure>
        <img src="https://via.placeholder.com/600x400" alt="Gráfico de análise de campanhas de anúncios e aumento de visitas na loja física" />
        <figcaption>Resultados de uma campanha geolocalizada para negócios locais.</figcaption>
      </figure>
    </article>
  )
}

const Sidebar = () => {
  return (
    <aside>
      <h3>Posts Relacionados</h3>
      <ul>
        <li><a href="#post1">Como otimizar campanhas no Google Meu Negócio</a></li>
        <li><a href="#post2">Criativos em vídeo: o que converte mais?</a></li>
        <li><a href="#post3">Avaliando o Retorno sobre Investimento (ROI)</a></li>
      </ul>
    </aside>
  )
}

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2026 Blog de Tráfego Pago - Todos os direitos reservados.</p>
    </footer>
  )
}

export default function App() {
  const post = {
    titulo: "Como o Tráfego Pago Traz Clientes para a Empresa Física",
    autor: "Maurilio",
    data: "04 de março de 2026",
    conteudo: [
      "Muitos empresários acreditam que anúncios na internet servem apenas para quem vende em e-commerces. Porém, criar campanhas bem estruturadas no Google ou na Meta é uma das formas mais eficientes de levar público qualificado para dentro da sua loja física.",
      "Ao utilizar o tráfego pago de forma inteligente, segmentando a geolocalização e o interesse do público-alvo, conseguimos garantir que a sua marca seja vista exatamente pelas pessoas da sua cidade que estão prontas para comprar o seu produto ou serviço."
    ]
  }

  return (
    <>
      <Header />
      
      <main>
        <Article 
          titulo={post.titulo} 
          autor={post.autor} 
          data={post.data} 
          conteudo={post.conteudo} 
        />
        <Sidebar />
      </main>

      <Footer />
    </>
  )
}
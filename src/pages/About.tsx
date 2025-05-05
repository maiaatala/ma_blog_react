import { ContactForm } from "../components/ContactForm";
import { DefaultPageLayout } from "../layout/DefaultPageLayout";
import "./About.css";

export const About = () => {
  return (
    <DefaultPageLayout>
      <ContactForm />
      <article className="about-article">
        <h2>Sobre o Projeto</h2>
        <p>
          Este site faz parte de uma tese de graduação cujo objetivo foi avaliar
          o desempenho de diferentes abordagens na construção de aplicações web
          interativas. Para isso, foram desenvolvidas três versões de uma mesma
          aplicação — com funcionalidades equivalentes — utilizando stacks e
          frameworks distintos.
        </p>
        <p>
          A comparação considerou principalmente a performance de carregamento,
          com base em métricas como Time to Interactive (TTI) e Largest
          Contentful Paint (LCP). Os testes foram realizados utilizando
          WebPageTest.
        </p>
      </article>
      <article className="about-article">
        <h2>Sobre a Implementação</h2>
        <p>
          O protótipo inicial foi concebido no Figma, priorizando uma navegação
          fluida e foco em legibilidade de conteúdo. Todas as três versões do
          projeto consumem dados de uma <strong>API REST comum</strong>,
          hospedada e gerenciada via <strong>Railway</strong>, o que garante
          igualdade no backend para os testes comparativos. O front-end desta
          versão foi construído de forma responsiva e com foco em
          acessibilidade, utilizando boas práticas de HTML semântico e CSS
          modularizado.
        </p>
         
        <p>
          A aplicação atual é um <i>Client-side render</i> desenvolvida
          utilizando <strong>React</strong> e <strong>React Dom</strong>, com
          gerenciamento de rotas feito por <strong>React Router</strong>,
          permitindo uma arquitetura modular e com carregamento dinâmico de
          páginas. O deploy foi realizado com foco em ambientes de testes
          controlados, garantindo que todas as instâncias rodassem sob as mesmas
          condições de rede e infraestrutura.
        </p>
      </article>
    </DefaultPageLayout>
  );
};

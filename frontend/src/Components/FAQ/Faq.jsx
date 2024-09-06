import { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import './faq.css';

export default function Faq() {
    const allFaqData = [
        {
            category: "1- INFORMACOES GERAIS SOBRE A BIBLIOTECA DIGITAL",
            questions: [
                {
                    question: "O que é a biblioteca digital?",
                    answer: "A biblioteca digital é um acervo online de livros, artigos científicos, teses, dissertações e outros recursos acadêmicos disponíveis para consulta e download. ",
                },
                {
                    question: "Como posso acessar a biblioteca digital da AAEE?",
                    answer: "Você pode acessar a biblioteca digital através do nosso site oficial, utilizando suas credenciais de login fornecidas pela instituição.",
                },
                {
                    question: "Quais tipos de materiais estão disponíveis na biblioteca digital da AAEE?",
                    answer: "A biblioteca digital da AAEE oferece uma variedade de materiais, incluindo artigos científicos, e-books, Monografias, Projectos de Pesquisa, e outros.",
                },
                {
                    question: "Posso acessar a biblioteca digital fora do campus?",
                    answer: "Sim, o acesso remoto está disponível. Você precisará usar o login institucional para ter acesso aos recursos da plataforma.",
                }
            ]
        },
        {
            category: "2-UTILIZAÇÃO E FUNCIONALIDADES",
            questions: [
                {
                    question: "Como posso ler os conteúdos dos artigos e outros materiais?",
                    answer: "Após encontrar o material desejado, clique no botão “Ver mais” para acessar a página de detalhes e procure o link de leitura online. Alguns recursos podem exigir permissões específicas. ",
                },
                {

                    question: "Como faço para buscar um artigo científico específico?",
                    answer: "Você pode utilizar a barra de pesquisa na página principal da biblioteca digital, inserindo palavras-chave, nomes de autores ou títulos de artigos.",
                },
                {
                    question: "Existe um limite de downloads ou acessos?",
                    answer: "Normalmente, não há limites para acesso, mas alguns recursos específicos podem ter restrições de download dependendo dos acordos de licença da AAEE.",
                },
            
            ]

            },
            {
        
                category: "3-SUBMISSÃO DE TRABALHOS E ARTIGOS CIENTIFICOS",
                questions: [
                {
                        question: "Como posso submeter minha tese ou artigo para o repositório?",
                        answer: "Para submeter seu trabalho, siga as diretrizes de submissão disponíveis na seção de autores do nosso site. Você precisará preencher um formulário e enviar o documento no formato requerido. ",
                    },
                    {
                        question: "Quais são os critérios para aceitação de trabalhos no repositório?",
                        answer: "Os trabalhos são avaliados com base na relevância, originalidade, e contribuição acadêmica. Consulte as diretrizes específicas para mais detalhes. ",
                    }
                ]
            },
            {
            category: "4-SUPORTE TÉCNICO E PROBLEMAS",
            questions: [
                {
                    question: "O que fazer se eu encontrar um erro ou problema técnico?",
                    answer: "Relate problemas técnicos ao suporte da biblioteca digital através do formulário de contato ou e-mail disponível no site. ",
                }
            ]
        },

        {
            category: "5-POLITICAS E PRIVACIDADE",
            questions: [
                {
                    question: "Quais são as políticas de privacidade e proteção de dados?",
                    answer: "Nossas políticas de privacidade garantem a proteção dos seus dados pessoais. Consulte a secção de privacidade no site para detalhes completos. ",
                }
            ]
        },
        // Adicione mais categorias e perguntas conforme necessário
    ];

    const [filteredFaqData, setFilteredFaqData] = useState(allFaqData[0].questions);

    const handleCategoryClick = (categoryIndex) => {
        setFilteredFaqData(allFaqData[categoryIndex].questions);
    };

    return (
        <>
            <Nav />
            <div className="container faq">
                <h3>Perguntas Frequentes (FAQs)</h3>
                <p>Encontre aqui as respostas para as dúvidas mais comuns sobre nossos serviços e funcionalidades.<br></br> Se você não encontrar a resposta para sua pergunta, por favor, entre em contato conosco.</p>
                <div className="text-faq">
                    <div className="categories-list">
                        <h4>Tabela de Categoria</h4>
                        <ul>
                            {allFaqData.map((item, index) => (
                                <li key={index} onClick={() => handleCategoryClick(index)}>
                                    {item.category}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="accordion-faq">
                        <Accordion defaultActiveKey="0">
                            {filteredFaqData.map((item, index) => (
                                <Accordion.Item eventKey={index.toString()} key={index} className="custom-accordion-item">
                                    <Accordion.Header className="custom-accordion-header">{item.question}</Accordion.Header>
                                    <Accordion.Body>{item.answer}</Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

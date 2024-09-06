import Direito from './Direito';
class infodir {
    static info = [
        { 
            titulo: 'Codigo Penal', 
            autor: ' Gilberto Coreia', 
            imagem: Direito.p1,
            descricao: "Direito Civil: Trata das relações jurídicas entre pessoas e entidades privadas, abrangendo temas como contratos, responsabilidade civil, propriedade, família e sucessões.",
            pdfUrl: "/pdfs/cp.pdf"
          },
          { 
            titulo: 'Direito Constitucional', 
            autor: 'David Sousa', 
            imagem: Direito.p2, 
            descricao:"Direito Constitucional: Estuda a organização e funcionamento do Estado, os direitos e garantias fundamentais dos cidadãos, a estrutura do poder público e os princípios fundamentais da Constituição."
          },
          { 
            titulo: 'Direito Administrativo', 
            autor: 'Secretaria do Estado', 
            imagem: Direito.p3,
            descricao:"Direito Administrativo: Regula a atuação da administração pública, incluindo temas como licitações, contratos administrativos, servidores públicos, poder regulamentar e responsabilidade do Estado.",
            pdfUrl: "/pdfs/da.pdf"
          },
          { 
            titulo: 'Direito Tributário', 
            autor: 'Damas Chele', 
            imagem: Direito.p4,
            descricao:"Direito Tributário: Aborda as normas e princípios relacionados à arrecadação e fiscalização dos tributos, incluindo impostos, taxas e contribuições, bem como os direitos e deveres dos contribuintes."
          },
          { 
            titulo: 'Direito Penal', 
            autor: 'Damas Chele', 
            imagem: Direito.p4,
            descricao:"Direito Penal: Sugestão adicional. Trata das normas que definem os crimes e suas penalidades, abrangendo aspectos como ação penal, culpabilidade, medidas de segurança, penas e suas execuções, além de crimes contra a ordem tributária, econômica e financeira."
          }
    ];
}

export default infodir;

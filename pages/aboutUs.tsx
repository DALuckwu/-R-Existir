/* eslint-disable @next/next/no-img-element */
import { Menu } from "@/src/components/Menu"
import styled from "styled-components"

const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 20px 20px 50px;
`;

const AboutUsContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  img{
    max-width: 600px;
    border-radius: 8px;
    border: 1px solid #a7aaac;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
`;

const AboutUsText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 600px;
  gap: 8px;
  background-color: #ffffff;
  border: 1px solid #a7aaac;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  p{
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: #151617;
    padding: 16px;
  }
`

export default function AboutUs(){
    return(
        <AboutUsContainer>
          <Menu 
            titulo="Sobre o (R)Existir"
            label="Home Page"
            url="/"
          />
          <AboutUsContent>
            <AboutUsText>
              <p>O Brasil continua a liderar o ranking dos países que mais matam LGBTIs+. De acordo com levantamento do Grupo Gay da Bahia (GGB), ao menos 256 lésbicas, gays, bissexuais, travestis e transgêneros foram vítimas de morte violenta em 2022. A partir da análise do noticiário, foram apontados 242 homicídios e 14 suicídios ao longo do ano passado, ou seja, uma morte a cada 34 horas.</p>
              <p>Entre as vítimas, 134 (52%) eram gays e 110 (43%) travestis ou transexuais. Como comparação, mesmo com 100 milhões de habitantes a mais em sua população, os Estados Unidos registraram a morte violenta de 32 trans no mesmo período. Mais da metade dos crimes foram cometidos por armas de fogo ou brancas. Também há casos de asfixia, espancamento, apedrejamento, esquartejamento e atropelamento proposital.</p>
              <p>O Nordeste é a região mais perigosa para LGBTI+s, concentrando 111 (43,36%) das mortes violentas. Dentre as dez primeiras cidades com mais casos de mortes violentas de LGBT+ em números absolutos, cinco estão no Nordeste: Salvador, São Luís, Fortaleza, Recife e Arapiraca (AL).</p>
              <p>Tendo em vista o cenário de violência sofrida por essa comunidade, o (R)Existir surge como uma ferramenta para auxiliar essas pessoas na busca por um local seguro, em que sejam acolhidas e possam receber o apoio que precisam.</p>
            </AboutUsText>
            <img src="https://www.cut.org.br/images/cache/systemuploadsnewsb8ebbde3dfbbd065b6c-700x460xfit-a9e0e.jpg" alt="Pessoa de costas com a bandeira LGBT"/>
          </AboutUsContent>
        </AboutUsContainer>
    )
}
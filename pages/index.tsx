/* eslint-disable @next/next/no-img-element */
import {LinkNew} from "../src/components/Link"
import styled from "styled-components";
import { Box } from "@/src/components/Box";
import { Menu } from "@/src/components/Menu";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 20px 20px 50px;
`

const HomeContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  img{
    max-width: 700px;
    max-height: 600px;
    border-radius: 8px;
    border: 1px solid #a7aaac;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
`;

const HomeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function Home() {
  return (
      <HomeContainer>
        <Menu 
          titulo="(R)Existir" 
          label="Sobre nós"
          url="/aboutUs"
        />
        <HomeContent>
          <HomeList>
            {/* <p>Lista de ONGs em Recife</p> */}
            <Box 
              titulo="Centro Municipal de Referência em Cidadania LGBT" 
              about="Organizado pela própria prefeitura do Recife, funciona como uma rede de proteção e garantia de direitos à população LGBT."
              endereco="Rua dos Médicis, N° 86, Boa Vista, Recife"
            />
            <Box 
              titulo="Instituto Boa Vista" 
              about="ONG que criou uma rede solidária de cultura em Pernambuco."
              endereco="Rua das Ninfas, N°84, Soledade, Recife"
            />
            <Box 
              titulo="Movimento LGBT Leões do Norte" 
              about="Fundado em 8 de dezembro de 2001, o Leões do Norte é uma ONG queatua em defesa da livre orientação afetivo-sexual e da promoção da cidadania da população LGBT."
              endereco=""
            />
            <Box 
              titulo="ONG Arco LGBTQIAP+" 
              about="" 
              endereco="Rua Sebastião Mendes Cahú, N°27, Padre Roma, Jaboatão dos Guararapes."
            />
            <Box 
              titulo="AmoTrans" 
              about="Tem com objetivo prioritário promover um seminário para construção do Estatuto de Pessoas Trans." 
              endereco="Rua José de Alencar, Boa Vista, Recife"
            />
            <Box 
              titulo="GPT Posithivo" 
              about="ONG voltada para o acolhimento de pessoas que vivem com HIV na cidade do Recife." 
              endereco="Avenida Manoel Borba, N°545, Boa Vista Recife"
            />
          </HomeList>
          
          <img src="https://images03.brasildefato.com.br/312d453ba5d45b9a59e15a2dd164d11a.jpeg" alt="Bandeira LGBT" />
        </HomeContent>
      </HomeContainer>
  )
}

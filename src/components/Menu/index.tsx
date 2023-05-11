import styled from "styled-components";
import { LinkNew } from "../Link"

interface MenuProps {
    url: string;
    label: string;
    titulo: string;
}

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
const Title = styled.h1`
  color: #8d2727;
  font-size: 48px;
  line-height: auto;
  padding: 32px 0;
`;

export const Menu: React.FC<MenuProps> = ({
    url,
    label,
    titulo
}) => {
    return(
        <MenuContainer>
          <Title>{titulo}</Title>
          <LinkNew label={label} url={url} />
        </MenuContainer>
    )
}
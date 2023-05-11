import Link from "next/link";
import { ReactNode } from "react"
import styled from "styled-components";

const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    background-color: #ffffff;
    border: 1px solid #a7aaac;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    max-width: 500px;
    gap: 8px;
`;

const BoxTitle = styled.h4`
    font-size: 18px;
    font-weight: 500;
    line-height: auto;
    color: #151616;
    padding: 16px 0;
`;

const BoxText = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #151617;
`;

interface BoxProps {
    titulo: string;
    about?: string;
    endereco?: string;
}
export const Box: React.FC<BoxProps> = ({
    titulo,
    about,
    endereco
}) => {
    return(
        <BoxContainer>
            <BoxTitle>{titulo}</BoxTitle>
            <BoxText>{about}</BoxText>
            <span>{endereco}</span>
        </BoxContainer>
    )
}
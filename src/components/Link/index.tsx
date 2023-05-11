import NextLink from "next/link";

interface LinkNewProp{
    url: string;
    label: string;
}

export const LinkNew: React.FC<LinkNewProp> = ({url, label}) => {
    return(
        <NextLink href={url}>
            {label}
        </NextLink>
    )
}
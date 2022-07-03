import { Title, Wrapper, TextBold, Text, Button } from "./style";
import Link from "next/link";

const NotFoundError = () => {
  return (
    <Wrapper>
      <Title>
        Página não encontrada <TextBold>{":("}</TextBold>
      </Title>
      <Text>
        Código - <TextBold>404</TextBold>
      </Text>
      <Link href={"/"}>
        <Button>Voltar para home</Button>
      </Link>
    </Wrapper>
  );
};

export default NotFoundError;

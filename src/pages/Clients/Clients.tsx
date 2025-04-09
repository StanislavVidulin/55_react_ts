import { ClientsWrapper, Title, StyledLink } from "./styles";

function Clients() {
  return (
    <ClientsWrapper>
      <Title>Clients</Title>
      <StyledLink to="amazon">Amazon</StyledLink>
      <StyledLink to="apple">Apple</StyledLink>
      <StyledLink to="microsoft">Microsoft</StyledLink>
    </ClientsWrapper>
  );
}

export default Clients;

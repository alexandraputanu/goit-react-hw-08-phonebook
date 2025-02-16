import { Container, FooterStyles, Icon } from './Footer.styled';

const Footer = () => {
  return (
    <FooterStyles>
      <p>GoIT 2023-2025</p>
      <Container>
        <span>Powered by Alexandra Putanu</span>
        <a
          href="https://github.com/alexandraputanu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link to GitHub"
        >
          <Icon />
        </a>
      </Container>
    </FooterStyles>
  );
};

export default Footer;

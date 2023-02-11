import styled from 'styled-components';

export const Header = () => {
  return (
    <div className='header'>
      <HeaderTitle> Hello Evano 👋🏼,</HeaderTitle>
    </div>
  );
};

const HeaderTitle = styled.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
`;


import styled from 'styled-components';

export const SmallButton = styled.button`
  width: 110px;
  height: 30px;
  border-radius: 25px;
  border-color: transparent;
  background-color: ${p => p.theme.colors.secondary};
  color: ${p => p.theme.colors.white};
  text-align: center;
  font-size: 14px;

  :hover,
  :focus {
    transform: scale(1.05);
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: ${p => p.theme.shadows.primary};
  }
`;

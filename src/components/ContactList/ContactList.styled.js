import styled from 'styled-components';

export const Item = styled.li`
  list-style: none;
  margin-bottom: 12px;

  :hover,
  :focus {
    border-radius: 15px;
    background: rgba(150, 230, 255, 0.65);
    /* border: 1px solid transparent; */
    transform: scale(1.05);
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: ${p => p.theme.shadows.primary};
  }
`;

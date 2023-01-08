import styled from 'styled-components';

export const Input = styled.input`
  outline: transparent;
  border-radius: ${p => p.theme.radii.normal};
  border-color: #fff;
  font-size: 16px;
  box-shadow: ${p => p.theme.shadows.primary};
  width: 250px;
`;

export const Label = styled.label`
  margin-bottom: ${p => p.theme.space[2]};
  font-size: 16px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;
  align-items: center;
  max-width: 370px;
  background: rgba(150, 230, 255, 0.65);
  border-radius: 20px;
  padding-bottom: ${p => p.theme.space[3]};
  padding-top: ${p => p.theme.space[4]};
  /* padding-left: ${p => p.theme.space[4]};
  padding-right: ${p => p.theme.space[4]};  */
  box-shadow: ${p => p.theme.shadows.primary};
  /* margin-bottom: ${p => p.theme.space[6]}; */
`;

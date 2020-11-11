import React from 'react';
import styled from 'styled-components';
import Icon from '../icon.js';

const SvgContainer = styled(Icon)`
  margin-top: 4px;
  color: ${props => props.color};
  width: 16px;
  height: 16px;
`
const SvgCloseLogo = (props) => {
  return (
    <SvgContainer viewBox="0 0 16 16" color={props.color}>
      <path fill="currentcolor" d="M1.5 8a6.5 6.5 0 0110.65-5.003.75.75 0 00.959-1.153 8 8 0 102.592 8.33.75.75 0 10-1.444-.407A6.5 6.5 0 011.5 8zM8 12a1 1 0 100-2 1 1 0 000 2zm0-8a.75.75 0 01.75.75v3.5a.75.75 0 11-1.5 0v-3.5A.75.75 0 018 4zm4.78 4.28l3-3a.75.75 0 00-1.06-1.06l-2.47 2.47-.97-.97a.749.749 0 10-1.06 1.06l1.5 1.5a.75.75 0 001.06 0z"></path>
    </SvgContainer>
  );
};

export default SvgCloseLogo;

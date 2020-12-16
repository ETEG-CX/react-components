/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'colorpicker.thumb';

export const StyledThumb = styled.div`
  transform: translate(-9px, -1px);
  border-radius: 50%;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
  background-color: rgb(248, 248, 248);
  width: ${props => props.theme.space.base * 4.5}px;
  height: ${props => props.theme.space.base * 4.5}px;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledThumb.defaultProps = {
  theme: DEFAULT_THEME
};

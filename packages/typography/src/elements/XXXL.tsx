/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledFont } from '../styled';

interface IXXXLProps extends HTMLAttributes<HTMLDivElement> {
  /** Any valid DOM element for the styled component */
  tag?: any;
  /** Render bold font */
  isBold?: boolean;
}

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
const XXXL: React.FunctionComponent<
  IXXXLProps & React.RefAttributes<HTMLDivElement>
> = React.forwardRef<HTMLDivElement, IXXXLProps>(({ tag, ...other }, ref) => (
  <StyledFont as={tag} ref={ref} size="xxxl" {...other} />
));

XXXL.displayName = 'XXXL';

XXXL.propTypes = {
  tag: PropTypes.any,
  isBold: PropTypes.bool
};

XXXL.defaultProps = {
  tag: 'div'
};

export default XXXL;

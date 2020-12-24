/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StyledSkeleton } from '../styled';

export interface ISkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Sets the width as a percentage of the parent element */
  width?: string;
  /** Sets the height of the loader as a percentage of parent element when not inherited by `line-height`. Default is .6 of `line-height` */
  height?: string;
  /** Inverts the loader color for use on dark backgrounds */
  isLight?: boolean;
}

const Skeleton: React.FC<ISkeletonProps> = ({ width, height, isLight, ...other }) => {
  return (
    <StyledSkeleton isLight={isLight} customWidth={width} customHeight={height} {...other}>
      &nbsp;
    </StyledSkeleton>
  );
};

Skeleton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  isLight: PropTypes.bool
};

Skeleton.defaultProps = {
  width: '100%',
  height: '100%'
};

export default Skeleton;

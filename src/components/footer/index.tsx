import * as React from 'react';

import classNames from 'classnames';
import './style';
export interface FooterProps {
  prefixCls: string;
}

export default class Footer extends React.Component<FooterProps, any> {
  static defaultProps = {
    prefixCls: 'ni-footer'
  };

  public render() {
    const { children, prefixCls, ...rest } = this.props;
    const classes = classNames(prefixCls);
    return <div className={classes} />;
  }
}

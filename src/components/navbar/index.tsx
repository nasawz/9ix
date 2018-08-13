import * as React from 'react';
import classNames from 'classnames';
import './style';
export interface NavBarProps {
  prefixCls: string;
}

export default class NavBar extends React.Component<NavBarProps, any> {
  static defaultProps = {
    prefixCls: 'ni-navBar'
  };

  public render() {
    const { children, prefixCls, ...rest } = this.props;
    const classes = classNames(prefixCls);
    return <div className={classes} />;
  }
}

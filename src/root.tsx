import * as React from 'react';
import MainRoures from './routes';

export interface RootProps {}

export default class Root extends React.Component<RootProps, any> {
  public render() {
    return <MainRoures />;
  }
}

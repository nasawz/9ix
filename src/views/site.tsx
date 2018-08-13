import * as React from 'react';
import { Row, Col, Layout } from 'antd';
export interface SiteProps {
  children;
}

export default class Site extends React.Component<SiteProps, any> {
  public render() {
    let { children } = this.props;
    return (
      <div>
        <Row>
          <Col span={20} offset={2}>
            Header
          </Col>
        </Row>
        <Row>
          <Col span={20} offset={2}>
            {children}
          </Col>
        </Row>
        <Row>
          <Col span={20} offset={2}>
            footer
          </Col>
        </Row>
      </div>
    );
  }
}

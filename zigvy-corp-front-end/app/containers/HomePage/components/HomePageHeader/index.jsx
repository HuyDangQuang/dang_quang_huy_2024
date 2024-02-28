/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';

import _get from 'lodash/get';

import { Row, Col, Typography, Avatar, Card, Divider } from 'antd';

import logo from '../../../../images/icon-512x512.png';

export function HomePageHeader({ userDefaultData }) {
  return (
    <Card>
      <Row
        gutter={[16, 16]}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <Col
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img src={logo} alt="logo" width={60} height={60} />
          <Typography.Text style={{ marginLeft: '8px' }}>
            Zigvy Corp
          </Typography.Text>
        </Col>

        <Divider type="vertical" />

        <Col>
          <Typography.Title>Blog</Typography.Title>
        </Col>

        <Divider type="vertical" />

        <Col
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <Typography.Text style={{ marginLeft: '8px' }}>
            {_get(userDefaultData, 'data.name') || '--'} -{' '}
            {_get(userDefaultData, 'data.email') || '--'}
          </Typography.Text>
        </Col>
      </Row>
    </Card>
  );
}

HomePageHeader.propTypes = {
  userDefaultData: PropTypes.any,
};

export default HomePageHeader;

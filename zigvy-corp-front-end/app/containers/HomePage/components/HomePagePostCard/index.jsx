/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';

import _get from 'lodash/get';
import _map from 'lodash/map';

import { Row, Col, Typography, Card, Divider } from 'antd';
import { HomePageComment } from '../HomePageComment';

export function HomePagePostCard({
  data,
  commentPostIdData,
  fetchCommentPostIdRequest,
}) {
  const colorData = [
    {
      name: 'magenta',
      border: `1px solid #ffc0cb`,
      backgroundColor: '#fff2f4',
      color: '#ffc0cb',
    },
    {
      name: 'red',
      border: `1px solid red`,
      backgroundColor: 'pink',
      color: 'red',
    },
    {
      name: 'blue',
      border: `1px solid #0000FF`,
      backgroundColor: '#e5e5ff',
      color: '#0000FF',
    },
  ];

  return (
    <Card>
      <Row gutter={[16, 16]}>
        <Col
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          span={24}
        >
          <Typography.Text>
            <b>{_get(data, 'title')}</b>
          </Typography.Text>
        </Col>

        <Col
          span={24}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div>
              <Typography.Text>Author: --</Typography.Text>
            </div>
            <div>
              <Typography.Text>Created At: --</Typography.Text>
            </div>
          </div>

          <div>
            {_map(colorData, (item, idx) => (
              <span
                key={idx.toString()}
                style={{
                  padding: '4px',
                  borderRadius: '8px',
                  marginRight: '4px',
                  border: item.border,
                  backgroundColor: item.backgroundColor,
                  color: item.color,
                }}
              >
                {item.name}
              </span>
            ))}
          </div>
        </Col>

        <Col span={24}>
          <Typography.Text>{_get(data, 'body')}</Typography.Text>
        </Col>

        <Col span={24}>
          <Divider orientation="left">Comment</Divider>
          <HomePageComment
            idPost={_get(data, 'id')}
            commentPostIdData={commentPostIdData}
            fetchCommentPostIdRequest={fetchCommentPostIdRequest}
          />
        </Col>
      </Row>
    </Card>
  );
}

HomePagePostCard.propTypes = {
  data: PropTypes.any,
  commentPostIdData: PropTypes.any,
  fetchCommentPostIdRequest: PropTypes.func,
};

export default HomePagePostCard;

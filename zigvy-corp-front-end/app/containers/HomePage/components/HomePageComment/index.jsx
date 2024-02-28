/*
 * HomePageComment
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useMemo } from 'react';

import _map from 'lodash/map';
import _get from 'lodash/get';
import _find from 'lodash/find';
import _size from 'lodash/size';

import PropTypes from 'prop-types';

import { Row, Col, Collapse, Typography, Avatar, Divider } from 'antd';

export function HomePageComment({
  idPost,

  commentPostIdData,
  fetchCommentPostIdRequest,
}) {
  const data = useMemo(() => {
    const checkData = _find(commentPostIdData, item => item.postId === idPost);
    if (checkData) return checkData;
    return null;
  }, [idPost, commentPostIdData]);

  const label = useMemo(() => {
    if (!data) return 'Click get comment';

    return `${_size(_get(data, 'response'))} replies`;
  }, [data]);

  const handleCollapseChange = () => {
    fetchCommentPostIdRequest(idPost);
  };

  return (
    <>
      <Collapse
        size="small"
        items={[
          {
            key: '1',
            label: `${label}`,
            children: (
              <>
                <Row gutter={[16, 16]}>
                  {_map(_get(data, 'response'), (item, idx) => (
                    <Col span={24} key={idx.toString()}>
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      <Typography.Text style={{ marginLeft: '8px' }}>
                        <b>{_get(item, 'email') || '--'}</b> :{' '}
                        {_get(item, 'body') || '--'}
                      </Typography.Text>
                      <Divider />
                    </Col>
                  ))}
                </Row>
              </>
            ),
          },
        ]}
        onChange={handleCollapseChange}
      />
    </>
  );
}

HomePageComment.propTypes = {
  idPost: PropTypes.string,

  commentPostIdData: PropTypes.any,
  fetchCommentPostIdRequest: PropTypes.func,
};

export default HomePageComment;

/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';

import _map from 'lodash/map';
import _get from 'lodash/get';
import _slice from 'lodash/slice';

import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { Row, Col } from 'antd';
import {
  fetchCommentPostIdRequest,
  fetchPostListRequest,
  fetchUserRequest,
} from './store/actions';
import reducer from './store/reducer';
import saga from './store/saga';
import {
  makeSelectCommentPostIdData,
  makeSelectPostList,
  makeSelectUserDefault,
} from './store/selectors';

import HomePageHeader from './components/HomePageHeader';
import HomePagePostCard from './components/HomePagePostCard';

const key = 'home';

export function HomePage({
  userDefaultData,
  dispatchFetchUserRequest,

  postListData,
  dispatchFetchPostListRequest,

  commentPostIdData,
  dispatchFetchCommentPostIdRequest,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    dispatchFetchUserRequest();
    dispatchFetchPostListRequest();
  }, []);

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <Row gutter={[16, 16]}>
        <Col span={24}>
          <HomePageHeader userDefaultData={userDefaultData} />
        </Col>

        {_map(_slice(_get(postListData, 'data'), 0, 10), (item, idx) => (
          <Col span={24} key={idx.toString()}>
            <HomePagePostCard
              data={item}
              commentPostIdData={commentPostIdData}
              fetchCommentPostIdRequest={dispatchFetchCommentPostIdRequest}
            />
          </Col>
        ))}
      </Row>
    </article>
  );
}

HomePage.propTypes = {
  userDefaultData: PropTypes.any,
  dispatchFetchUserRequest: PropTypes.func,

  postListData: PropTypes.any,
  dispatchFetchPostListRequest: PropTypes.func,

  commentPostIdData: PropTypes.any,
  dispatchFetchCommentPostIdRequest: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  userDefaultData: makeSelectUserDefault(),
  postListData: makeSelectPostList(),
  commentPostIdData: makeSelectCommentPostIdData(),
});

export function mapDispatchToProps(dispatch) {
  return {
    dispatchFetchUserRequest: () => dispatch(fetchUserRequest()),
    dispatchFetchPostListRequest: () => dispatch(fetchPostListRequest()),
    dispatchFetchCommentPostIdRequest: idPost =>
      dispatch(fetchCommentPostIdRequest(idPost)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);

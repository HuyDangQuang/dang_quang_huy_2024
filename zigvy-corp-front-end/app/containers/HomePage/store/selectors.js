/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectHome,
    homeState => homeState.username,
  );

const makeSelectUserDefault = () =>
  createSelector(
    selectHome,
    homeState => homeState.userDefaultData,
  );

const makeSelectPostList = () =>
  createSelector(
    selectHome,
    homeState => homeState.postListData,
  );

const makeSelectCommentPostIdData = () =>
  createSelector(
    selectHome,
    homeState => homeState.commentPostIdData,
  );

export {
  selectHome,
  makeSelectUsername,
  makeSelectUserDefault,
  makeSelectPostList,
  makeSelectCommentPostIdData,
};

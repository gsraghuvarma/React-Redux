import { createSelector } from 'reselect';

/**
 * Direct selector to the addstudent state domain
 */
const selectAddstudentDomain = () => (state) => state.get('addstudent');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Addstudent
 */

const makeSelectAddstudent = () => createSelector(
  selectAddstudentDomain(),
  (substate) => substate.toJS()
);

export default makeSelectAddstudent;
export {
  selectAddstudentDomain,
};

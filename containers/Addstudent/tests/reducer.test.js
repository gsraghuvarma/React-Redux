
import { fromJS } from 'immutable';
import addstudentReducer from '../reducer';

describe('addstudentReducer', () => {
  it('returns the initial state', () => {
    expect(addstudentReducer(undefined, {})).toEqual(fromJS({}));
  });
});

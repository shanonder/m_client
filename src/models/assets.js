import { message } from 'antd/lib/index';
import { fakeSubmitForm } from '../services/api';

export default {
  namespace: 'assets',
  state: {
    add_submitting: false,
  },
  effects: {
    *submitAddForm({ payload }, { call, put }) {
      yield put({
        type: 'changeRegularFormSubmitting',
        payload: true,
      });
      yield call(fakeSubmitForm, payload);
      yield put({
        type: 'changeRegularFormSubmitting',
        payload: false,
      });
      message.success('提交成功');
    },
  },
  reducers: {},
};

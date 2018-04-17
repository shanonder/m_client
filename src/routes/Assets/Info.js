import React, { PureComponent } from 'react';
import { connect } from 'dva';
// import { DatePicker, Form, Input, } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

// const FormItem = Form.Item;

@connect(state => ({
  submitting: state.form,
}))

// @Form.create()
export default class BasicForms extends PureComponent {
  render() {
    return (
      <PageHeaderLayout title="删除版本" content="todo">
        <div>
          todo
        </div>
      </PageHeaderLayout>
    );
  }
}

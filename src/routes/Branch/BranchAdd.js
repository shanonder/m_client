import React, { PureComponent } from 'react';
import { connect } from 'dva';
import {
  Divider, Form, Input, Select, Button, Icon,
} from 'antd';
import Authorized from '../../utils/Authorized';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
// import styles from './style.less';
const FormItem = Form.Item;
const { Option } = Select;
const { Secured } = Authorized;

@Secured(['user', 'admin'], 'no permission')
@connect(state => ({
  submitting: state.branch.add_submitting,
}))

@Form.create()
export default class BranchAdd extends PureComponent {
  onHandleFoldButton = () => {
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.dispatch({
          type: 'branch/submitAddForm',
          payload: values,
        });
      }
    });
  };

  render() {
    const selectAfter = (
      <Select defaultValue="基于版本" style={{ width: 120 }}>
        <Option value="0">主线</Option>
        <Option value="1">分支1211</Option>
        <Option value="2">分支1212</Option>
        <Option value="3">分支1213</Option>
      </Select>
    );

    const { submitting } = this.props;
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
        md: { span: 10 },
      },
    };

    const submitFormLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 7 },
      },
    };

    return (
      <PageHeaderLayout title="" content="">
        <Form
          onSubmit={this.handleSubmit}
          hideRequiredMark
          style={{ marginTop: 8 }}
        >
          <FormItem
            {...formItemLayout}
            label="版本名称"
          >
            {getFieldDecorator('name', {
              rules: [{
                required: true, message: '请输入版本名称',
              }],
            })(
              <Input placeholder="给版本起个名字" addonAfter={selectAfter} />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="目录名称"
          >
            {getFieldDecorator('folder', {
              rules: [{
                required: true, message: '请输入版本目录名称',
              }],
            })(
              <Input placeholder="给版本目录起个名字" addonAfter={<Icon type="setting" onClick={this.onHandleFoldButton} />} />
            )}
          </FormItem>
          <Divider>源目录</Divider>
          <FormItem
            {...formItemLayout}
            label="策划SVN路径"
          >
            {getFieldDecorator('deSvnFrom')(
              <Input placeholder="请输入策划SVN路径" />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="美术SVN路径"
          >
            {getFieldDecorator('artSvnFrom')(
              <Input placeholder="请输入美术SVN路径" />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="前端SVN路径"
          >
            {getFieldDecorator('codeSvnFrom', {
            })(
              <Input placeholder="请输入程序SVN路径" />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="前端ReleaseSVN路径"
          >
            {getFieldDecorator('codeRelSvnFrom')(
              <Input placeholder="请输入前端ReleaseSVN路径" />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="最终发布trunkSVN路径"
          >
            {getFieldDecorator('codeRelSvnFrom')(
              <Input placeholder="请输入最终发布trunkSVN路径" />
            )}
          </FormItem>

          <Divider>版本目录</Divider>
          <FormItem
            {...formItemLayout}
            label="策划SVN路径"
          >
            {getFieldDecorator('deSvn', {
              rules: [{
                required: true, message: '请输入策划SVN路径',
              }],
            })(
              <Input placeholder="请输入策划SVN路径" />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="美术SVN路径"
          >
            {getFieldDecorator('artSvn', {
              rules: [{
                required: true, message: '请输入美术SVN路径',
              }],
            })(
              <Input placeholder="请输入美术SVN路径" />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="前端SVN路径"
          >
            {getFieldDecorator('codeSvn', {
              rules: [{
                required: true, message: '请输入程序SVN路径',
              }],
            })(
              <Input placeholder="请输入程序SVN路径" />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="前端ReleaseSVN路径"
          >
            {getFieldDecorator('codeRelSvn', {
              rules: [{
                required: true, message: '请输入前端ReleaseSVN路径',
              }],
            })(
              <Input placeholder="请输入前端ReleaseSVN路径" />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="最终发布trunkSVN路径"
          >
            {getFieldDecorator('codeRelSvn', {
              rules: [{
                required: true, message: '请输入最终发布trunkSVN路径',
              }],
            })(
              <Input placeholder="请输入最终发布trunkSVN路径" />
            )}
          </FormItem>
          <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
            <Button type="primary" htmlType="submit" loading={submitting}>
              生成版本
            </Button>
          </FormItem>
        </Form>
      </PageHeaderLayout>
    );
  }
}

import React, { Fragment, useEffect, useState } from "react";

import { Formik } from "formik";
import { Form, Input, SubmitButton } from "formik-antd";

import logo from "../../img/logo.jpg";

import { UploadOutlined } from "@ant-design/icons";
import { List, Avatar } from "antd";
import { Collapse } from "antd";

import { Button, Modal } from "antd";

import NetworkDiagramModal from "../NetworkDiagramModal/NetworkDiagramModal";
import { FolderViewOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const DynamicForm = ({ dynamicForm, dynamicFormOrder, parentCallBack }) => {
  const [visible, setVisible] = useState(false);

  const updateConfigFileOnSubmit = data => {
    parentCallBack(data);
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = event => {
    setVisible(false);
  };

  const handleCancel = event => {
    setVisible(false);
  };

  return (
    <Fragment>
      <Modal
        title="Local Network Diagram"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {visible && <NetworkDiagramModal />}
      </Modal>

      {dynamicForm != null && (
        <Formik
          initialValues={dynamicForm}
          onSubmit={data => {
            updateConfigFileOnSubmit(data);
          }}
          render={() => (
            <Form>
              <Collapse>
                {dynamicFormOrder &&
                  Object.keys(dynamicFormOrder).map(key => (
                    <Panel header={key}>
                      <List
                        itemLayout="horizontal"
                        dataSource={Object.keys(dynamicFormOrder[key])}
                        renderItem={subkey => (
                          <List.Item>
                            <List.Item.Meta
                              avatar={<Avatar src={logo} />}
                              title={
                                <div style={{ display: "flex" }}>
                                  <p
                                    style={{
                                      width: "250px",
                                      marginRight: "20px"
                                    }}
                                  >
                                    {subkey}
                                  </p>
                                  <Input
                                    name={subkey}
                                    placeholder={subkey}
                                    style={{ width: "250px" }}
                                  />
                                </div>
                              }
                            />
                          </List.Item>
                        )}
                      />
                    </Panel>
                  ))}
              </Collapse>
              <div style={{ display: "flex", justifyContent: "flex-end",marginTop: "30px"}}>
                <SubmitButton
                  shape="round"
                  icon={<UploadOutlined />}
                  style={{
                    marginRight: "10px",
                    backgroundColor: "#7e0cf5",
                    borderColor: "#7e0cf5",
                    borderRadius: "5px"
                  }}
                >
                  Submit Data
                </SubmitButton>
                <Button
                  onClick={showModal}
                  shape="round"
                  icon={<FolderViewOutlined />}
                  style={{
                    borderRadius: "5px"
                  }}
                >
                  Show local Network
                </Button>
              </div>
            </Form>
          )}
        />
      )}
    </Fragment>
  );
};

export default DynamicForm;

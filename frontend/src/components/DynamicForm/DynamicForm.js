import React, { Fragment, useEffect, useState } from "react";

import { Formik } from "formik";
import { Form as FormAnt } from "antd";
import { Alert } from "antd";
import { Form, Input,SubmitButton } from "formik-antd";

const DynamicForm = ({ dynamicForm, dynamicFormOrder, parentCallBack }) => {
  const updateConfigFileOnSubmit = data => {
      parentCallBack(data);
  };

  return (
    <Fragment>
      {dynamicForm != null && (
        <Formik
          initialValues={dynamicForm}
          onSubmit={data => {
            updateConfigFileOnSubmit(data);
          }}
          render={() => (
            <Form>
              {dynamicFormOrder &&
                Object.keys(dynamicFormOrder).map(key => (
                  <Fragment>
                    <Alert message={key} type="success" style={{marginBottom:'20px'}}/>
                    {Object.keys(dynamicFormOrder[key]).map(subkey => (
                      <Fragment>
                        <FormAnt.Item label={subkey} style={{width:'250px'}}>
                          <Input name={subkey} placeholder={subkey} style={{width:'250px'}}/>
                        </FormAnt.Item>
                      </Fragment>
                    ))}
                  </Fragment>
                ))}
                <SubmitButton>Submit Data</SubmitButton>
            </Form>
          )}
        />
      )}
    </Fragment>
  );
};

export default DynamicForm;

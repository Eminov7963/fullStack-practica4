import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Base_Url } from '../../constant/services';
import { Helmet } from 'react-helmet-async';
const AddSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    description: Yup.string().required('Required'),
    image: Yup.string().url().required('Required'),
    price: Yup.number().required('Required'),
});

export const Add = () => (
  <div>
    <Helmet>
            <title>Add Page</title>
            <link
              rel="shortcut icon"
              href="https://www.tacobell.com/"
              type="image/x-icon"
            />
          </Helmet>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        title: '',
        image: '',
        description: '',
        price: '',
      }}
      validationSchema={AddSchema}
      onSubmit={async (values) => {
        const resp = {...values,ratings : 3, oldprice: null}
        const possted = await axios.post(`${Base_Url}/products`,resp) 
        
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="title" />
          {errors.title && touched.title ? (
            <div>{errors.title}</div>
          ) : null}
          <Field name="image" type = "url"/>
          {errors.image && touched.image ? (
            <div>{errors.image}</div>
          ) : null}
          <Field name="description" type="description" />
          {errors.description && touched.description ? <div>{errors.description}</div> : null}
          <Field name="price" type = "number"/>
          {errors.price && touched.price ? (
            <div>{errors.price}</div>
          ) : null}
          
          <button type="submit">Add</button>
        </Form>
      )}
    </Formik>
  </div>
);
export default Add
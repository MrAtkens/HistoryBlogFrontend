import * as React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import {observer} from "mobx-react-lite";

import Input from '~/components/input/input';
import Button from '~/components/button/button';
import systemStore from "~/stores/systemStore"

import {
  ContactWrapper,
  ContactPageTitle,
  ContactFromWrapper,
  InputGroup,
} from './style';


const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().required('Required'),
});

const Contact = observer(() => {
  return (
    <Formik
      initialValues={{ firstName: '', email: '', message: '' }}
      onSubmit={(values, actions) => {
        systemStore.sendMailFromUser(values.firstName, values.email, values.message).then(status => {
          actions.setSubmitting(false);
          if(status === true) {
            actions.setFieldValue("firstName", "")
            actions.setFieldValue("email", "")
            actions.setFieldValue("message", "")
          }
        })
      }}
      validationSchema={SignupSchema}
      render={({
        handleChange,
        values,
        errors,
        handleBlur,
        touched,
        isSubmitting
      }) => (
        <>
          <Form>
            <ContactWrapper>
              <ContactPageTitle>
                <h2>Контакты</h2>
                <p>Почта: geeknhistory@gmail.com</p>
              </ContactPageTitle>
              <ContactFromWrapper>
                <InputGroup>
                  <Input
                    type="text"
                    name="firstName"
                    value={`${values.firstName}`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Имя или псевдоним"
                    notification={`${
                      errors.firstName && touched.firstName
                        ? "Укажите имя"
                        : ''
                    }`}
                  />
                  <Input
                    type="email"
                    name="email"
                    value={`${values.email}`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Почта"
                    notification={`${
                      errors.email && touched.email ? "Укажите почту" : ''
                    }`}
                  />
                </InputGroup>
                <Input
                  type="textarea"
                  name="message"
                  value={`${values.message}`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Сообщение"
                  notification={
                    errors.message && touched.message ? "Напишите сообщение" : ''
                  }
                />
                <Button
                  title="Отправить"
                  type="submit"
                  isLoading={isSubmitting}
                  loader="Отправляется.."
                />
              </ContactFromWrapper>
            </ContactWrapper>
          </Form>
        </>
      )}
    />
  );
})

export default Contact;

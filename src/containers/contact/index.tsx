import * as React from 'react';
import { Formik, FormikProps, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import {
  ContactWrapper,
  ContactPageTitle,
  ContactFromWrapper,
  InputGroup,
} from './style';
import {observer} from "mobx-react-lite";
import systemStore from "stores/systemStore"

interface MyFormValues {
  firstName: string;
  email: string;
  message: string;
}

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().required('Required'),
});

const Contact: React.SFC<{}> = observer(() => {
  return (
    <Formik
      initialValues={{ firstName: '', email: '', message: '' }}
      onSubmit={(values: MyFormValues, actions: any) => {
        systemStore.sendMailFromUser(values.firstName, values.email, values.message).then(status => {
          console.log(status)
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
      }: FormikProps<MyFormValues>) => (
        <>
          <Form>
            <ContactWrapper>
              <ContactPageTitle>
                <h2>Contact</h2>
                <p>
                  Geek'n'history contacts
                </p>
              </ContactPageTitle>
              <ContactFromWrapper>
                <InputGroup>
                  <Input
                    type="text"
                    name="firstName"
                    value={`${values.firstName}`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Name"
                    notification={`${
                      errors.firstName && touched.firstName
                        ? errors.firstName
                        : ''
                    }`}
                  />
                  <Input
                    type="email"
                    name="email"
                    value={`${values.email}`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Email"
                    notification={`${
                      errors.email && touched.email ? errors.email : ''
                    }`}
                  />
                </InputGroup>
                <Input
                  type="textarea"
                  name="message"
                  value={`${values.message}`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Message"
                  notification={
                    errors.message && touched.message ? errors.message : ''
                  }
                />
                <Button
                  title="Submit"
                  type="submit"
                  isLoading={isSubmitting ? true : false}
                  loader="Submitting.."
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

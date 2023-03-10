/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { Field, Form, Formik } from 'formik';
import { AbsoluteCenter, Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';

function FormikExample() {
  function validateName(value: string) {
    let error;
    if (!value) {
      error = 'Name is required';
    } else if (value.toLowerCase() !== 'naruto') {
      error = "Jeez! You're not a fan 😱";
    }
    return error;
  }

  return (
    <Formik
      initialValues={{ name: 'Sasuke' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props: { isSubmitting: boolean }) => (
        <Form>
          <Field name="name" validate={validateName}>
            {({ field, form }: { field: object; form: any }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel>First name</FormLabel>
                <Input {...field} placeholder="name" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button mt={4} colorScheme="teal" isLoading={props.isSubmitting} type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}

const Register = () => {
  return (
    <main>
      <h1>Register</h1>
      <Box position="relative" h="100px">
        <AbsoluteCenter bg="tomato" p="4" color="white" axis="both">
          <FormikExample />
        </AbsoluteCenter>
      </Box>
    </main>
  );
};

export default Register;

import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { globalStyles } from '../styles/global';
import Button from '../shared/Button';

const ReviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

const ReviewForm = ({ addReview }) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        validationSchema={ReviewSchema}
        initialValues={{ title: '', body: '', rating: '' }}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
        {(formikProps) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review title"
              onChangeText={formikProps.handleChange('title')}
              value={formikProps.values.title}
              onBlur={formikProps.handleBlur('title')}
            />
            <Text style={globalStyles.errorText}>{formikProps.touched.title && formikProps.errors.title}</Text>

            <TextInput
              multiline
              minHeight={80}
              style={globalStyles.input}
              placeholder="Review body"
              onChangeText={formikProps.handleChange('body')}
              value={formikProps.values.body}
              onBlur={formikProps.handleBlur('body')}
            />
            <Text style={globalStyles.errorText}>{formikProps.touched.body && formikProps.errors.body}</Text>

            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={formikProps.handleChange('rating')}
              value={formikProps.values.rating}
              keyboardType="numeric"
              onBlur={formikProps.handleBlur('rating')}
            />
            <Text style={globalStyles.errorText}>{formikProps.touched.rating && formikProps.errors.rating}</Text>

            <Button text="submit" onPress={formikProps.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ReviewForm;

const styles = StyleSheet.create({});

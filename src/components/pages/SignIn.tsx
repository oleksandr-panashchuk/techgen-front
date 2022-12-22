import {
  Box,
  Card,
  Stack,
  TextInput,
  PasswordInput,
  Center,
  Button,
  Text,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import * as React from 'react';
import { FormEventHandler } from 'react';
import { useStyles } from '../../styles/authStyles';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export interface IInitialFormValues {
  emailOrPhone: string;
  password: string;
}

const SignIn = (): JSX.Element => {
  const { classes } = useStyles('signIn');

  //* form
  const form = useForm<IInitialFormValues>({
    initialValues: {
      emailOrPhone: '',
      password: '',
    },
  });

  //* submit
  const onSubmit: FormEventHandler<HTMLFormElement> = form.onSubmit(values => {
    console.log(values);
  });

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <Box>
      <Card px="2%" radius="md" className={classes.card}>
        <Text className={classes.card_welcome_text} data-aos="fade-up-left">
          You’re welcome! 👋
        </Text>
        <Text className={classes.card_signup_text} data-aos="fade-up-right">
          Sign up your new account
        </Text>
        <form onSubmit={onSubmit}>
          <Stack spacing="md">
            <TextInput
              {...form.getInputProps('emailOrPhone')}
              size="md"
              radius="md"
              label="Your email or Phone"
            />
            <PasswordInput
              {...form.getInputProps('password')}
              size="md"
              radius="md"
              label="Password"
            />
          </Stack>
          <Button
            type="submit"
            sx={{ marginTop: '8%' }}
            className={classes.card_btn}
          >
            sign in
          </Button>
        </form>
        <Center>
          <Text className={classes.forget_password_text}>
            Forgot your password?
          </Text>
        </Center>
        <Center>
          <Text className={classes.account_text}>
            Already have an account?{' '}
            <Text sx={{ color: '#625BF7' }} component="a" href="/signUp">
              Sign up
            </Text>
          </Text>
        </Center>
      </Card>
    </Box>
  );
};

export default SignIn;

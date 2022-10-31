import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import FormInput from './FormInput';
import Shop from './shop';

export default function SignUpForm() {
  return (
    <div>
      <h2>{`Don't have an account?`}</h2>
      <span>Sign up with your email and password</span>
      <form>
        <FormInput
          label="Display Name"
          type="text"
          required
          name="displayName"
          value={'a'}
        />
      </form>
    </div>
  );
}

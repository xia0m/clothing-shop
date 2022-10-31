import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import SignUpForm from '../components/SignUpForm';
import styles from '../styles/Home.module.css';
import Shop from './shop';

export default function Home() {
  return (
    <Layout>
      <div>Sign In Page</div>
      <SignUpForm />
    </Layout>
  );
}

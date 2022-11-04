import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import ShopContent from '../components/ShopContent';
import styles from '../styles/Home.module.css';
import Shop from './shop';

export default function Home() {
  return (
    <Layout>
      <ShopContent />
    </Layout>
  );
}

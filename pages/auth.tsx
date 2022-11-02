import Layout from '../components/Layout';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';

export default function Home() {
  return (
    <Layout>
      <div className="flex w-[900px] justify-between my-[30px] mx-auto">
        <SignInForm />
        <SignUpForm />
      </div>
    </Layout>
  );
}

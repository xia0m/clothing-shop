import { useState } from 'react';
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../store/firebase';
import Button from './Button';
import FormInput from './FormInput';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export default function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const GoogleSignIn = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log('user is ', user);
    console.log('userdocref is ', userDocRef);
  };

  return (
    <div className="flex flex-col w-[380px]">
      <h2 className="my-[10px] mx-0 font-bold text-2xl">{`Already have an account?`}</h2>
      <span>Sign in with your email and password</span>
      <form>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="flex justify-between">
          <Button type="submit">Sign In</Button>
          <Button onClick={GoogleSignIn} type="button" buttonType="google">
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
}

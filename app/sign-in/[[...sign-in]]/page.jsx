import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <div className='flex justify-center items-center my-5 mx-10' >
      <SignIn />
    </div>
  );
};
export default SignInPage;
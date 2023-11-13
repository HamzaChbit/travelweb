// pages/index.js or pages/index.tsx

import RootLayout from "@/app/layout";
import { auth } from "@clerk/nextjs";


export const getServerSideProps = async () => {
  const user = await auth();

  return {
    props: {
      user,
    },
  };
};

const Home = ({ user }:any) => {
  return (
    <RootLayout user={user}>
      {/* The rest of your home page */}
    </RootLayout>
  );
};

export default Home;

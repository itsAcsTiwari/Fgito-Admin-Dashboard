"use client";

import { FormEx } from "@/components";

const Home = () => {
  // console.log(process.env.NEXT_PUBLIC_API_URL);

  return (
    <div className="overflow-x-hidden overflow-y-auto">
      <h1 className="font-bold text-2xl text-primary">hello world</h1>
      <FormEx />
    </div>
  );
};

export default Home;

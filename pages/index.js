import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [state, setState] = useState();

  useEffect(() => {
    (async function () {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await res.json();
      setState(data);
    })();
  }, []);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800 text-gray-50'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center justify-center flex-1 px-20 text-center'>
        <h3 className='text-2xl font-extrabold'>CSR Test</h3>
        <code className='bg-gray-300 text-gray-700 px-10 py-5 mt-4 shadow-md rounded-lg'>
          {!state ? <>loading...</> : <>{JSON.stringify(state)}</>}
        </code>
      </main>
    </div>
  );
}

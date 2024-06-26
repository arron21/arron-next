import React from 'react';
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className='mb-4'><h1 className='text-5xl font-serif inline'>Arron McCrory</h1><span className='ml-3 text-3xl text-zinc-600'>noun</span></div>
      <div className='text-2xl text-slate-600'>air·​on</div>
      <div className='text-2xl mt-2'><em>less common spelling of <a className='no-underline text-cyan-700' href="https://www.merriam-webster.com/dictionary/Aaron" target="_blank">aaron</a></em></div>
      
      <ol className='dictionary-list mt-3 text-2xl'>
        <li>A human who makes websites, webapps, and other things</li>
        <li>That guy who like photography and video games</li>
      </ol>
    </main>
  );
}

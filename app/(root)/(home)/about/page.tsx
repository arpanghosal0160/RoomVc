import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dark-1 p-4">
      <div className="bg-dark-1 rounded-lg p-none max-w-3xl">
        <h1 className="text-3xl text-white font-bold mb-4 text-center">About roomVc</h1>
        <p className="text-white mb-4">
          Welcome to <span className="font-semibold">roomVc</span>, your ultimate video calling solution built with Next.js, TypeScript, and Tailwind CSS. Our platform ensures seamless and high-quality video calls for personal, educational, and professional use.
        </p>
        <h2 className="text-2xl font-semibold mb-3 text-white">Key Features</h2>
        <ul className="list-disc list-inside mb-4 text-white">
          <li>High-quality video and audio calls</li>
          <li>Easy to use interface</li>
          <li>Secure and encrypted communication</li>
          
          <li>Screen sharing and recording capabilities</li>
          <li>Built using NEXT.js for faster server side rendering</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-3 text-white">Why Choose roomVc?</h2>
        <p className="text-white mb-4">
          With <span className="font-semibold">roomVc</span>, you get a reliable and efficient video calling experience designed to meet your needs. Whether you are connecting with family, collaborating with colleagues, or attending an online class, roomVc provides the tools and features you need for a smooth and productive session.
        </p>
        <div className="text-center mt-6">
          <a href="/" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
            Get Started
          </a>
        </div>
        <div className="mt-8 flex justify-center space-x-8">
          <a href="https://www.linkedin.com/in/arpan-ghosal-936164269/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm12.5 11.27h-3v-5.41c0-1.29-.03-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85v5.51h-3v-10h2.88v1.37h.04c.4-.76 1.38-1.56 2.83-1.56 3.03 0 3.59 2 3.59 4.59v5.6z"/></svg>
          </a>
          <a href="https://github.com/arpanghosal0160" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white-700 transition">
            <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.111.82-.261.82-.577 0-.285-.01-1.04-.015-2.04-3.338.727-4.042-1.61-4.042-1.61-.546-1.388-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.236 1.839 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.774.418-1.305.76-1.605-2.665-.303-5.466-1.332-5.466-5.932 0-1.31.467-2.382 1.235-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.007-.323 3.3 1.23.957-.266 1.98-.398 3-.403 1.02.005 2.043.137 3 .403 2.29-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.839 1.234 1.911 1.234 3.221 0 4.61-2.803 5.625-5.475 5.922.43.37.823 1.096.823 2.209 0 1.594-.015 2.877-.015 3.27 0 .319.218.694.825.576 4.765-1.585 8.201-6.084 8.201-11.384 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="https://twitter.com/skeyeix" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.955-2.178-1.55-3.594-1.55-2.717 0-4.92 2.203-4.92 4.917 0 .385.044.76.127 1.122-4.087-.205-7.713-2.164-10.141-5.144-.423.726-.666 1.571-.666 2.475 0 1.71.87 3.213 2.188 4.099-.807-.026-1.566-.248-2.229-.616v.062c0 2.385 1.697 4.374 3.95 4.827-.413.112-.849.172-1.296.172-.317 0-.626-.03-.928-.087.627 1.956 2.444 3.379 4.6 3.421-1.685 1.32-3.809 2.107-6.115 2.107-.398 0-.79-.023-1.174-.068 2.179 1.397 4.768 2.213 7.548 2.213 9.056 0 14.01-7.503 14.01-14.01 0-.213-.005-.425-.014-.636.961-.694 1.797-1.562 2.457-2.549z"/></svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default page
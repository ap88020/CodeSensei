import { useState } from 'react'
import prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import Editor from 'react-simple-code-editor'
import Marked from 'react-markdown'
import rehypeHighlight from 'rehype-highlight';
import "highlight.js/styles/atom-one-dark.css";

import axios from 'axios'
import './App.css'

function App() {
  // const [code, setCode] = useState('')
  const [code, setCode] = useState(`function greet() {
    console.log("Hello, world!");
  }`);

  const [review, setReview] = useState('');
  const [loader , setLoader] = useState(false);

  async function reviewCode(){
    setLoader(true);
    try {
      const response = await axios.post('https://codesensei-ipp9.onrender.com/api/get-review',{code});
      setReview(response.data);
    } catch (error) {
      setReview("❌ Failed to get review.");
    }
    setLoader(false);
  }

  return (
    <main className='h-screen flex p-4 bg-gray-700 gap-2'>
      <div className='left w-1/2 rounded p-2 flex flex-col justify-between bg-[#2d2d2d]'>
        <div className='code grow overflow-auto'>
          <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => prism.highlight(code, prism.languages.javascript, 'javascript')}
            padding={10}
            className='text-2xl rounded-lg w-full h-full text-white font-mono  border-red-500 '
          />
        </div>
        <div
          onClick={reviewCode}
          className='review w-fit h-fit pr-2 pl-2 text-xl self-end rounded cursor-pointer select-none bg-blue-300 hover:bg-blue-500'>
          Review
        </div>
      </div>
      <div className='right w-1/2 bg-black rounded p-2 text-white overflow-y-auto'>
        
        {
          loader ? (
          <div className="flex justify-center items-center h-full w-full">
            <div className="animate-spin rounded-full text-9xl">
                ⏳
            </div>
          </div>

          ) : (
            <div>
              <Marked rehypePlugins={[rehypeHighlight]}>
                {review}
              </Marked>
            </div>
          )
        }

      </div>
    </main>
  )
}

export default App
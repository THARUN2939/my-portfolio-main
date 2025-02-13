import React,{useEffect} from 'react'
import Ninepointer from '../assets/projects/Ninepointer.png'
import Summz from '../assets/projects//Summz.png'
import Chatbot from '../assets/projects/chatbot.png'
import Ide from '../assets/projects/ide.png'
import Yumeats from '../assets/projects/Yumeats.png'
//import fileuploader from '../assets/fileuploader.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
  useEffect(()=> {
    AOS.init({duration: 1000})
})

  const Projects = () => [
    {
      id: 1,
      src: Ninepointer,
      desc: "ninepointer is an AI based platform to help students become 9 pointers !...",
      demo: "https://ninepointer.vercel.app/",
      code: "https://https://github.com/THARUN2939/ninepointer"
    },
    {
      id: 2,
      src: Yumeats,
      desc: "This Front-end Recipe website is made using ReactJS, Tailwind CSS, ....",
      demo: "https://recipe-app-topaz-ten.vercel.app/",
      code: "https://github.com/THARUN2939/Recipe-app"
    },
    {
      id: 3,
      src: Chatbot,
      desc: "An Artificially Intelligent Chatbot using the GPT-4 Model to help people.",
      demo: "https://aichatbot-six.vercel.app/",
      code: "https://github.com/THARUN2939/aichatbot"
    },
    {
      id: 4,
      src: Ide,
      // desc: "Keeper is a simple note taking application made using Flutter...",
      demo: "https://online-code-editor-main.vercel.app/",
      code: "https://github.com/THARUN2939/online-code-editor-main"
    },
   // {
   //   id: 5,
   //   src:fileuploader,
      // desc: "A simple file uploader made using nodejs RestApi and Express",
    //  demo: "https://node-file-uploader.vercel.app/",
   //   code: "https://github.com/THARUN2939/Node_file_uploader"
  //  },
    {
      id: 6,
      src: Summz,
      // desc: "Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries...",
      demo: "https://ai-summarizer-kohl-six.vercel.app/",
      code: "https://github.com/THARUN2939/Ai_summarizer"
    },
  ]


  return (
    <div name="projects" className='h-auto max-h-screen-lg  bg-gradient-to-b from-black to-gray-800 w-full text-white
     md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</h2>
          <p className='py-6'>Check out some of my work </p>
        </div>
        <div   className='grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-8 px-12 sm:px-0'>
          {
            Projects().map(({ id, src, desc, demo, code }) => (

              <div data-aos="fade-in" data-aos-duration="500" key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="Ai" className='rounded-md duration-200 hover:scale-105' />
                <p className='p-2 text-justify font-extralight'>{desc}</p>
                <div className='flex items-center justify-center'>
                  
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-gray-700 to-blue-900 rounded-md'>
                    <a href={demo}>Demo</a>
                  </button>
                  <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-purple-900 to-gray-700 rounded-md'>
                    <a href={code}>Code</a>
                  </button>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects
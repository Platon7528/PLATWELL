import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-purple-700 h-screen flex flex-col items-stretch'>
        
        <div className='bg-red-700 mx-2 my-2 basis-1/2 flex flex-col md:flex-row items-stretch'>
                    <div className='bg-blue-700 mx-2 my-2 basis-1/2'>
                        
                    </div>


                    <div className='bg-yellow-600 basis-1/2 mx-2 my-2'>
                    </div> 
        </div>
        <div className='bg-pink-300 basis-1/2 mx-2 my-2'>
        </div>
        
    </div>
    )
}

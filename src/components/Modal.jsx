import { Eye, EyeOff } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Modal = ({ toggleModal }) => {

    const [showPass, setShowPass] = useState(false)

    useEffect(() => {
      
        document.body.style.overflow = 'hidden'

      return () => {
        document.body.style.overflow = null
      }
    }, [])
    

    return (
        <div className='fixed inset-0 bg-black/80 grid place-items-center text-black z-50'>
            <div className="relative max-w-[800px] flex bg-white rounded-md overflow-hidden">
                <img src='image/couple-login-modal.jpeg' width={400} alt="" />
                <div className="flex items-center p-8">
                    <div className="space-y-3">
                        <p className='text-2xl font-bold'>Sign into your account</p>
                        <input type="text" placeholder='email' className='w-full border border-line h-11 pl-3 outline-0 rounded-sm' />
                        <div className="flex items-center justify-between w-full border border-line rounded-sm">
                            <input type={showPass ? 'text' : 'password'} placeholder='password' className='h-11 pl-3 outline-0' />
                            {showPass ? <EyeOff onClick={() => setShowPass(!showPass)} size={16} className='mr-2 cursor-pointer' color='grey' /> : (
                                <Eye onClick={() => setShowPass(!showPass)} size={16} className='mr-2 cursor-pointer' color='grey' />
                            )}
                        </div>
                        <button className='bg-main w-full h-11 text-white cursor-pointer rounded-sm'>Login</button>
                        <div className="flex justify-between text-main">
                            <a href="#" className='hover:underline'>Register here!</a>
                            <a href="#" className='hover:underline'>Forgot password?</a>
                        </div>
                    </div>
                </div>
                <button onClick={toggleModal} className='absolute top-3 right-3 text-2xl cursor-pointer'>&times;</button>
            </div>
        </div>
    )
}

export default Modal
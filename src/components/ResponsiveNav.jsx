import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import { pageLinks } from '../constants'
import { Link } from 'react-router-dom'
import Searchbox from './Searchbox'

const ResponsiveNav = ({open, handleClose}) => {
  return (
    <div className=''>
    <AnimatePresence>
        {
            open && (
                <motion.div 
                initial={{opacity:0,y:-100}}
                animate={{opacity:1,y:0}}
                exit={{opacity:0, }}
                className='absolute left-0 top-full w-full z-50 bg-[#00473E] '
                >
                <div className='py-5'>
                    <div className='pb-3  w-4/5 mx-auto'>
                        <Searchbox/>
                    </div>
                    
                    <ul className='flex flex-col gap-4 justify-center items-center pt-3'>
                        
                        {pageLinks.map((item, index)=>(
                            <div key={index} className='uppercase text-lg text-white'>
                                <Link to={item.path}>
                                    <li className='' onClick={handleClose}>{item.title}</li>
                                </Link>
                            </div>

                        ))}
                    </ul>
                </div>
                </motion.div>
            )
        }
    </AnimatePresence>
    </div>
  )
}

export default ResponsiveNav
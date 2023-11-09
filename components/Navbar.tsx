"use client"
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { useState } from "react"
import { MdOutlineClose } from 'react-icons/md'



const Navbar = () => {



    const [showMenu,setShowMenu] =useState(false)



  return (
    <nav className=" flexBetween max-container padding-container relative z-30 py-5" >
        <Link href='/'>
            <Image  src="/hilink-logo.svg" alt="logo" width={74} height={29}/>


          
        </Link>
        <ul className="hidden h-full gap-12 lg:flex    mdl:block " >
            {NAV_LINKS.map((link)=>(
                <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold " >
                    {link.label}
                  
                </Link>
            ))}






        </ul>
        

              <Link  href="sign-in" className="flex flex-row justify-center items-center " >
                 <Button  type="button" 
                     title='' icon='/user.svg'
                     variant='btn_dark_green'
                    
                 />
            
             </Link>
     
   
        <Image src="menu.svg" alt="menu" width={32} height={32} className="inline-block cursor-pointer lg:hidden"  onClick={()=>setShowMenu(true)}/>
       

        {showMenu && (
    <div
    className=' fixed lg:hidden   w-[100%] top-0 left-0   h-screen  bg-white flex flex-col items-center'
       >
          
                  <MdOutlineClose  size={30}  className='text-3xl text-black right-4 top-2 absolute cursor-pointer  w-25 hover:text-body  duration-300'  onClick={()=>setShowMenu(false)} />
                  <div  className='flex justify-between  flex-col items-center py-5   ' >
        
                  <ul className="  h-full gap-12 " >
            {NAV_LINKS.map((link)=>(
                <Link href={link.href} key={link.key} className="regular-24 text-gray-80 flexCenter mt-3 cursor-pointer pb-2.5 transition-all hover:font-bold " >
                    {link.label}



                </Link>
              
            ))}
               <Link  href="/sign-in" className="flex flex-row justify-center items-center " >
                 <Button  type="button" 
                     title='' icon='/user.svg'
                     variant='btn_dark_green'
                    
                 />
            
             </Link>

        </ul>



                  </div>
               
        
         </div>
 )}
       


    </nav>
  )
}

export default Navbar
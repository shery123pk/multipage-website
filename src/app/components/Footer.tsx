import React from 'react'
import Link from 'next/link'
import { CiFacebook } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
const Footer = () => {
  return (
    <div className='fb bg-slate-200 flex justify-content-space-between'>
        <div>
            <h2 className='text-[22px] mt-5 mb-4 font-bold'>Core Courses</h2>
            <ul>
                <li className='mb-2'>Programming Fundamentals</li>
                <li className='mb-2' >Web2 Using NextJS</li>
                <li className='mb-2'>Earn as You Learn</li>
            </ul>
        </div>
        <div>
            <h2 className='text-[22px] mt-5 mb-4 font-bold'>Advanced Courses</h2>
            <ul>
                <li className='mb-2'>Web 3 and Metaverse</li>
                <li className='mb-2'>Cloud-Native Computing</li>
                <li className='mb-2'>Artificial Intelligence (AI) and Deep Learning</li>
                <li className='mb-2'>Ambient Computing and IoT</li>
                <li className='mb-2'>Genomics and Bionformatics </li>
                <li className='mb-2'>Network Programmability and Automation</li>
            </ul>
        </div>
        <div>
            <h2 className='text-[22px] mt-5 mb-4 font-bold'>Social Links</h2>
            <ul className='flex gap-2'>
                <li className='mb-2 text-[25px] text-blue-700'><Link href="#" target='_blank'><CiFacebook /></Link></li>
                <li className='mb-2 text-[25px] text-red-500'><Link href="#" target='_blank'><CiYoutube /></Link></li>
                <li className='mb-2 text-[25px] text-blue-700'><Link href="#" target='_blank'><CiLinkedin /></Link></li>
                <li className='mb-2 text-[25px] text-orange-500'><Link href="#" target='_blank'><FaInstagram /></Link></li>
                
            </ul>
            <Link className='flex text-[16px] gap-2 text-blue-600 underline' href="#" target='_blank'><CiMail  className='mb-2 text-[25px] text-blue-700'/>asif.alimusharaf@gmail.com</Link>

            
        </div>
    </div>
  )
}

export default Footer
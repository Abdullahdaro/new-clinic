import React from 'react'
import reward1 from '../../../public/assets/reward1.png'
import reward from '../../../public/assets/reward.png'

import pic1 from '../../../public/assets/pic1.png'
import pic2 from '../../../public/assets/pic2.png'
import pic3 from '../../../public/assets/pic3.png'
import pic4 from '../../../public/assets/pic4.png'
import pic5 from '../../../public/assets/pic5.png'
import pic7 from '../../../public/assets/pic7.png'  
import en from '../../messages/en.json'
import tr from '../../messages/tr.json'
import fr from '../../messages/fr.json'
import { useRouter } from 'next/router'
import Image from 'next/image'


export default function Europe() {
    const router = useRouter();
    const { locale } = router;

    const messages = {
        en,
        tr,
        fr,
    };

    const content = messages[locale]?.europe || messages.en.europe;

  return (
    <div className={`sm:py-16 py-6 flex items-center flex-col bg-[#DDAC680F]`}>
        <div className='xl:max-w-[1280px] xs:flex-col xs:items-center xs:justify-center'>
            <div className='text-[#3C3C3B] font-bold xs:text-xl sm:text-4xl xs:pl-10 md:pl-20 xs:justify-center xs:flex-col'>
                {content.title} <span className='text-[#DDAC68]'>{content.first}</span>
            </div>
            <div className='flex sm:pl-10 xs:pl-0 xs:flex-col sm:flex-row xs:pt-0 sm:pt-10 '>
                <div className='flex xs:flex-row sm:flex-col sm:w-[800px] xs:w-full xs:items-center xs:justify-center'>
                    <div className='flex xs:flex-col sm:flex-row relative py-2 items-center'>
                        <div className="relative w-40 h-40">
                            <div className="absolute inset-0 rounded-full bg-bg filter blur-lg"></div>
                            <Image src={reward1} className='w-40 z-10 relative' style={{ zIndex: 10 }} />
                        </div>
                        <span className='font-bold xs:text-md md:text-2xl xs:pl-8 md:pl-10'>    {content.second}<br />     {content.third}</span>
                    </div>
                    <div className='flex xs:flex-col sm:flex-row relative py-2 items-center'>
                        <div className="relative w-40 h-40">
                            <div className="absolute inset-0 rounded-full bg-bg filter blur-lg"></div>
                            <Image src={reward} className='w-40 z-10 relative' style={{ zIndex: 10 }} />
                        </div>
                            <span className='font-bold xs:text-md md:text-2xl xs:pl-6 md:pl-10'>     {content.fourth} <br />   {content.fifth}</span>
                    </div>   
                    <a href={content.wpl} className='mt-5 flex xs:ml-20 xs:hidden md:flex'>
                        <Image src={content.wp} width={240} height={80} className='w-60 h-20 hover:scale-125' />
                    </a>
                </div>
                <div className='sm:items-start xs:items-center pl-10 gap-2 max-w-[800px] flex flex-wrap'>
                    <Image src={pic1} className='sm:w-[200px] sm:h-[250px] xs:w-[150px] xs:h-[150px] rounded-md' />
                    <Image src={pic2} className='sm:w-[200px] sm:h-[250px] xs:w-[150px] xs:h-[150px] rounded-md ' />
                    <Image src={pic3} className='sm:w-[200px] sm:h-[250px] xs:w-[150px] xs:h-[150px] rounded-md' />
                    <Image src={pic4} className='sm:w-[200px] sm:h-[200px] xs:w-[150px] xs:h-[150px] rounded-md ' />
                    <Image src={pic5} className='sm:w-[200px] sm:h-[200px] xs:w-[150px] xs:h-[150px] rounded-md ' />
                    <Image src={pic7} className='sm:w-[200px] sm:h-[200px] xs:w-[150px] xs:h-[150px] rounded-md ' />
                </div>
            </div>
        </div>
    </div>
  )
}

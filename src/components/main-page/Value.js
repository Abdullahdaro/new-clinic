import React from 'react'
import {useRouter} from 'next/router'
import en from '../../messages/en.json'
import tr from '../../messages/tr.json'
import fr from '../../messages/fr.json'

export default function Value() {
    const router = useRouter();
    const { locale } = router;
    
    // Get the content based on locale
    const messages = {
      en,
      fr,
      tr,
    };
    
    // Get the content for the current locale, fallback to English
    const content = messages[locale]?.value || messages.en.value;

  return (
    <div className='flex items-center justify-center w-full'>
      <div className={`sm:py-16 py-6 xl:max-w-[1280px] w-full`}>
          <div class=" items-center justify-center transform font-semibold xs:text-3xl sm:text-3xl md:text-[50px] xl:text-[75px] flex leading-90 tracking-tighter capitalize text-main">
              {content.title}
          </div>
          <div class="flex flex-wrap justify-center p-10 gap-4 sm:mt-10 md:mt-20">
              <div class="grid sm:grid-cols-1 md:grid-cols-2 xs:gap-2 sm:gap-4 w-full">
                <li class="rounded-lg py-2 px-10 bg-opacity-10 bg-[#DDAC68] xs:text-md sm:text-xl leading-90.443 tracking-tighter capitalize font-semibold">{content.first}</li>
                  <li class="rounded-lg py-2 px-10 bg-opacity-10 bg-[#DDAC68] xs:text-md sm:text-xl leading-90.443 tracking-tighter capitalize font-semibold">{content.second}</li>
                  <li class="rounded-lg py-2 px-10 bg-opacity-10 bg-[#DDAC68] xs:text-md sm:text-xl leading-90.443 tracking-tighter capitalize font-semibold">{content.third}</li>
                  <li class="rounded-lg py-2 px-10 bg-opacity-10 bg-[#DDAC68] xs:text-md sm:text-xl leading-90.443 tracking-tighter capitalize font-semibold">{content.fourth}</li>
                  <li class="rounded-lg py-2 px-10 bg-opacity-10 bg-[#DDAC68] xs:text-md sm:text-xl leading-90.443 tracking-tighter capitalize font-semibold">{content.fifth}</li>
                  <li class="rounded-lg py-2 px-10 bg-opacity-10 bg-[#DDAC68] xs:text-md sm:text-xl leading-90.443 tracking-tighter capitalize font-semibold">{content.sixth}</li>
                  <li class="rounded-lg py-2 px-10 bg-opacity-10 bg-[#DDAC68] xs:text-md sm:text-xl leading-90.443 tracking-tighter capitalize font-semibold">{content.seventh} </li>
                  <li class="rounded-lg py-2 px-10 bg-opacity-10 bg-[#DDAC68] xs:text-md sm:text-xl leading-90.443 tracking-tighter capitalize font-semibold">{content.eighth} </li>
                  <li class="rounded-lg py-2 px-10 bg-opacity-10 bg-[#DDAC68] xs:text-md sm:text-xl leading-90.443 tracking-tighter capitalize font-semibold">{content.ninth} </li>
                  <li class="rounded-lg py-2 px-10 bg-opacity-10 bg-[#DDAC68] xs:text-md sm:text-xl leading-90.443 tracking-tighter capitalize font-semibold">{content.tenth} </li>
                  <li class="rounded-lg py-2 px-10 bg-opacity-10 bg-[#DDAC68] xs:text-md sm:text-xl leading-90.443 tracking-tighter capitalize font-semibold">{content.eleventh} </li>
                  <li class="rounded-lg py-2 px-10 bg-opacity-10 bg-[#DDAC68] xs:text-md sm:text-xl leading-90.443 tracking-tighter capitalize font-semibold">{content.twelfth}</li>
              </div>
          </div>
      </div>
    </div>
  )
}
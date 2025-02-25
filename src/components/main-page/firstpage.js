import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
// Import messages
import en from '../../messages/en.json';
import fr from '../../messages/fr.json';
import tr from '../../messages/tr.json';

export default function FirstPage() {
  const router = useRouter();
  const { locale } = router;
  
  // Get the content based on locale
  const messages = {
    en,
    fr,
    tr,
  };
  
  // Get the content for the current locale, fallback to English
  const content = messages[locale]?.firstpage || messages.en.firstpage;

  const [sm, setSm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    const handleResize = () => setSm(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = 'https://crm.hopmd.com/rest/6/gbne21xsz78ryy88/crm.lead.add.json';

    const data = {
      FIELDS: {
        NAME: formData.name,
        EMAIL: [{ VALUE: formData.email }],
        PHONE: [{ VALUE: formData.phone }],
        SOURCE_ID: '23',
      },
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Lead data submitted successfully!');
        setFormData({ name: '', email: '', phone: '' });
      } else {
        alert('Failed to submit lead data.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className="flex flex-col w-full items-center relative h-screen">
      <img loading='lazy' className="absolute z-0 inset-0 w-full h-full object-cover opacity-40" src={content.images.background} alt="Background" />
      <img
        loading="lazy"
        className={`absolute h-full  w-[900px] z-0 object-cover ${
          sm ? 'ml-80 opacity-100 blur-ss' : 'blur-50'
        }`}
        src={content.images.main}
        alt="Main1"
      />
      <div className="z-10 flex flex-col md:flex-row md:justify-between w-full max-w-[1280px] p-4">
        <div className="flex flex-col items-start">
          <Image 
            loading="lazy" 
            src={content.images.first} 
            width={sm ? 240 : 300}
            height={sm ? 180 : 225}
            alt="First" 
          />
          <Image 
            loading="lazy" 
            src={content.images.second} 
            width={sm ? 240 : 300}
            height={sm ? 180 : 225}
            alt="Second" 
          />
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-xl">
          <h1 className="text-2xl font-bold text-main mb-4">{content.formtitle}</h1>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <label className="mb-2 font-semibold">{content.formname}</label>
            <input
              className="border rounded-md p-2 mb-4"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={content.fillname}
              required
            />

            <label className="mb-2 font-semibold">{content.formPhone}</label>
{/*             <PhoneInput
              international
              defaultCountry="US"
              value={formData.phone}
              onChange={handlePhoneChange}
              className="border rounded-md p-2 mb-4"
            /> */}

            <label className="mb-2 font-semibold">{content.formEmail}</label>
            <input
              className="border rounded-md p-2 mb-4"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={content.fillEmail}
              required
            />

            <button type="submit" className="bg-main text-white rounded-md p-2 font-bold">
              {content.submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

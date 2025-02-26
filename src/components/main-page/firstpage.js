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
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute z-0 inset-0 w-full h-full object-cover"
      >
        <source src="/videos/WEPDSKEN.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

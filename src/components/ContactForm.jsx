import React, { useState } from 'react';
import sentIcon from '../assets/sentIcon.svg';
import { formTitle, mailMsgNotice, mailSentMsg, resendAMsg } from '../constants';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [msgSent, setMsgSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    return newErrors;
  };

  const handleSendEmail = () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      const { fullName, email, message } = formData;
      const subject = `Message from ${fullName}`;
      const body = `Full Name: ${fullName}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

      window.location.href = `mailto:webdesignhossam@gmail.com?subject=${subject}&body=${body}`;
      setErrors({});
      setMsgSent(true);
    } else {
      setErrors(newErrors);
    }
  };

  const handleSendingNewMsg = () => {
    setMsgSent(false);
    setFormData(prevData => ({ ...prevData, message: "" }));
  };

  return (
    <>
      {msgSent ? (
        <div className='flex flex-col justify-center items-center mx-5 md:mx-10 transition-all animate-scaleIn duration-600'>
          <img className="w-12 h-12 mb-10" src={sentIcon} loading="lazy" alt='sent-icon' />
          <h2 className='text-center text-white font-custom font-medium text-4xl mb-5'>{mailSentMsg}</h2>
          <p className='text-white text-center font-custom font-normal text-lg mx-5 md:mx-20 mb-10'>{mailMsgNotice}</p>
          <button onClick={handleSendingNewMsg} className="block font-custom font-medium rounded-full uppercase transition-all duration-250 ease-in-out bg-white text-black py-3 px-6 duration-300 hover:bg-gray-300">{resendAMsg}</button>
        </div>
      ) : (
        <div className='transition-all animate-scaleIn duration-600'>
          <h2 className="w-full md:w-2/3 text-white uppercase cursor-default font-custom font-medium text-3xl mb-10 text-start">
            {formTitle}
          </h2>
          <form>
            <div className="mb-6">
              <label className="block text-[#F8F8F599] font-custom mb-2">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={`w-full p-4 bg-black rounded-xl text-white placeholder-[#F8F8F599] border ${errors?.fullName ? 'border-red-500' : 'border-[#F8F8F599]'} focus:outline-none focus:ring-2 focus:ring-gray-500`}
                required
              />
              {errors?.fullName && <p className="text-red-500 text-sm">{errors?.fullName}</p>}
            </div>

            <div className="mb-6">
              <label className="block text-[#F8F8F599] font-custom mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`w-full p-4 bg-black rounded-xl text-white placeholder-[#F8F8F599] border ${errors?.email ? 'border-red-500' : 'border-[#F8F8F599]'} focus:outline-none focus:ring-2 focus:ring-gray-500`}
                required
              />
              {errors?.email && <p className="text-red-500 text-sm">{errors?.email}</p>}
            </div>

            <div className="mb-6">
              <label className="block text-[#F8F8F599] font-custom mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows="4"
                className={`w-full p-4 bg-black rounded-xl text-white placeholder-[#F8F8F599] border ${errors?.message ? 'border-red-500' : 'border-[#F8F8F599]'} focus:outline-none focus:ring-2 focus:ring-gray-500`}
                required
              />
              {errors?.message && <p className="text-red-500 text-sm">{errors?.message}</p>}
            </div>

            <button
              type="button"
              onClick={handleSendEmail}
              className="block w-full font-custom font-medium rounded-full uppercase transition-all duration-250 ease-in-out bg-white text-black py-3 duration-300 hover:bg-gray-300"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ContactForm;

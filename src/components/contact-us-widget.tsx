// THE FOLLOWING 2 TS RULES WERE ADDED BECAUSE EMAILJS RETURNS AN ANY TYPE
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

/*
 * Fair Protocol - Landing Page
 * Copyright (C) 2023 Fair Protocol
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 */
import emailjs from '@emailjs/browser';
import { CheckCircleRounded } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { SyntheticEvent, useState } from 'react';
import { useForm } from 'react-hook-form';

type ContactFormData = {
  user_fullname: string;
  user_email: string;
  user_message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, isValid, errors },
    reset,
  } = useForm<ContactFormData>({ mode: 'onBlur' });
  const [stateMessage, setStateMessage] = useState<null | 'sent' | 'error'>(null);

  const submitMessage = async () => {
    const SERVICE_ID = 'service_5s8jchq';
    const TEMPLATE_ID = 'template_231dukm';
    const PUBLIC_KEY = '4HHqO-lLCP9kvCE2z';

    setStateMessage(null);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, 'contact-us-form', PUBLIC_KEY);
      setStateMessage('sent');
      reset({});
    } catch (error) {
      console.log(error);
      setStateMessage('error');
    }
  };

  function onPromise<T>(promise: (event: SyntheticEvent) => Promise<T>) {
    return (event: SyntheticEvent) => {
      if (promise) {
        promise(event).catch((error) => {
          console.log('Unexpected error', error);
        });
      }
    };
  }

  return (
    <div className='w-full'>
      <form
        className='w-full flex flex-col gap-3 items-center px-4'
        onSubmit={handleSubmit(submitMessage)}
        id='contact-us-form'
      >
        <span className='text-neutral-700 font-medium w-full pl-2 -mb-3'>Full Name</span>
        <input
          type='text'
          maxLength={200}
          id='input-fullname'
          className='w-full form-input'
          placeholder='How should we call you?'
          disabled={isSubmitting}
          {...register('user_fullname', { required: true, maxLength: 100 })}
          aria-invalid={errors.user_fullname ? 'true' : 'false'}
        />
        <span className='text-neutral-700 font-medium w-full pl-2 -mb-3'>Email</span>
        <input
          type='email'
          maxLength={200}
          id='input-email'
          className='w-full form-input'
          placeholder='Where can we reach you?'
          disabled={isSubmitting}
          {...register('user_email', { required: true, maxLength: 100 })}
          aria-invalid={errors.user_email ? 'true' : 'false'}
        />
        <span className='text-neutral-700 font-medium w-full pl-2 -mb-3'>Message</span>
        <textarea
          rows={10}
          maxLength={5000}
          id='input-message'
          className='w-full form-input'
          placeholder='How can we help? Feel free to share any defails.'
          disabled={isSubmitting}
          {...register('user_message', { required: true, maxLength: 5000 })}
          aria-invalid={errors.user_message ? 'true' : 'false'}
        />

        {isSubmitting && (
          <motion.div
            initial={{ opacity: 0, y: '-10px' }}
            animate={{ opacity: 1, y: 0 }}
            className='w-full flex justify-center mt-8'
          >
            <div className='px-4 py-1 rounded-xl bg-white flex gap-3 items-center text-slate-700 font-medium'>
              <CircularProgress size={18} thickness={4} />
              Sending your message...
            </div>
          </motion.div>
        )}

        {!isSubmitting && stateMessage === 'sent' && (
          <motion.div
            initial={{ opacity: 0, y: '-10px' }}
            animate={{ opacity: 1, y: 0 }}
            className='w-full flex justify-center mt-8'
          >
            <div className='px-4 py-1 rounded-xl bg-white flex gap-2 items-center text-green-700 font-medium'>
              <CheckCircleRounded />
              Your message was sent. Thank you!
            </div>
          </motion.div>
        )}

        {!isSubmitting && stateMessage && stateMessage === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: '-10px' }}
            animate={{ opacity: 1, y: 0 }}
            className='w-full flex justify-center mt-8'
          >
            <div className='px-4 py-1 rounded-xl bg-white flex gap-2 items-center text-red-950 font-medium'>
              <CheckCircleRounded />
              An error ocurred. Please try again.
            </div>
          </motion.div>
        )}

        <div className='w-full flex flex-col justify-end items-center mt-6'>
          <button
            type='button'
            className='button-big-text smaller w-fit'
            disabled={isSubmitting || !isDirty || !isValid}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

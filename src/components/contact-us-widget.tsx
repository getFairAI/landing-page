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
import { CancelRounded, CheckCircleRounded } from '@mui/icons-material';
import { CircularProgress, TextField } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface ContactFormData {
  userFullname: string;
  userEmail: string;
  userMessage: string;
}

type fieldsOptionsForRecord = 'userFullname' | 'userEmail' | 'userMessage';

export default function ContactForm() {
  const defaultValues = {
    userFullname: '',
    userEmail: '',
    userMessage: '',
  };

  const {
    register,
    getValues,
    handleSubmit,
    formState: { isSubmitting, isDirty, isValid, errors },
    reset,
  } = useForm<ContactFormData>({ mode: 'onChange', defaultValues: defaultValues });
  const [stateMessage, setStateMessage] = useState<null | 'sent' | 'error'>(null);

  const submitMessage = async () => {
    const SERVICE_ID = 'service_5s8jchq';
    const TEMPLATE_ID = 'template_231dukm';
    const PUBLIC_KEY = '4HHqO-lLCP9kvCE2z';

    setStateMessage(null);
    try {
      const userValues: Record<fieldsOptionsForRecord, string> = getValues();

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, userValues, {
        publicKey: PUBLIC_KEY,
      });
      setStateMessage('sent');
      reset(defaultValues);
    } catch (error) {
      console.error('Error submitting form data:', error);
      setStateMessage('error');
    }
  };

  return (
    <div className='w-full'>
      <form className='w-full flex flex-col gap-3 items-center px-4' id='contact-us-form'>
        <span className='text-neutral-700 font-medium w-full pl-2 -mb-3'>Full Name</span>
        <TextField
          variant='outlined'
          maxLength={200}
          id='input-fullname'
          className='w-full'
          placeholder='How should we call you?'
          disabled={isSubmitting}
          {...register('userFullname', { required: true, maxLength: 100 })}
          error={errors.userFullname ? true : false}
          helperText={errors.userFullname ? 'Please provide your full name.' : false}
        />
        <span className='text-neutral-700 font-medium w-full pl-2 -mb-3'>Email</span>
        <TextField
          type='email'
          maxLength={200}
          id='input-email'
          className='w-full'
          placeholder='Where can we reach you?'
          disabled={isSubmitting}
          {...register('userEmail', {
            required: true,
            maxLength: 100,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          error={errors.userEmail ? true : false}
          helperText={errors.userEmail ? 'Please provide a valid email.' : false}
        />
        <span className='text-neutral-700 font-medium w-full pl-2 -mb-3'>Message</span>
        <TextField
          multiline
          minRows={8}
          maxLength={5000}
          id='input-message'
          className='w-full'
          placeholder='How can we help? Feel free to share any defails.'
          disabled={isSubmitting}
          {...register('userMessage', { required: true, maxLength: 5000 })}
          error={errors.userMessage ? true : false}
          helperText={errors.userMessage ? 'Please type your message.' : false}
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
            <div className='px-4 py-1 rounded-xl bg-white flex gap-2 items-center text-red-700 font-medium'>
              <CancelRounded />
              An error ocurred. Please try again.
            </div>
          </motion.div>
        )}

        <div className='w-full flex flex-col justify-end items-center mt-6'>
          <button
            type='submit'
            className='button-big-text smaller w-fit'
            disabled={isSubmitting || !isDirty || !isValid}
            onClick={handleSubmit(submitMessage)}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

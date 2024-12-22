import { FC, useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactSection: FC = () => {
  useEffect(() => {
    emailjs.init('0bBoaq677OSmJjROF');
  }, []);

  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  // Rate limiting
  const [lastSubmission, setLastSubmission] = useState<Date | null>(null);
  const SUBMISSION_COOLDOWN = 60000; // 1 minute in milliseconds

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check rate limiting
    if (lastSubmission && Date.now() - lastSubmission.getTime() < SUBMISSION_COOLDOWN) {
      setStatus('error');
      setErrorMessage('Please wait a moment before submitting again.');
      return;
    }

    // Validate captcha
    if (!captchaToken) {
      setStatus('error');
      setErrorMessage('Please complete the CAPTCHA verification.');
      return;
    }

    if (!form.current) return;

    setStatus('loading');

    try {
      const result = await emailjs.sendForm(
        'service_0h2zx0c',
        'template_seqbqzd',
        form.current,
        '0bBoaq677OSmJjROF'
      );

      if (result.text === 'OK') {
        setStatus('success');
        form.current.reset();
        setCaptchaToken(null);
        setLastSubmission(new Date());
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">
          Get in Touch
        </h2>
        
        <p className="text-slate-300 mb-8 text-center">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="user_name" className="block text-sm font-medium text-white">
              Name
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              required
              className="mt-1 block w-full rounded-md bg-slate-800 border border-slate-700 
                       text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="user_email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              required
              className="mt-1 block w-full rounded-md bg-slate-800 border border-slate-700 
                       text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-white">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="mt-1 block w-full rounded-md bg-slate-800 border border-slate-700 
                       text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="mt-1 block w-full rounded-md bg-slate-800 border border-slate-700 
                       text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey="6LcRpqIqAAAAAJJheAdwOa_ytjdt3ZGL7TDcD8wZ"
              onChange={(token) => setCaptchaToken(token)}
              theme="dark"
            />
          </div>

          {status === 'error' && (
            <div className="text-red-500 text-sm">
              {errorMessage}
            </div>
          )}

          {status === 'success' && (
            <div className="text-green-500 text-sm">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold
                       hover:bg-blue-700 transition-colors disabled:opacity-50
                       disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
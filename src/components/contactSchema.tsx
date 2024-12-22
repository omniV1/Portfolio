import { FC, useState } from 'react';
import { z } from 'zod';
import ReCAPTCHA from 'react-google-recaptcha';

// Email validation schema
const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
  subject: z.string().min(2).max(200),
  honeypot: z.string().max(0), // Should always be empty - spam protection
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection: FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // Hidden field to catch bots
  });

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

    // Validate form data
    try {
      contactSchema.parse(formData);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Please check your inputs and try again.');
      return;
    }

    // If honeypot field is filled, silently reject (bot submission)
    if (formData.honeypot) {
      setStatus('success'); // Fake success to not alert bots
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          captchaToken,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
      setCaptchaToken(null);
      setLastSubmission(new Date());
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

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Hidden honeypot field */}
          <div className="hidden">
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={(e) => setFormData(prev => ({ ...prev, honeypot: e.target.value }))}
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="mt-1 block w-full rounded-md bg-slate-800 border border-slate-700 
                       text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
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
              value={formData.subject}
              onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
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
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              className="mt-1 block w-full rounded-md bg-slate-800 border border-slate-700 
                       text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY || ''}
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
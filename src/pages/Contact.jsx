import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, Mail, MessageCircle, Facebook } from 'lucide-react';

const Contact = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    if (location.hash === '#inquiry-form') {
      const formElement = document.getElementById('inquiry-form');
      const messageBox = document.getElementById('message-box');
      if (formElement) {
        // slight delay to ensure rendering and scroll completes
        setTimeout(() => {
          formElement.scrollIntoView({ behavior: 'smooth' });
          if (messageBox) {
            setTimeout(() => messageBox.focus(), 600); // Wait for scroll animation
          }
        }, 100);
      }
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the phone number (assuming +92 for Pakistan based on your inspiration links, replacing the leading 0)
    const phoneNumber = '923249442092';
    
    // Construct the message text
    const text = `*New Website Inquiry*
--------------------------
*Name:* ${formData.name}
*Email:* ${formData.email}
*Subject:* ${formData.subject}
*Message:* ${formData.message}`;

    // Encode the text for URL
    const encodedText = encodeURIComponent(text);
    
    // Create the WhatsApp API link
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-brand-light min-h-screen pb-20">
      {/* Page Header */}
      <section className="bg-brand-green py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1596443686812-2f45229eebc3?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">#Let's_Talk</h1>
          <p className="text-brand-gold text-lg md:text-xl font-medium">We love to hear from you.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid lg:grid-cols-3 gap-10">
          
          {/* Contact Details (Left Column) */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-dark mb-6">Contact Details</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0 mt-1">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-brand-dark text-lg">WhatsApp</h5>
                    <p className="text-gray-600 mt-1">+92 (324) 944-2092</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0 mt-1">
                    <Facebook size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-brand-dark text-lg">Facebook</h5>
                    <a href="https://www.facebook.com/people/Students-1st-Choice/100084855978178/" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:text-brand-gold transition-colors mt-1 block">Student's 1st Choice</a>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0 mt-1">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-brand-dark text-lg">Email</h5>
                    <p className="text-gray-600 mt-1">contact@students1stchoice.com<br />sales@students1stchoice.com</p>
                  </div>
                </li>

              </ul>
            </div>
          </div>

          {/* Form and Map (Right Column) */}
          <div className="lg:col-span-2 space-y-10">
            {/* Form */}
            <div id="inquiry-form" className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 scroll-mt-24">
              <h3 className="text-2xl font-bold text-brand-dark mb-2">Send a Message</h3>
              <p className="text-gray-500 mb-6">Fill out the form below and it will be sent directly to our WhatsApp.</p>
              
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all" 
                      placeholder="john@school.edu" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all" 
                    placeholder="Bulk Order Inquiry" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message-box"
                    name="message"
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all resize-none" 
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full shadow-md flex items-center justify-center gap-2">
                  <MessageCircle size={20} /> Send via WhatsApp
                </button>
              </form>
            </div>


          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

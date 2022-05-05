import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useState , useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const location = useLocation()
  const x = location.state;
  const [emailForm, setEmailForm] = useState({
    name:x.name,
    email: x.email,
  });

  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_wb6zqi8', 'template_jvkjpvp', emailForm, 'G1JVj5lolw5wfNIHI')
      .then(response => {
        console.log('SUCCESS!', response);
        setEmailForm({
          name: '',
          email: ''
        });
        setStatus('SUCCESS');
      }, error => {
        console.log('FAILED...', error);
      });
  }

  useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setEmailForm(emailForm => ({
      ...emailForm,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
    <div className="lg:mt-48 lg:mr-48 pt-6 pb-8 bg-white shadow-xl rounded p-5">
      {status && renderAlert()}
      <form onSubmit={handleSubmit}>
        <h3 className="text-gray-700 mb-7 text-xl font-semibold">Send message</h3>
        <TextField value={emailForm.name} handleChange={handleChange} style={{marginTop:"20px" , width: "300px"}} label="Full Name" name="fullName" type="text" placeholder="John Doe" />
        <TextField value={emailForm.email} handleChange={handleChange} style={{marginTop:"20px" , width: "300px"}} label="E-Mail" name="email" type="email" placeholder="jphn@example.com" />
        <button type="submit"
          className="mt-4 bg-gray-900 text-gray-200 rounded hover:bg-gray-700 px-4 py-2 focus:outline-none" style={{marginLeft: "80px"}}
        >Send 
        </button>
      </form>
    </div>
    </>
  );
}

const renderAlert = () => (
  <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
    <p>your message submitted successfully</p>
    {window.location.reload(false)}
  </div>
)







 
     
      
 
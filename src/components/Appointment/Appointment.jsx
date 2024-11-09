// "use client";
// import contactTwoData from "@/data/ContactTwoData";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Link from "next/link";
// import React, { Fragment, useEffect, useRef, useState } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import emailjs from '@emailjs/browser';
// import toast from "react-hot-toast";
// const {
//   bg,

//   infoBoxs,

//   infoText,
//   infoTitle,
//   socials,
//   tagLine,
//   text,
//   title,
// } = contactTwoData;
// const inputs = ["name", "email", "message"];

// const Appointment = ({ contact }) => {
//   const [mounted, setMounted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const form = useRef(null)
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null;
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setLoading(true);
//     const formData = new FormData(form.current);
//     const data = {
//       name: formData.get('full_name'),
//       email: formData.get('email_id'),
//       number: formData.get('phone_number'),
//       lname: formData.get('last_name'),
//       message: formData.get('message'),
//     };

//     try {
//       const response = await fetch('https://contact-us-api.obliqware.pk/send-email', {
//       // const response = await fetch('http://localhost:3001/send-email', {
//       // const response = await fetch('https://obliqware-website-contact-us-api.vercel.app/send-email', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
//         toast.success('Email sent successfully!');
//       } else {
//         toast.error('Failed to send email.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       toast.error('Failed to send email.');
//     }finally {
//       setLoading(false);
//     } 

//     e.target.reset();
//   };

//   return (
//     <section className={`${contact === 'page' ? 'contact-two--contact-page' : ''} contact-two`} id="contact">
//       <Container>
//       <div className='contact-two__wrapper'>
//           <Row>
//             <Col lg={12}>
//               <div className='contact-two__content'>
//                 <div className='sec-title-two text-left'>
//                   <h6 className='sec-title-two__tagline'>
//                     <span className='sec-title-two__tagline__left icofont-rounded-double-left'></span>
//                     {tagLine}
//                     <span className='sec-title-two__tagline__right icofont-rounded-double-right'></span>
//                   </h6>
//                   <h3 className='sec-title-two__title'>{title}</h3>
//                 </div>
//                 <p className='contact-two__content__text'>
//                   {text.split("\n").map((t, i) => (
//                     <Fragment key={i}>
//                       {t}
//                       <br />
//                     </Fragment>
//                   ))}
//                 </p>
//                 <form
//                   ref={form}
//                   onSubmit={handleSubmit}
//                   className='contact-two__form contact-form-validated form-one'
//                   action='#'
//                 >
//                   <div className='form-one__group'>
//                     <div className='form-one__control'>
//                       <input type='text' name='full_name' placeholder='First Name' />
//                     </div>
//                     <div className='form-one__control'>
//                       <input
//                         type='email'
//                         name='email_id'
//                         placeholder='Email address'
//                       />
//                     </div>
//                     <div className='form-one__control'>
//                       <input type='text' name='phone_number' placeholder='Phone Number' />
//                     </div>
//                     <div className='form-one__control'>
//                       <input type='text' name='last_name' placeholder='Last Name' />
//                     </div>
//                     <div className='form-one__control form-one__control--full'>
//                       <textarea name='message' placeholder='Message'></textarea>
//                     </div>
//                     <div className='form-one__control form-one__control--full'>
//                       <button type='submit' className='tolak-btn'>
//                         {/* <b>Send Request</b> */} <b>{loading ? 'Sending' : 'Send Request'}</b>
//                         <span></span>
//                       </button>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </Col>
//           </Row>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Appointment;
"use client";
import contactTwoData from "@/data/ContactTwoData";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import './appointment.css'
import toast from "react-hot-toast";

const { bg, infoBoxs, infoText, infoTitle, socials, tagLine, text, title } = contactTwoData;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Appointment = ({ contact }) => {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(form.current);
    const data = {
      firstName: formData.get('first_name'),
      lastName: formData.get('last_name'),
      email: formData.get('email_id'),
      phoneNumber: formData.get('phone_number'),
      projectType: formData.get('project_type'),
      description: formData.get('description'),
      preferredDateTime: formData.get('preferred_date_time'),
      duration: formData.get('duration'),
      referralSource: formData.get('referral_source'),
      specificRequirements: formData.get('specific_requirements'),
    };

    try {
      const response = await fetch('http://localhost:3002/book-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Email sent successfully!');
      } else {
        toast.error('Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to send email.');
    } finally {
      setLoading(false);
    }

    e.target.reset();
  };

  return (
    <section className={`${contact === 'page' ? 'contact-two--contact-page' : ''} contact-two`} id="contact">
      <Container>
        <div className='contact-two__wrapper'>
          <Row>
            <Col lg={12}>
              <div className='contact-two__content'>
                <div className='sec-title-two text-left'>
                  <h6 className='sec-title-two__tagline'>
                    <span className='sec-title-two__tagline__left icofont-rounded-double-left'></span>
                    {tagLine}
                    <span className='sec-title-two__tagline__right icofont-rounded-double-right'></span>
                  </h6>
                  <h3 className='sec-title-two__title'>{title}</h3>
                </div>
                <p className='contact-two__content__text'>
                  {text.split("\n").map((t, i) => (
                    <Fragment key={i}>
                      {t}
                      <br />
                    </Fragment>
                  ))}
                </p>
                <form
                  ref={form}
                  onSubmit={handleSubmit}
                  className='contact-two__form contact-form-validated form-one'
                  action='#'
                >
                  <div className='form-one__group'>
                    <div className='form-one__control'>
                      <input type='text' name='first_name' placeholder='First Name' />
                    </div>
                    <div className='form-one__control'>
                      <input type='text' name='last_name' placeholder='Last Name' />
                    </div>
                    <div className='form-one__control'>
                      <input type='email' name='email_id' placeholder='Email Address' />
                    </div>
                    <div className='form-one__control'>
                      <input type='text' name='phone_number' placeholder='Phone Number' />
                    </div>

                    <div className='form-one__control form-one__control--full'>
                      <textarea name='description' placeholder='Description of Project/Requirements'></textarea>
                    </div>
                    {/* <div className='form-one__control'>
                      <input type='text' name='preferred_date_time' placeholder='Preferred Date and Time' />
                    </div> */}
                    <div className='form-one__control'>
                      <input
                        className='form-one__control'
                        type='datetime-local'
                        name='preferred_date_time'
                        placeholder='Preferred Date and Time'
                      />
                    </div>
                    <div className='form-one__control'>
                      <select name='duration' className='form-one__control'>
                        <option value='' disabled selected>Duration</option>
                        <option value='1-2 weeks'>1-2 weeks</option>
                        <option value='1 month'>1 month</option>
                        <option value='3 months'>3 months</option>
                        <option value='Flexible'>Flexible</option>
                      </select>
                    </div>
                    <div className='form-one__control'>
                      <select name='referral_source' className='form-one__control'>
                        <option value='' disabled selected>How did you hear about us?</option>
                        <option value='Google'>Google Search</option>
                        <option value='Social Media'>Social Media</option>
                        <option value='Social Media'>Social Media</option>
                        <option value='Referral/Friend'>Referral/Friend</option>
                        <option value='Other'>Other</option>
                      </select>
                    </div>
                    <div className='form-one__control'>
                      <select name='project_type' className='form-one__control'>
                        <option value='' disabled selected>Service/Project Type</option>
                        <option value='Web Development'>Web Development</option>
                        <option value='Mobile App Development'>Mobile App Development</option>
                        <option value='Artificial Intelligence Solutions and Data Science'>Artificial Intelligence Solutions and Data Science</option>
                        <option value='UI/UX Design'>UI/UX Design</option>
                        <option value='Graphic Design'>Graphic Design</option>
                        <option value='Specialized Offerings'>Specialized Offerings</option>
                        <option value='Other'>Other</option>
                      </select>
                    </div>
                    <div className='form-one__control form-one__control--full'>
                      <textarea name='specific_requirements' placeholder='Any specific requirements or questions?'></textarea>
                    </div>
                    <div className='form-one__control--full' style={{ border: 'none !important', background: 'none !important' }}>
                      <button type='submit' className='tolak-btn'>
                        <b>{loading ? 'Sending' : 'Send'}</b>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Appointment;

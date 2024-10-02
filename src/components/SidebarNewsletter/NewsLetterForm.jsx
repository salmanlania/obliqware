"use client";
import React, { useEffect, useState } from "react";

const NewsLetterForm = ({ status, message, onValidated, mail, ctaThree }) => {
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    const tolakBtns = document.querySelectorAll(".tolak-btn");

    if (tolakBtns.length > 0) {
      tolakBtns.forEach((btn) => {
        const handleMouseEnter = (e) => {
          const parentOffset = btn.getBoundingClientRect(),
            relX = e.pageX - window.scrollX - parentOffset.left,
            relY = e.pageY - window.scrollY - parentOffset.top;

          const span = btn.querySelector("span");
          if (span) {
            span.style.top = relY + "px";
            span.style.left = relX + "px";
          }
        };

        const handleMouseOut = (e) => {
          const parentOffset = btn.getBoundingClientRect(),
            relX = e.pageX - window.scrollX - parentOffset.left,
            relY = e.pageY - window.scrollY - parentOffset.top;

          const span = btn.querySelector("span");
          if (span) {
            span.style.top = relY + "px";
            span.style.left = relX + "px";
          }
        };

        btn.addEventListener("mouseenter", handleMouseEnter);
        btn.addEventListener("mouseout", handleMouseOut);

        // Clean up event listeners on component unmount
        return () => {
          btn.removeEventListener("mouseenter", handleMouseEnter);
          btn.removeEventListener("mouseout", handleMouseOut);
        };
      });
    }
  }, [isMount]);

  useEffect(() => {
    setIsMount(true);
  }, []);
  let email;

  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  if (!isMount) {
    return null;
  }
  return (
    <>
      {/* ctaThree ? "cta-three__newsletter" : */}
      <div
        className={`${
          mail === "one"
            ? "mail-section__newsletter"
            : ctaThree
            ? "cta-three__newsletter"
            : mail === "two"
            ? "mail-section-two__newsletter"
            : "sidebar-one__newsletter"
        } mc-form"`}
      >
        <input
          ref={(node) => (email = node)}
          type='text'
          name='EMAIL'
          placeholder='Email address'
        />
        {mail || ctaThree ? (
          <>
            <button onClick={submit} type='submit' className='tolak-btn'>
              <b>Subscribe</b>
              <span></span>
              <span className='sr-only'>Subscribe</span>
            </button>
          </>
        ) : (
          <>
            <button
              onClick={submit}
              type='submit'
              className='fas fa-paper-plane'
            >
              <span className='sr-only'>submit</span>
            </button>
          </>
        )}
      </div>
      <div className='mc-form__response'>
        {status === "sending" && <div>sending...</div>}
        {status === "error" && (
          <div dangerouslySetInnerHTML={{ __html: message }} />
        )}
        {status === "success" && <div>Subscribed !</div>}
      </div>
    </>
  );
};

export default NewsLetterForm;

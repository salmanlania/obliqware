import React from "react";

import SidebarNewsletter from "../SidebarNewsletter/SidebarNewsletter";

const Mail = () => {
  return (
    <section className='mail-section'>
      <div className='container'>
        <div className='mail-section__wrapper'>
          <div className='row'>
            <div className='col-md-12 col-lg-4'></div>
            <div className='col-md-5 col-lg-3'>
              <div className='mail-section__content'>
                <h3 className='mail-section__content__title'>Our Newsletter</h3>
                <p className='mail-section__content__text'>
                  We are dolor sit amet csectetur
                </p>
              </div>
            </div>
            <div className='col-md-7 col-lg-5'>
              <SidebarNewsletter mail='one' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mail;

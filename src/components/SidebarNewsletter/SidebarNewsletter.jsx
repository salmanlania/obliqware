'use client'
import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import NewsLetterForm from './NewsLetterForm';

const url = "//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn";

const SidebarNewsletter = ({ mail, ctaThree }) => {
    return (
        <MailchimpSubscribe
            url={url}
            render={(props) => {
                const { subscribe, status, message } = props || {};
                return (
                    <NewsLetterForm mail={mail} ctaThree={ctaThree} status={status} message={message} onValidated={(formData) => subscribe(formData)} />
                )
            }

            }

        />
    );
};

export default SidebarNewsletter;
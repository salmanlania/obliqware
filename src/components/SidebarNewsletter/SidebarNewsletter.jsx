'use client'
import React, { useState } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import NewsLetterForm from './NewsLetterForm';
import { toast } from 'react-hot-toast';

const url = "//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn";

const SidebarNewsletter = ({ mail, ctaThree }) => {
    const [loading, setLoading] = useState(false);
    const formData = async (datas) => {
        const email = datas?.EMAIL || datas?.email;

        const data = {
            email: email,
        };

        try {
            const response = await fetch('https://backend-api.obliqware.pk/send-notify-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                toast.success('Email Notify sent successfully!');
            } else {
                toast.error('Failed to send email notify.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Failed to send email notify.');
        } finally {
            setLoading(false);
        }
    }
    return (
        <MailchimpSubscribe
            url={url}
            render={(props) => {
                const { subscribe, status, message } = props || {};
                return (
                    <NewsLetterForm
                        mail={mail}
                        ctaThree={ctaThree}
                        status={status}
                        message={message}
                        onValidated={formData}
                        loading={loading}
                    />
                )
            }

            }

        />
    );
};

export default SidebarNewsletter;
import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import { SectionWrapper } from '../ReusableElements'
import { ContactContainer, ContactFormCon, Form, Input, Message, ContactHeader, SendMessageBtn } from './ContactElements'

const Contact = () => {
    const [emailSent, setEmailSent] = useState(false)


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3t27742', 'template_t3qsybn', e.target, 'user_EkdUrOx8yzED6WdcpjwS6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
        setEmailSent(true)
    }

    return (
        <>
            <SectionWrapper height="80vh" id="contact-wrapper">
                <ContactContainer>
                    <ContactFormCon>
                        <ContactHeader>
                            {!emailSent ? "Let's Get In Touch!" : 'Thanks, have a GREAT day!'}</ContactHeader>
                        <Form onSubmit={sendEmail}>
                            <Input type="text" placeholder="Name..." name="user_name" required></Input>
                            <Input type="email" placeholder="Email..." name="user_email" required></Input>
                            <Message placeholder="Message..." name="message" required></Message>
                            <SendMessageBtn type="submit" value="Send">Send Message!</SendMessageBtn>
                        </Form>
                    </ContactFormCon>
                </ContactContainer>
            </SectionWrapper>
        </>
    )
}

export default Contact

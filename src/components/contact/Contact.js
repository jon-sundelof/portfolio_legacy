import React from 'react'
import { SectionWrapper } from '../ReusableElements'
import { ContactContainer, ContactFormCon, Form, Input, Message, ContactHeader } from './ContactElements'

const Contact = () => {
    return (
        <>
            <SectionWrapper height="80vh" id="contact-wrapper">
                <ContactContainer>
                    <ContactFormCon>
                        <ContactHeader>Let's Get In Touch!</ContactHeader>
                        <Form>
                            <Input type="text" placeholder="Name..." required></Input>
                            <Input type="email" placeholder="Email..." required></Input>
                            <Message placeholder="Message..." required></Message>
                        </Form>
                    </ContactFormCon>
                </ContactContainer>
            </SectionWrapper>
        </>
    )
}

export default Contact

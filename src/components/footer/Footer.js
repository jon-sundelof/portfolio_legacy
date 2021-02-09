import React from 'react'
import { FooterWrapper, FooterWrapInner, SocialLinksWrapper, SocialLinks, Link, RightPlacedWrapper, RightLink, RightSpan, LeftPlacedWrapper, LeftSpan } from './FooterElements'
import { SectionWrapper } from '../ReusableElements'

const Footer = ({ SwitchColor }) => {
    return (
        <>
            <SectionWrapper height="25vh">
                <FooterWrapper>
                    <FooterWrapInner>
                        <LeftPlacedWrapper>
                            <LeftSpan href="mailto:jon@sundelof.se">jon@sundelof.se</LeftSpan>
                        </LeftPlacedWrapper>
                        <SocialLinksWrapper>
                            <Link href="https://www.linkedin.com/in/jon-sundel%C3%B6f-29a02a200/" target="_blank"><SocialLinks>linkedin</SocialLinks></Link>
                            <Link href="https://instagram.com/jonsundelof" target="_blank"><SocialLinks>instagram</SocialLinks></Link>
                            <Link href="https://github.com/jon-sundelof" target="_blank"><SocialLinks>github</SocialLinks></Link>
                        </SocialLinksWrapper>
                        <RightPlacedWrapper>
                            <RightSpan onClick={SwitchColor}>change-it-up</RightSpan>
                            <RightLink to="about-wrapper" to="landing-section-wrapper" smooth={true} spy={true} duration={500} offset={-80}>take me back!</RightLink>
                        </RightPlacedWrapper>
                    </FooterWrapInner>
                </FooterWrapper>
            </SectionWrapper>
        </>
    )
}

export default Footer

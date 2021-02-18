import React from "react"
import styled from "styled-components/macro"
import { Link as LinkScroll } from "react-scroll"

function HeroSection() {
  return (
    <HeroSectionContainer id="home">
      <HeroSectionBody>
        <HeroImage src="/icons/profile.png" alt="profile" />
        <HeroTextContainer>
          <HeroTextHeader>Hi, I’m Iggy</HeroTextHeader>
          <HeroTextBody>
            'There are at least two kinds of games; One could be called finite;
            the other infinite', states James P. Carse. <br /> <br />
            Finite games may offer wealth and status, power and glory, but
            infinite games offer something far more subtle and far grander.{" "}
            <br /> <br /> I am committed to being an infinite game player and a
            lifelong learner.
          </HeroTextBody>
          <HeroButtonContainer>
            <HeroLinkAbout
              to="about"
              smooth={true}
              duration={300}
              spy={true}
              exact="true"
              offset={-80}
            >
              About
            </HeroLinkAbout>

            <HeroLinkContact
              to="contact"
              smooth={true}
              duration={300}
              spy={true}
              exact="true"
              offset={0}
            >
              Contact
            </HeroLinkContact>
          </HeroButtonContainer>
        </HeroTextContainer>
      </HeroSectionBody>
    </HeroSectionContainer>
  )
}

export default HeroSection

const HeroSectionContainer = styled.div`
  width: 100%;
  /* top: 80px; */
  /* position: relative; */
  display: grid;
  /* align-items: center; */
  justify-content: center;
  /* background-color: green; */
`

const HeroSectionBody = styled.div`
  /* position: absolute; */
  max-width: 1200px;
  height: 100vh;

  display: grid;
  grid-template-columns: 450px auto;
  align-items: center;
  justify-content: space-between;
  /* background-color: grey; */
  gap: 45px;
  @media (max-width: 450px) {
    grid-template-columns: auto;
  }
`

const HeroImage = styled.img``

const HeroTextContainer = styled.div`
  margin-left: 36px;
  margin-right: 36px;
  display: grid;
  gap: 20px;
`

const HeroTextHeader = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 36px;
  display: flex;
  align-items: center;

  color: rgba(0, 0, 0, 0.8);
`

const HeroTextBody = styled.p`
  /* margin-top: 15px; */
  width: 520px;
  height: 246px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 140%;
  /* or 28px */

  display: flex;
  align-items: center;

  color: rgba(0, 0, 0, 0.8);
`

const HeroButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 140px 140px;
  gap: 20px;
  margin-top: 20px;
`

const HeroButtonAbout = styled.button`
  border: 0;
`

const HeroLinkAbout = styled(LinkScroll)`
  background: #aea9f1;
  border-radius: 10px;
  font-weight: bold;
  font-size: 15px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px 40px;

  :hover {
    cursor: pointer;
    background: #7f76f9;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.2);
  }
`

const HeroLinkContact = styled(LinkScroll)`
  background: #ffffff;
  border: 3px solid #aea9f1;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 9px 40px;

  font-size: 15px;
  font-weight: bold;
  color: #aea9f1;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.2);
    color: #7f76f9;
  }
`

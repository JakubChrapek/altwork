import React from "react"
import styled from "styled-components"
import LecturersSlider from "./LecturersSlider"
import { SectionTitle } from "./Typography"

const LecturersSectionStyles = styled.section`
  margin-top: 14rem;
  @media (max-width: 1283px) {
    margin-top: 11rem;
  }
  @media (max-width: 1024px) {
    margin-top: 9rem;
  }
  @media (max-width: 767px) {
    margin-top: 5rem;
  }
`
const LecturersTitle = styled(SectionTitle)`
  text-align: center;
  @media (max-width: 1024px) {
    text-align: left;
  }
`

const LecturersSection = ({ buttonText, lecturersTitle, lecturers }) => {
  return (
    <LecturersSectionStyles id="prelegenci">
      <LecturersTitle>{lecturersTitle}</LecturersTitle>
      <LecturersSlider
        buttonText={buttonText}
        lecturersTitle={lecturersTitle}
        lecturers={lecturers}
      />
    </LecturersSectionStyles>
  )
}

export default LecturersSection

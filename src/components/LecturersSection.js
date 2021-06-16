import React from "react"
import styled from "styled-components"
import LecturersSlider from "./lecturersSlider"
import { SectionTitle } from "./typography"

const LecturersSectionStyles = styled.section`
  margin-top: 14rem;
  @media (max-width: 1283px) {
    margin-top: 11rem;
  }
`
const LecturersTitle = styled(SectionTitle)`
  text-align: center;
`

const LecturersSection = ({ lecturersTitle, lecturers }) => {
  return (
    <LecturersSectionStyles id="prelegenci">
      <LecturersTitle>{lecturersTitle}</LecturersTitle>
      <LecturersSlider lecturersTitle={lecturersTitle} lecturers={lecturers} />
    </LecturersSectionStyles>
  )
}

export default LecturersSection

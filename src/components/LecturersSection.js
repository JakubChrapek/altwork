import React from "react"
import styled from "styled-components"
import LecturersSlider from "./LecturersSlider"
import { SectionTitle } from "./Typography"

const LecturersSectionStyles = styled.section`
  margin-top: 14rem;
`
const LecturersTitle = styled(SectionTitle)`
  text-align: center;
`

const LecturersSection = ({ lecturersTitle, lecturers }) => {
  return (
    <LecturersSectionStyles>
      <LecturersTitle>{lecturersTitle}</LecturersTitle>
      <LecturersSlider lecturersTitle={lecturersTitle} lecturers={lecturers} />
    </LecturersSectionStyles>
  )
}

export default LecturersSection

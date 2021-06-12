import React from "react"
import styled from "styled-components"
import LecturersSlider from "./lecturersSlider"
import { SectionTitle } from "./typography"

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

import React from "react"
import AddToCalendarHOC from "react-add-to-calendar-hoc"
import LinkWithDot from "./LinkWithDot"
import CalendarModal from "./CalendarModal"
import siteConfig from "../../config/site-config"
import moment from "moment"

const Dropdown = ({ children }) => <ul>{children}</ul>

const AddToCalendarBtn = ({ buttonText }) => {
  const AddToCalendarDropdown = AddToCalendarHOC(LinkWithDot, CalendarModal)

  const startDatetime = moment({
    year: 2021,
    month: 8,
    day: 12,
    hour: 11,
    minute: 0,
    second: 0,
    milisecond: 0,
  }).utc()
  const endDatetime = startDatetime.clone().add(3, "hours").add(45, "minutes")
  const duration = moment.duration(endDatetime.diff(startDatetime)).asHours()
  const event = {
    description: siteConfig.description,
    duration,
    endDatetime: endDatetime.format("YYYYMMDDTHHmmssZ"),
    location: siteConfig.location,
    startDatetime: startDatetime.format("YYYYMMDDTHHmmssZ"),
    title: siteConfig.title,
  }

  return (
    <AddToCalendarDropdown
      buttonText={buttonText}
      event={event}
      className="modal-container"
    />
  )
}

export default AddToCalendarBtn

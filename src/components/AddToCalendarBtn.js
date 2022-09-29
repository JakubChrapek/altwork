import React from "react"
import AddToCalendarHOC from "react-add-to-calendar-hoc"
import LinkWithDot from "./LinkWithDot"
import CalendarModal from "./CalendarModal"
import moment from "moment"

const AddToCalendarBtn = ({
  buttonText,
  location,
  rok,
  month,
  day,
  time,
  eventDuration,
  eventTitle,
  eventDescription,
  eventLink, }) => {
  const AddToCalendarDropdown = AddToCalendarHOC(LinkWithDot, CalendarModal)

  let hour = 0
  let minute = 0
  let durationHours = Math.trunc(eventDuration / 60)
  let durationMinutes = eventDuration % 60

  if ((time ^ 0) !== time) {
    hour = Math.trunc(time)
    minute = Math.floor((time % 1) * Math.pow(10, 2))
  } else {
    hour = time
  }

  const startDatetime = moment({
    year: rok,
    month: month,
    day: day,
    hour: hour,
    minute: minute,
    second: 0,
    milisecond: 0,
  }).utc()
  const endDatetime = startDatetime.clone().add(durationHours, "hours").add(durationMinutes, "minutes")
  const duration = moment.duration(endDatetime.diff(startDatetime)).asHours()
  const event = {
    description: eventDescription,
    duration,
    endDatetime: endDatetime.format("YYYYMMDDTHHmmssZ"),
    location: eventLink,
    startDatetime: startDatetime.format("YYYYMMDDTHHmmssZ"),
    title: eventTitle,
  }

  return (
    <AddToCalendarDropdown
      buttonText={buttonText}
      event={event}
      className="modal-container"
      filename="altwork-zapis-w-kalendarzu"
    />
  )
}

export default AddToCalendarBtn

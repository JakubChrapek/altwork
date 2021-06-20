import "@fontsource/playfair-display/700-italic.css"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/700.css"

export const onRouteUpdate = ({ location, prevLocation }) => {
  if (location?.hash) {
    setTimeout(() => {
      window?.window?.document
        .querySelector(location.hash)
        .scrollIntoView({ behavior: "instant" })
    }, 50)
  }
}

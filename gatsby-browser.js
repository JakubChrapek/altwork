import "@fontsource/playfair-display/700-italic.css"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/700.css"

export const onRouteUpdate = ({ location, prevLocation }) => {
  if (location?.hash) {
    console.log("SCROLL")
  }
}

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  const { pathname } = location
  const scrollToTopRoutes = [`/privacy-policy`, `/page-2`]
  // if the new route is part of the list above, scroll to top (0, 0)
  if (location.hash) {
    console.log("SCROLL")
    const el =
      window && window.querySelector && window.querySelector(location.hash)
    console.log("EL: ", el)
    // window.scrollTo(0, 0)
    // return false
  }
  return true
}

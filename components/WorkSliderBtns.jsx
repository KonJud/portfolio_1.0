"use client"

import { useSwiper } from "swiper/react"
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"
import { Button } from "./ui/button"

const WorkSliderBtns = ({ containerStyles, btnStyles, inconsStyles }) => {
    const swiper = useSwiper()
  return (
    <div className={containerStyles}>
        <Button className={btnStyles}>
            <PiCaretLeftBold
                className={inconsStyles}
                onClick={() => swiper.slidePrev()}
            />
        </Button>
        <Button className={btnStyles}>
            <PiCaretRightBold
                className={inconsStyles}
                onClick={() => swiper.slideNext()}
            />
        </Button>
    </div>
  )
}

export default WorkSliderBtns
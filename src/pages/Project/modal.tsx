import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core"
import React, { Fragment, useEffect, useRef } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import { ItemType } from "./items"

interface ProjectDetailsModalParams {
  modalOpen: boolean
  setModalOpen: (status: boolean) => void
  modalData: ItemType
}

export const ProjectDetailsModal = ({
  modalOpen,
  setModalOpen,
  modalData,
}: ProjectDetailsModalParams) => {
  const sliderRef: any = useRef(null)

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (sliderRef.current) {
        if (event.key === "ArrowRight") {
          sliderRef.current.slickNext()
        } else if (event.key === "ArrowLeft") {
          sliderRef.current.slickPrev()
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [sliderRef])

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Fragment>
      <Dialog
        maxWidth="md"
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{modalData.name}</DialogTitle>
        <DialogContent style={{ overflowY: "unset" }}>
          <Slider {...settings} ref={sliderRef}>
            {modalData.image.map((image, index) => (
              <div key={index}>
                <img
                  style={{ width: "100%", height: "50%" }}
                  src={image}
                  alt="not found"
                />
              </div>
            ))}
          </Slider>
        </DialogContent>
        <DialogContent>
          <DialogContentText>{modalData.description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            target="blank"
            href={modalData.link}
          >
            Visit site
          </Button>
          <Button
            variant="contained"
            onClick={() => setModalOpen(false)}
            color="secondary"
            autoFocus
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

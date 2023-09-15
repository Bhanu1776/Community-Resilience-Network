import { safetyRecommendations } from "../utils/GuidelinesData";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Guidelines = () => {
  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState(null);
  const [ele, setEle] = React.useState(null);
  const handleOpen = (id) => {
    setOpen(true);
    setId(id);
  };
  React.useEffect(() => {
    const selectedId = safetyRecommendations.filter(
      (currEle) => currEle.id === id
    );
    setEle(selectedId[0]);
  }, [id]);
  const handleClose = () => setOpen(false);
  return (
    <div className="flex flex-wrap md:mx-24">
      {safetyRecommendations.map((currEle) => {
        return (
          <div
            key={currEle.id}
            className="border-2 m-20 flex flex-col cursor-pointer  rounded-xl"
            onClick={() => handleOpen(currEle.id)}
          >
            <img src="/icon.png" alt="Images" className="rounded-lg w-40" />
            <div className="flex justify-center border-2">
              <h1 className="text-2xl font-bold text-center m-2 text-gray-800">
                {currEle.name}
              </h1>
            </div>
          </div>
        );
      })}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {ele?.name}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {ele?.description}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Guidelines;

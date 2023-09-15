import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
// import newRequest from "../utils/newRequest";
// import upload from "../utils/upload";

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

export const Home = () => {
  const [open, setOpen] = React.useState(false);
  const [file, setFile] = React.useState(null);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // const url = await upload(file);
    
  };
  return (
    <><div className="flex items-center justify-center w-full min-h-screen">
      <button
        className="relative top-0 left-0 p-20 text-4xl font-semibold tracking-wider text-white transition-all duration-150 ease-in-out bg-pink-700 rounded-full hover:bg-pink-800 aspect-square outline hover:outline-2 hover:outline-offset-2 hover:outline-neutral-800"
        onClick={handleOpen}
      >
        Alert
        <span className="absolute top-0 left-0 flex w-full h-full ">
          <span className="absolute inline-flex w-full h-full bg-red-400 rounded-full animate-ping opacity-10"></span>
          <span className="absolute inline-flex w-full h-full bg-red-100 rounded-full opacity-75 animate-ping"></span>
        </span>
      </button>
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
            <form onSubmit={handleSubmit}>
              <label>
                Location:
                <input type="text" name="location" />
              </label>
              <label>
                Type of Disaster:
                <input type="text" name="disasterType" />
              </label>
              <label>
                Add Photo:
                <input type="file" name="disasterPhoto" onChange={(e) => setFile(e.target.files[0])} />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </Box>
        </Fade>
      </Modal>

    </div><button>dfsahf</button></>
  );
};

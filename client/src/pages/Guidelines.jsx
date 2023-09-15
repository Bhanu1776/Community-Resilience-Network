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
  width: "90%",
  maxWidth: "800px",
  maxHeight:"90%",
  overflowX: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius:"2%"
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
    <div className="py-4 flex w-full justify-center">
      <div className="mt-16 p-2 w-full max-w-[1200px] grid grid-cols-2 lg:grid-cols-3 gap-4">
        {safetyRecommendations.map((currEle) => {
          return (
            <div
              key={currEle.id}
              className=" relative border-[1px] h-fit w-full flex flex-col items-center justify-center cursor-pointer  rounded-xl"
              onClick={() => handleOpen(currEle.id)}
            >
              <img
                src={`https://source.unsplash.com/1600x900/?${currEle.name}`}
                alt="Images"
                className="rounded-lg aspect-square object-cover"
              />
              <div className=" absolute bg-white/90 flex justify-center rounded-lg border-2">
                <h1 className="text-2xl font-bold text-center m-2 text-gray-900">
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
              <Typography sx={{ textAlign: "center", fontSize: "26px", fontWeight: "700" }} id="transition-modal-title" variant="h6" component="h2">
                {ele?.name}
              </Typography>
              <div className=" relative flex items-center justify-center w-full h-full">

                <img
                  src={`https://source.unsplash.com/1600x900/?${ele?.name}`}
                  alt="Images"
                  className="rounded-lg aspect-square object-cover"
                  style={{ width: '100%', maxHeight: '300px', objectPosition: "top" }}
                />

              </div>
              <Typography id="transition-modal-description" sx={{ mt: 2, fontWeight: "200", fontSize:"14px" }}>
                {ele?.description}
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2, fontWeight: "700", color:"red", fontSize:"20px" }}>
                {ele?.safetyRecom}
              </Typography>
              <div className="mt-4 py-2 border-t-[1px] border-gray-300">
                <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
                  Precautions
                </Typography>
                {ele?.precautions.map((caution, i) => (
                  <li key={i} id="transition-modal-description" sx={{ mt: 2 }}>
                    {caution.text}
                  </li>
                ))}
              </div>
            </Box>
          </Fade>
        </Modal>
      </div>
    </div>
  );
};

export default Guidelines;

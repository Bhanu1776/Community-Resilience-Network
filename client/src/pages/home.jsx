import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../utils/newRequest.js";
import { subscribe } from '../helper.js'; // Import your subscribe function
import { regSw } from "../helper.js"
// import newRequest from "../utils/newRequest";
// import upload from "../utils/upload";

export const Home = () => {
  const [open, setOpen] = React.useState(false);
  const [category, setcategory] = React.useState("")
  const [uploading, setUploading] = React.useState(false);
  const [err, setErr] = React.useState(null);
  const queryClient = useQueryClient();
  const handleChange = (event) => {
    setcategory(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [lat, setLat] = React.useState(null);
  const [lng, setLng] = React.useState(null);

  const [status, setStatus] = React.useState("Loading...");
  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setStatus(null);
          setLat(pos.coords.latitude);
          setLng(pos.coords.longitude);
          sendPushNotification();
        },
        () => setStatus("Unable to retrieve Location")
      );
    } else {
      setStatus("Not Supported");
    }
  }, []);

  const sendPushNotification = async () => {
    try {
      const serviceWorkerReg = await regSw();
      await subscribe(serviceWorkerReg);
    } catch (error) {
      console.error('Error sending push notification:', error);
    }
  };

  const addAlert = useMutation(
    () => {
      return newRequest.post(`incidents`, {
        category: category,
        icon: "http://maps.google.com/mapfiles/ms/micons/caution.png",
        latitude: lat,
        longitude: lng

      });
    },
    {
      onSuccess: async () => {
        queryClient.invalidateQueries("markers");
        await newRequest.post('http://localhost:8800/send-push')
        alert("Alerted Successfully")
        setOpen(false);
      },
      onError: (error) => {
        console.error("Upload error:", error);
        alert(error)
      },
    }
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addAlert.mutateAsync();
    } catch (error) {
      setUploading(false)
      setErr(error.response.data);
      console.error(error);
    }




  };
  return (
    <div className="flex bg-gradient-to-b from-gray-50 to-pink-200 items-center justify-center w-full min-h-screen">
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
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Raise an Alert</DialogTitle>
        <DialogContent>
          <FormControl className="w-[500px]" fullWidth>
            <InputLabel className="mt-2 " id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              onChange={handleChange}
            >
              <MenuItem value={"Natural"}>Natural disasters</MenuItem>
              <MenuItem value={"Emergency"}>Emergency</MenuItem>
              <MenuItem value={"Weather"}>Weather related</MenuItem>
            </Select>
          </FormControl>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Send</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

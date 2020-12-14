import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import FileBase from "react-file-base64";

import { deleteAll } from "../../actions/images";

import useStyles from "./styles";
import { uploadData } from "../../actions/images";
import { purple } from "@material-ui/core/colors";

export const Form = () => {
  const [imageData, setImageData] = useState({
    name: "",
    title: "",
    description: "",
    selectedImage: ""
  });
  const [file, setFile] = useState(null);
  const [disabledMsg, setDisabledMsg] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();

  const clear = () => {
    setImageData({ name: "", title: "", description: "", selectedImage: "" });
  };

  const prepareUpload = ({ base64 }) => {
    setImageData({ ...imageData, selectedImage: base64 });
    setFile(true);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    dispatch(uploadData(imageData));
    setFile(false);
    clear();
  };

  const clearAllImages = () => {
    const improve = window.confirm("Are you sure?");
    if (improve) {
      dispatch(deleteAll());
    }
  };

  return (
    <>
      <Paper
        className={classes.paper}
        onMouseEnter={() => setDisabledMsg(true)}
        onMouseLeave={() => setDisabledMsg(false)}
      >
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6">Upload an Image</Typography>
          <TextField
            name="name"
            variant="outlined"
            label="Your Name"
            fullWidth
            value={imageData.name}
            onChange={e => setImageData({ ...imageData, name: e.target.value })}
          />
          <TextField
            name="title"
            variant="outlined"
            label="Image Title"
            required
            fullWidth
            value={imageData.title}
            onChange={e =>
              setImageData({ ...imageData, title: e.target.value })
            }
          />
          <TextField
            name="description"
            variant="outlined"
            label="Description"
            fullWidth
            multiline
            rows={4}
            value={imageData.description}
            onChange={e =>
              setImageData({ ...imageData, description: e.target.value })
            }
          />
          <div className={classes.fileInput}>
            <FileBase type="file" multiple={false} onDone={prepareUpload} />
          </div>
          <small
            color="secondary"
            style={{ height: 22, width: "100%", color: purple }}
          >
            {disabledMsg && !file && "Select an image to enable submission"}
          </small>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
            disabled={!file}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </form>
      </Paper>

      <Button onClick={clearAllImages}>CLEAR SERVER</Button>
    </>
  );
};

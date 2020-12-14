import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Modal from "../../Modal/Modal";
import { hideImg } from "../../../actions/images";

export default function Image(props) {
  const dispatch = useDispatch();

  const { images } = props;

  if (!images.length) {
    images.push({
      description: "Initial Image",
      name: "Amir",
      selectedImage: "logo512.png",
      title: "REACT",
      uploadDate: "2020-12-14T11:56:05.031Z",
      __v: 0,
      _id: "initial"
    });
  }
  function handleHideImg(id, images) {
    dispatch(hideImg(id, images));
  }

  const useStyles = makeStyles({
    root: {
      maxWidth: 325,
      minWidth: 225,
      flex: 1
    },
    img: {
      objectFit: "contain"
    }
  });
  const classes = useStyles();

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
      {images.map((image, i) => {
        return (
          <React.Fragment key={image._id}>
            {image.selectedImage && (
              <Card className={classes.root}>
                <CardActionArea onClick={() => {}}>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="240"
                    image={image.selectedImage}
                    title="Contemplative Reptile"
                    className={classes.img}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {image.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {image.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Modal image={image.selectedImage} />
                  {i !== 0 && (
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => handleHideImg(image._id, images)}
                    >
                      Hide
                    </Button>
                  )}
                </CardActions>
              </Card>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

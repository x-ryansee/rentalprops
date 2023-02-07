import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    margin: '20px',
  },
  media: {
    height: 400,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  bottomGallery: {
    overflow: 'scroll',
    height: '100px',
    marginTop: '20px',
  },
  bottomCard: {
    width: '100px',
    height: '100px',
    marginRight: '10px',
    display: 'inline-block',
  },
}));

const TahoeGallery = () => {
  const [tahoePics, setTahoePics] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const rentalName = 'alpine';
  const classes = useStyles();

  useEffect(() => {
    fetch('/galleries')
      .then((r) => r.json())
      .then((data) => setTahoePics(data));
  }, []);

  if (!tahoePics) {
    return <div>Loading...</div>;
  }

  const handleOpen = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <h2>TahoeGallery</h2>
      <Grid container spacing={3}>
        {tahoePics.map((pic) => (
          <Grid item xs={12} sm={6} md={4} key={pic.id}>
            <Card className={classes.root}>
              <CardActionArea onClick={() => handleOpen(pic.image)}>
                <CardMedia className={classes.media} image={pic.image} title={pic.id} />
                <CardContent>{pic.rental.name}</CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Modal
        open={Boolean(selectedImage)}
        onClose={handleClose}
        className={classes.modal}
      >
        <div className={classes.paper}>
          <img src={selectedImage} alt="selectedImage" />
          <div className={classes.bottomGallery}>
            {tahoePics.map((pic) => (
              <Card className={classes.bottomCard} key={pic.id}>
                <CardActionArea onClick={() => handleOpen(pic.image)}>
                  <CardMedia
                    className={classes.media}
                    image={pic.image}
                    title={pic.id}
                  />
                </CardActionArea>
              </Card>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
  
            }
          export default TahoeGallery

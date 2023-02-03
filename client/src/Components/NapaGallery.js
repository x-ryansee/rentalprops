import { useState , useEffect } from 'react'
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '10px'
  },
  media: {
    height: 140,
  },
});

const NapaGallery = () => {
  const [napaPics, setNapaPics] = useState(null);
  const rentalName = "napa";
  const classes = useStyles();

  useEffect(() => {
    fetch("/galleries")
      .then((r) => r.json())
      .then((data) => setNapaPics(data));
  }, []);

  
  if (!napaPics) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>NapaGallery</h2>
      <Grid container spacing={3}>
        {napaPics.map((napapics) => (
          napapics.rental.name.toLowerCase() === rentalName.toLowerCase() && (
            <Grid item xs={12} sm={6} md={4} key={napapics.id}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={napapics.image}
                    title={napapics.id}
                  />
                  <CardContent>
                    {napapics.rental.name}
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          )
        ))}
      </Grid>
    </div>
  );
};

export default NapaGallery

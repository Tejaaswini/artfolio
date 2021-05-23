import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import balance from '../assets/misc/balance.jpg'
import blaze from '../assets/misc/blaze.png'
import cactus from '../assets/misc/cactus.jpeg'
import feels from '../assets/misc/feels.jpeg'
import lips from '../assets/misc/lips.jpeg'
import lust from '../assets/misc/lust.jpg'
import mask from '../assets/misc/mask.jpeg'
import nature from '../assets/misc/nature.jpg'
import nuts from '../assets/misc/nuts.jpg'
import rose from '../assets/misc/rose.jpg'
import uni from '../assets/misc/uni.jpeg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Misc() {
  const classes = useStyles();

  return (
    <div>
      <Grid container className="display-div">
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper>
              <img src={balance} className="display-img"/>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={uni} className="display-img"/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={blaze} className="display-img"/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={nature} className="display-img"/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={feels} className="display-img"/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={lips} className="display-img"/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={lust} className="display-img"/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={mask} className="display-img"/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={rose} className="display-img"/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={nuts} className="display-img"/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={cactus} className="display-img"/></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
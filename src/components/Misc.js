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
      <Grid container className="misc-div">
        <Grid item xs={3} className="misc-div-top">
          <Paper>
              <img src={balance} className="misc-image"/>
          </Paper>
        </Grid>
        <Grid item xs={3} className="misc-div-top">
          <Paper><img src={uni} className="misc-image"/></Paper>
        </Grid>
        <Grid item xs={3} className="misc-div-top">
          <Paper><img src={blaze} className="misc-image"/></Paper>
        </Grid>
        <Grid item xs={3} className="misc-div-top">
          <Paper><img src={nature} className="misc-image"/></Paper>
        </Grid>
        <Grid item xs={3} className="misc-div-top">
          <Paper><img src={feels} className="misc-image"/></Paper>
        </Grid>
        <Grid item xs={3} className="misc-div-top">
          <Paper><img src={lips} className="misc-image"/></Paper>
        </Grid>
        <Grid item xs={3} className="misc-div-top">
          <Paper><img src={lust} className="misc-image"/></Paper>
        </Grid>
        <Grid item xs={3} className="misc-div-top">
          <Paper><img src={mask} className="misc-image"/></Paper>
        </Grid>
        <Grid item xs={3} className="misc-div-top">
          <Paper><img src={rose} className="misc-image"/></Paper>
        </Grid>
        <Grid item xs={3} className="misc-div-top">
          <Paper><img src={nuts} className="misc-image"/></Paper>
        </Grid>
        <Grid item xs={3} className="misc-div-top">
          <Paper><img src={cactus} className="misc-image"/></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
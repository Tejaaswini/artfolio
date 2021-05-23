import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import lion from '../assets/mandalas/lion.jpeg'
import mandalalion from '../assets/mandalas/mandalalion.jpeg'
import pup from '../assets/mandalas/pup.jpeg'
import owl from '../assets/mandalas/owl.jpeg'
import wolf from '../assets/mandalas/wolf.jpeg'
import bird from '../assets/mandalas/bird.png'
import wolfy from '../assets/mandalas/wolfy.png'
import cat from '../assets/mandalas/cat.jpg'
import deer from '../assets/mandalas/deer.jpg'
import doggo from '../assets/mandalas/doggo.jpg'

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

export default function Mandalas() {
  const classes = useStyles();

  return (
    <div>
      <Grid container className="display-div">
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper>
              <img src={lion} className="display-img"/>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={doggo} className="display-img"/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={mandalalion} className="display-img"/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={owl} className="display-img"/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={pup} className="display-img"/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={wolf} className="display-img"/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={bird} className="display-img"/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={wolfy} className="display-img"/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={cat} className="display-img"/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={deer} className="display-img"/></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
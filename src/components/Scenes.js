import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import identity from '../assets/scenarios/identity.jpeg'
import balcony from '../assets/scenarios/balcony.jpeg'
import beach from '../assets/scenarios/beach.jpg'
import coffee from '../assets/scenarios/coffee.jpg'
import dance from '../assets/scenarios/dance.jpg'
import lazy from '../assets/scenarios/lazy.jpg'
import sunday from '../assets/scenarios/sunday.jpg'
import swing from '../assets/scenarios/swing.png'

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
              <img src={identity} className="misc-image"/>
          </Paper>
        </Grid>
        <Grid item xs={3} className="misc-div-top">
          <Paper><img src={balcony} className="misc-image"/></Paper>
        </Grid>
        <Grid item xs={3} className="misc-div-top">
          <Paper><img src={beach} className="misc-image"/></Paper>
        </Grid>
        <Grid item xs={3} className="misc-div-top">
          <Paper><img src={coffee} className="misc-image"/></Paper>
        </Grid>
        <Grid item xs={3} className="misc-div-top">
          <Paper><img src={dance} className="misc-image"/></Paper>
        </Grid>
        <Grid item xs={3} className="misc-div-top">
          <Paper><img src={lazy} className="misc-image"/></Paper>
        </Grid>
        <Grid item xs={3} className="misc-div-top">
          <Paper><img src={sunday} className="misc-image"/></Paper>
        </Grid>
        <Grid item xs={3} className="misc-div-top">
          <Paper><img src={swing} className="misc-image"/></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
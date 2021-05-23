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

export default function Scenes() {
  const classes = useStyles();

  return (
    <div>
      <Grid container className="display-div">
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper>
              <img src={identity} className="display-img"/>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={balcony} className="display-img"/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={beach} className="display-img"/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={coffee} className="display-img"/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={dance} className="display-img"/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={lazy} className="display-img"/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={sunday} className="display-img"/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={swing} className="display-img"/></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
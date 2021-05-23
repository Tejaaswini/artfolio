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


export default function Scenes() {

  return (
    <div>
      <Grid container className="display-div">
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper>
              <img src={identity} className="display-img" alt=""/>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={balcony} className="display-img" alt=""/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={beach} className="display-img" alt=""/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={coffee} className="display-img" alt=""/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={dance} className="display-img" alt=""/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={lazy} className="display-img" alt=""/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={sunday} className="display-img" alt=""/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={swing} className="display-img" alt=""/></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
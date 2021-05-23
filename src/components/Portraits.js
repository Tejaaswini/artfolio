import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import rahul from '../assets/portraits/rahul.jpeg'
import aditi from '../assets/portraits/aditi.jpeg'
import madhukar from '../assets/portraits/madhukar.jpeg'
import sohan from '../assets/portraits/sohan.jpeg'
import anagha from '../assets/portraits/anagha.jpg'
import varun from '../assets/portraits/varun.jpg'
import yathish from '../assets/portraits/yathish.jpg'
import me from '../assets/portraits/me.png'


export default function Portraits() {

  return (
    <div>
      <Grid container className="display-div">
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper>
              <img src={rahul} className="portraits-page-img" alt=""/>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={aditi} className="portraits-page-img" alt=""/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={madhukar} className="portraits-page-img" alt=""/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={anagha} className="portraits-page-img" alt=""/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={sohan} className="portraits-page-img" alt=""/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={varun} className="portraits-page-img" alt=""/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={yathish} className="portraits-page-img" alt=""/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={me} className="portraits-page-img" alt=""/></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
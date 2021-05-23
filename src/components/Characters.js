import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import suits from '../assets/characters/suits.jpeg'
import thor from '../assets/characters/thor.jpeg'
import celena from '../assets/characters/celena.jpeg'
import deathnote from '../assets/characters/deathnote.png'
import house from '../assets/characters/house.png'
import l from '../assets/characters/l.png'
import naruto from '../assets/characters/naruto.png'
import saske from '../assets/characters/saske.png'
import sherlock from '../assets/characters/sherlock.png'

export default function Characters() {

  return (
    <div>
      <Grid container className="display-div">
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper>
              <img src={suits} className="display-img" alt=""/>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={thor} className="display-img" alt=""/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={sherlock} className="display-img" alt=""/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={celena} className="display-img" alt=""/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={deathnote} className="display-img" alt=""/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={house} className="display-img" alt=""/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={l} className="display-img" alt=""/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={naruto} className="display-img" alt=""/></Paper>
        </Grid>
        <Grid item xs={12} lg={3} className="display-div-top">
          <Paper><img src={saske} className="display-img" alt=""/></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
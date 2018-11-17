import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountBox';
import AccountIcon from '@material-ui/icons/PersonPin';
import DeleteForeverIcon from '@material-ui/icons/DeleteTwoTone';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import AddUser from './AddUser';
import Divider from '@material-ui/core/Divider';
import { getPeopleDataAction, deleteUserAction, addUserAction } from './../actions/userAction';
import { connect } from "react-redux";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: 8
  },
  paper: {
    fontFamily: "monospace"
  },
});

class CenteredGrid extends Component {
  state = {
    isOpen: false,
    seletedPeople: {},
    checkedBoxIds: [],
    People: [
      
    ]
  }

  componentWillMount(){
    const { getPeopleDataAction, users = [] } = this.props
    getPeopleDataAction();
    this.setState({People:users});
  }

  componentWillReceiveProps(nextPros = []){
    this.setState({People: nextPros.users});
  }

  handleSelectAll = (e) => {
    const { People } = this.state;
    const checked = e.target.checked;
    if (checked) {
      this.setState({ checkedBoxIds: People.map(e => e._id) });
    } else {
      this.setState({ checkedBoxIds: [] })
    }
  }

  handleCheckBox = (e, user) => {
    const { checkedBoxIds = [] } = this.state;
    const checked = e.target.checked;
    if (checked) {
      this.setState({ checkedBoxIds: [...checkedBoxIds, user._id] });
    } else {
      this.setState({ checkedBoxIds: checkedBoxIds.filter(e => e !== user._id), });
    }
  }

  setUser = (seletedPeople) => {
    this.setState({ seletedPeople });
  }

  onAdd = (newUser) => {
    const { addUserAction } = this.props;
    addUserAction(newUser);
  }

  addHandlar = (isOpen) => this.setState({ isOpen });

  delete = () => {
    const { checkedBoxIds, seletedPeople } = this.state;
    const {  deleteUserAction } = this.props;
    if (checkedBoxIds.includes(seletedPeople._id)) {
      this.setState({seletedPeople: {}});
    }
    this.setState({checkedBoxIds: []})
    deleteUserAction(checkedBoxIds);
  }
  
  render() {
    const { classes, users } = this.props;
    const { People = [], seletedPeople, checkedBoxIds = [], isOpen } = this.state;
    return (
      <div className={classes.root}>
        <AddUser isOpen={isOpen} addHandlar={this.addHandlar} onAdd={this.onAdd} />
        <Grid container>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Grid container>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}></Grid>
                <Grid item xs={1}>
                  <Button onClick={() => this.addHandlar(true)} variant="fab" mini color="primary" aria-label="Add" className={classes.button}>
                    <AddIcon />
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Grid container style={{ minHeight: 555 }} >
                <Grid item xs={3} >
                  <Paper className={classes.paper} style={{ height: "100%" }}>
                  <Grid container style={{ display: "flex" }}>
                      <Grid item xs={1} >
                        <Checkbox
                          style={{ padding: 0 }}
                          disabled={People.length ? false: true}
                          checked={(checkedBoxIds.length === People.length)}
                          onChange={(e) => this.handleSelectAll(e)}
                          color={"primary"}
                        />
                      </Grid>
                      <Grid item xs={9} style={{ marginTop: 4 }}>
                        People
                      </Grid>
                      <Grid item xs={2}>
                        <DeleteForeverIcon style={{ cursor: "pointer" }} onClick={this.delete} />
                      </Grid>
                    </Grid>
                    <Divider />
                    {users.map((p) => (
                      <Grid key={p._id} container style={{ display: "flex", backgroundColor: seletedPeople._id === p._id ? "#dedede" : "" }}>
                        <Grid item xs={3} >
                          <Checkbox
                            style={{ padding: 0 }}
                            checked={checkedBoxIds.includes(p._id)}
                            onChange={(e) => this.handleCheckBox(e, p)}
                            color={"primary"}
                          />
                        </Grid>
                        <Grid item xs={2}>
                          <AccountCircleOutlinedIcon />
                        </Grid>
                        <Grid item xs={7}>
                          <div onClick={() => this.setUser(p)} style={{ cursor: "pointer", marginTop: 6 }}>
                            {p.name}
                          </div>
                        </Grid>
                      </Grid>
                    ))}
                  </Paper>
                </Grid>
                <Grid item xs={9} >
                  <Grid container style={{ height: "100%" }}>
                    <Paper className={classes.paper} >
                      {seletedPeople._id && <div>
                        <Grid item xs={12} style={{ textAlign: "left", marginLeft: 77, marginTop: 33 }} >
                          <AccountIcon style={{ fontSize: 76 }} />
                        </Grid>
                        <Grid item xs={12}>
                          <Grid container>
                            <Grid item xs={2}></Grid>
                            <Grid item xs={9}>
                              <Grid container spacing={40}>
                                <Grid item xs={3}>
                                  <Typography variant="h4" gutterBottom style={{ textAlign: "left" }}>
                                    Name
                                  </Typography>
                                </Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={8} style={{ textAlign: "left" }}>
                                  <TextField
                                    style={{ fontSize: 29 }}
                                    value={seletedPeople.name}
                                  />
                                </Grid>
                                <Grid item xs={3}>
                                  <Typography variant="h4" gutterBottom style={{ textAlign: "left" }}>
                                    Id
                                  </Typography>
                                </Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={8} style={{ textAlign: "left" }}>
                                  <TextField
                                    style={{ fontSize: 29 }}
                                    value={seletedPeople._id}
                                  />
                                </Grid>

                                <Grid item xs={3}>
                                  <Typography variant="h4" gutterBottom style={{ textAlign: "left" }}>
                                    Description
                                  </Typography>
                                </Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={8} style={{ textAlign: "left", }}>
                                  <TextField
                                    style={{ fontSize: 29 }}
                                    value={seletedPeople.Description}
                                    fullWidth
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={1}></Grid>
                          </Grid>
                        </Grid>
                      </div>}
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  };
}


const mapStateToProps = state => ({
  // campaign: state.campaignPage.campaign.results,
  users: state.userReducer.users
});

export default withStyles(styles)(
  connect(mapStateToProps, { getPeopleDataAction, deleteUserAction, addUserAction })(CenteredGrid)
);

import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { List, ListItem } from '@material-ui/core/';
import Button from '@material-ui/core/Button';


export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
    return (
      <MuiThemeProvider >
        <React.Fragment>
          
          
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem>
              <ListItem primaryText="First Name" secondaryText={firstName} /> 
            </ListItem>
            <ListItem>
              <ListItem primaryText="Last Name" secondaryText={lastName} /> 
            </ListItem>
            <ListItem>
              <ListItem primaryText="Email" secondaryText={email} /> 
            </ListItem>
            <ListItem>
              <ListItem primaryText="Occupation" secondaryText={occupation} /> 
            </ListItem>
            <ListItem>
              <ListItem primaryText="City" secondaryText={city} /> 
            </ListItem>
            <ListItem>
              <ListItem primaryText="Bio" secondaryText={bio} /> 
            </ListItem>
          </List>
          <br/>
        
          <Button
            lable="Back"
            color="secondary"
            variant="contained"
            onClick={this.back}
          >Back</Button>

          <Button
            lable="Confirm & Continue"
            color="primary"
            variant="contained"
            onClick={this.continue}
          >Confirm & Continue</Button>
          

        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
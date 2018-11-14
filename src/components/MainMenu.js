import React, {Component} from 'react';
import {NavDropdown, Navbar, MenuItem, Nav} from 'react-bootstrap';
import '../assets/css/bootstrap.min.css';
import '../assets/css/bootstrap-theme.min.css';

export class MainMenu extends Component {

  constructor(props) {
    super(props)
  }


  render() {
    return (
      <Navbar fluid inverse collapseOnSelect defaultExpanded>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Grammarian Filler Word Counter</a>
          </Navbar.Brand>
        </Navbar.Header>
          <Nav>
        <NavDropdown title="Speakers" class="dropdown-menu" onToggle={() => this.props.handleDropDown()}>
          {
            this.props.data.list.map((speaker) => {
              return <MenuItem eventKey={1 + (speaker.id/10)} onClick={
                () => {
                  this.props.handleSelect(speaker.id)
                }
              }>
                {speaker.title}
              </MenuItem>
            })
          }
        </NavDropdown>
        </Nav>
      </Navbar>
    )
  }
}
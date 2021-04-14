import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  Map,
  InfoWindow,
  Marker,
  GoogleApiWrapper,
  MapProps,
} from "google-maps-react";
import { useState, useEffect } from "react";
import logo from "./kite.jpg";
import Data from "./Data";
import Datatable from "./Datatable";
import "./Dashboard.css";
import axios from "axios";
import AGgrid from "./AGgrid";
import {
  console,
  MediaStreamTrackEvent,
} from "google-maps-react/dist/lib/windowOrGlobal";
import { Button, Fab, Menu, MenuItem, IconButton } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const url = "https://6074418c066e7e0017e79725.mockapi.io/spot";

export class Dashboard extends React.Component {
  state = {
    data: [],
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    backgroundcolor: false,
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({
      ...this.state,
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      data: this.state.data,
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
    console.log(this.state);
  };

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        data: this.state.data,
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  constructor(props) {
    super(props);
    axios(url).then((response) => {
      this.setState({ ...this.state, data: response.data });
      console.log(this.state);
    });
  }

  render() {
    return (
      <>
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <IconButton
            aria-label="add"
            onClick={(event) => this.handleClick(event)}
          >
            <AccountCircleIcon color="primary" />
          </IconButton>
          <Menu
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            id="simple-menu"
            anchorEl={this.state.anchorEl}
            keepMounted
            open={Boolean(this.state.anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}>
              <Link to="/" className="">
                Log out
              </Link>
            </MenuItem>
          </Menu>
        </div>

        <div className="map">
          <Map
            onClick={this.onMapClicked}
            google={this.props.google}
            centerAroundCurrentLocation={true}
            zoom={3}
          >
            {this.state &&
              this.state.data.map((marker) => (
                <Marker
                  onClick={this.onMarkerClick}
                  name={marker.name}
                  position={{ lat: marker.lat, lng: marker.long }}
                  country={marker.country}
                  wind={marker.probability}
                  lat={marker.lat}
                  long={marker.long}
                  month={marker.month}
                  color="blue"
                />
              ))}

            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
            >
              <div className="margin-top">
                <h4>{this.state.selectedPlace.name}</h4>
                <h5>{this.state.selectedPlace.country}</h5>
              </div>
              <div className="margin-top">
                <h4>Wind probability</h4>
                <h4>{this.state.selectedPlace.wind}%</h4>
              </div>
              <div className="margin-top">
                <h4>Latitude</h4>
                <h4>{this.state.selectedPlace.lat} N</h4>
              </div>
              <div className="margin-top">
                <h4>Longitude</h4>
                <h4>{this.state.selectedPlace.long} W</h4>
              </div>
              <div className="margin-top">
                <h4>When to go</h4>
                <h4>{this.state.selectedPlace.month}</h4>
              </div>
              <div className="margin-top favorites">
                <button type="button" onClick={this.state.backgroundcolor}>
                  + ADD TO FAVORITES
                </button>
              </div>
            </InfoWindow>
          </Map>
        </div>

        <div className="locations-table">
          <h1 className="margin-loc">
            <b>Locations</b>
          </h1>
          <AGgrid />
        </div>
      </>
    );
  }
}
export default Dashboard = GoogleApiWrapper({
  apiKey: "AIzaSyBNMHdNUOG0m5s7mYsWjM_RDwPCW34t6c4",
})(Dashboard);

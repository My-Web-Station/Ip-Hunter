import React, { Component } from "react";
import "./Tracker.css";
import Axios from "axios";
import Maps from "../../components/Maps/Maps";
import OutputIpAddress from "../../components/OutputIpAddress/OutputIpAddress";
import UserInput from "../../components/UserInput/UserInput";

const apiKey = process.env.REACT_APP_API_KEY;

class Tracker extends Component {
  state = {
    showMap: false,
  };

  componentDidMount() {
    this.getLocationData();
  }

  getLocationData = (type, address) => {
    this.setState({
      showMap: false,
    });
    let url;
    if (type === "ipAddress") {
      url = `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${address}`;
    } else if (type === "domain") {
      url = `https://geo.ipify.org/api/v1?apiKey=${apiKey}&domain=${address}`;
    } else {
      url = `https://geo.ipify.org/api/v1?apiKey=${apiKey}`;
    }

    Axios.get(url)
      .then((response) => {
        this.setState({
          showMap: true,
          locationData: response,
          currentIpAddress: response.data.ip,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  updateTextValueHandler = (event) => {
    this.setState({
      currentIpAddress: event.target.value,
    });
  };

  render() {
    return (
      <div className="Tracker">
        {this.state.locationData && (
          <div>
            <UserInput
              onTextChange={this.updateTextValueHandler}
              value={this.state.currentIpAddress}
              getlocationdata={this.getLocationData}
              currentIpAddress={this.state.currentIpAddress}
            />
            {this.state.showMap && (
              <Maps location={this.state.locationData.data.location} />
            )}
            <OutputIpAddress
              outPutAdddress={this.state.locationData.data.ip}
              outPutLocation={`${this.state.locationData.data.location.city}, ${this.state.locationData.data.location.country} ${this.state.locationData.data.location.postalCode}`}
              outPutTimezone={this.state.locationData.data.location.timezone}
              outPutIsp={this.state.locationData.data.isp}
              location={this.state.locationData.data.location}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Tracker;

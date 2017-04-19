import React, { Component } from 'React';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name =cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp-273.15);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    // ES6 nice!
    const { lon, lat }= cityData.city.coord;
    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td><Chart data={temps} color="orange" unit="°C" /></td>
        <td><Chart data={pressures} color="blue" unit="hPa" /></td>
        <td><Chart data={humidities} color="green" unit="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
        <tr>
          <th>City</th>
          <th>Temperature (°C)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity (%)</th>
        </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// Rip out weather from state ES6 syntax
function mapStateToProps({ weather }) {

  //return { weather: state.weather }; ES6 syntax!
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
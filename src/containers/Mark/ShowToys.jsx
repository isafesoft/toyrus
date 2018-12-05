import React, { Component } from 'react';
import {connect } from 'react-redux';

class ToyList extends Component{

    renderWeather(city)
    {
        console.log(city)
        const name = city.city.name;
        const temps = city.list.map((weather) => {
            return weather.main.temp;
        });

        const {lat, lon} = city.city.coord;
        //const lat = city.city.coord.lat;
        //const lon = city.city.coord.lon;
        console.log(temps)

        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                </td>
                <td>
                    {/*<Chart data={temps}></Chart>*/}
                    {JSON.stringify(temps)}
                </td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Teamperature</th>
                    <th>Pressure</th>
                    <th>Huminity</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weatherRD.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => {
    return {weatherRD: state.weather};
}

export default connect(mapStateToProps)(ToyList);
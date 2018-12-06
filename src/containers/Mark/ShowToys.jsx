import {Component} from 'react';
import {connect} from 'react-redux';

class ToyList extends Component {
    render(){
        console.log('this.state:'+ JSON.stringify(this.state));
        console.log('this.props:'+ JSON.stringify(this.props));
        return (JSON.stringify(this.props.weatherRD))
    }

    // renderWeather(city) {
    //     const name = city.city.name;
    //     const temps = city.list.map((weather) => {
    //         return weather.main.temp;
    //     });
    //
    //     //const {lat, lon} = city.city.coord;
    //     //const lat = city.city.coord.lat;
    //     //const lon = city.city.coord.lon;
    //     console.log(temps);
    //
    //     return (
    //         <tr key={name}>
    //             <td>{name}</td>
    //             <td>
    //             </td>
    //             <td>
    //                 {/*<Chart data={temps}></Chart>*/}
    //                 {JSON.stringify(temps)}
    //             </td>
    //         </tr>
    //     )
    // }

    // render() {
    //     return (
    //         <table className="table table-hover">
    //             <thead>
    //             <tr>
    //                 <th>City</th>
    //                 <th>Temperature</th>
    //                 <th>Pressure</th>
    //                 <th>Humidity</th>
    //             </tr>
    //             </thead>
    //             <tbody>
    //             {this.props.weatherRD.map(this.renderWeather)}
    //             </tbody>
    //         </table>
    //     )
    // }
}

const mapStateToProps = (state) => {
    return {weatherRD: state.weather};
};

export default connect(mapStateToProps)(ToyList);

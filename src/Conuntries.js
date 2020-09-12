import React, { Component } from 'react'

export default class Conuntries extends Component {
    render() {

        const country = this.props.country;
        return (
            <tr>
                <td>{country.Country}</td>
                <td>{country.TotalConfirmed}</td>
                <td>{country.NewConfirmed}</td>
                <td>{country.TotalRecovered}</td>
                <td>{country.TotalDeaths}</td>
            </tr>
        )
    }
}

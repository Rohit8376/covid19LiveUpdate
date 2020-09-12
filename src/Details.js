import React, { Component } from 'react'
import './App.css';
import axios from "axios"
import Summary from './summary'
import Countries from './Conuntries'

export default class Details extends Component {

    state ={
        Countaries :{},
        global : {},
        currentDate : "",
        loading:true


    }

    async componentDidMount(){

        const res = await axios.get('https://api.covid19api.com/summary');

         this.setState({
            Countaries:res.data.Countries,
            global : res.data.Global,
            currentDate : res.data.Date,
            loading:false
         })


        


    }
 
    render() {
          if(this.state.loading){
              return <h1>loading....</h1>
          }
        return (
            <>
               
               <Summary summary = {this.state.global} currentDate = {this.state.currentDate}/>
               
               <h1 className="contry">  Country wise  Updates </h1>

               <table>
                   
                   <thead>
                       <tr>
                        <th>Country</th>
                        <th>Total Confirmed</th>
                        <th>new Confirmed</th>
                        <th>Total recovered</th>
                        <th>Total Death</th>
                       </tr>
                   </thead>

                   <tbody>
                      
                        {this.state.Countaries.map(country=>(
                           <Countries country={country} key = { country.Country} />
                          )
                        )}

                   </tbody>

               </table>
            </>
        )
    }
}


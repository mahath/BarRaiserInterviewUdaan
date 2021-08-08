import classes from './CarCrashList.module.css';
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class CarCrashList extends Component {
    constructor() {
        super();
        this.state = {
          carItem: []
        };
      }

      static defaultProps = {
        isDraggable: true,
        isResizable: true,
        items: 5,
        rowHeight: 30,
        preventCollision: false,
        compactType: null,
        cols: 12
      };

      componentWillMount() {
        fetch("https://data.cityofnewyork.us/resource/h9gi-nx95.json")
          .then(response => response.json())
          .then(json => {
              console.log(json);
            this.setState({ carItem: json });
          });
      }

      render() {
        const carList = this.state.carItem.map(damageCar => {
            
            return <div className={classes.grid}><ul>
                <li className={classes.item}>{damageCar.vehicle_type_code1}</li>
                <li className={classes.item}>{damageCar.vehicle_type_code2}</li>
                <li className={classes.item}>{damageCar.crash_date}</li>
                <li className={classes.item}>{damageCar.crash_time}</li>
            </ul></div>
        });
        return (
            <section className={classes.cars}>
                <Grid container spacing={1}>{carList}</Grid>
        </section>
        );
      }
}

export default CarCrashList;
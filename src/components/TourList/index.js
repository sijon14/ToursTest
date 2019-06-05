import React, { Component } from "react";
import "./TourList.scss";
import Tour from "../Tour/Tour";
import { tourData } from "../../tourData";

export default class TourList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tours: tourData
    };
  }

  removeTour = id => {
    console.log(id);
    const sortedTour = this.state.tours.filter(item => item.id !== id);
    this.setState({
      tours: sortedTour
    });
  };

  // <<<<<------ANOTHER METHOD ------>>>>
  // removeTour = id => {
  //   const { tours } = this.tours;
  //   const sortedTours = this.filters(tour => tour.id !== id);
  //   //return tour that do not match the ID that I am passing
  //   this.setState({
  // tours: sortedTours
  // })
  // };

  render() {
    //acessing the tours in the state!!
    const { tours } = this.state;

    return (
      //mapping through the Tour items from Tour component
      <section className="tourlist">
        {tours.map(tour => {
          return (
            <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
          );
        })}
      </section>
    );
  }
}

//pass the state first brining in the data
//then map the items in keys and tour

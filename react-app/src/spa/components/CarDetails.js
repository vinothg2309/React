import React, { Component } from 'react';
// npm install axios - promise api - ajax (get/post/put/delete)
export  class CarDetails extends Component {
// params is a built in property of router 
    componentDidMount() {
        const { match: { params } } = this.props;
        alert("details of Car for ID : "+this.props.match.params.carId)
        //{carId:1,category:'electric'}
               /*
        axios.get(`/api/cars/${params.carId}`)
          .then(({ data}) => {
            console.log(data);
      
            this.setState({ cars:data});
          });

          componentDidMount() {
  const { match: { params } } = this.props;

  axios.delete(`/api/users/${params.carId}`)
    .then(({ data: car }) => {
      console.log('car', car);

      this.setState({ car});
    });
}
          */
      }
  render() {
    return (
      <div>
       <h1>Display the car Details after making ajax calls </h1>
      </div>
    );
  }
}


// {carId:2,
//cateogory:'bmw'
//}

/*
var obj={x:1,name:'murthy',phone:444343}
const {myname:name,phone}=obj      //object destructuring
*/
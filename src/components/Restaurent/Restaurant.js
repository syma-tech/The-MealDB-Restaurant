import './Restaurant.css';
import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import Order from '../Order/Order';

const Restaurant = () => {
    const [meals,setMeals] = useState([]);
    const [order,setOrder] = useState([]);
    const [displayMeal,setDisplayMeal] = useState([]);
    useEffect(()=>{
        fetch('./fakedb.JSON')
        .then(res=>res.json())
        .then(data=>{
            setMeals(data);
            setDisplayMeal(data);
        })
    },[]);
    const handleOrder=meal=>{
        const newCount =[...order, meal]
        setOrder(newCount);
    };
    const selectedMeal = [];
    const handleChange=event=>{
        console.log(event.target.value);
        const searchText=event.target.value;
        // const matchedMeal = meals.filter(meal=>console.log(meal.strMeal));
        const matchedMeal = meals.filter(meal=>meal.strMeal.toLowerCase().includes(searchText.toLowerCase()));
        selectedMeal.push(matchedMeal)
        // console.log(selectedMeal);
        // console.log(meals);
        setDisplayMeal(...selectedMeal);
        // console.log(displayMeal);
      };
    // console.log(order);
    return (
      <>
        <div className=" bg-success">
        <form className="d-flex container py-3">
            <input
              className="form-control me-2"
              onChange={handleChange}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-warning" type="submit">
              Search
            </button>
        </form>
        </div>
      <div className="container">
        <div className="row g-5">
          <div className="col-sm-6 col-md-9">
            <h2>Foods: </h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                
                {
                    displayMeal.map(meal=><Food
                        key={meal.idMeal}
                        meal={meal}
                        handleOrder={handleOrder}
                    />)
                }
            </div>
          </div>
          <div className="col-6 col-md-3">
            <h2>Order Delivary : {order.length}</h2>
            <ul>
            {
                order.map(orderName=> <Order orderName={orderName}/>)
                // order.map(orderName=> <li>{orderName}</li>)
            }
            </ul>
          </div>
        </div>
      </div>
      </>
    );
};

export default Restaurant;
import './Food.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faCartShopping, faCoffee } from '@fortawesome/free-solid-svg-icons';

const Food = (props) => {
    // console.log(props.meal);
    const {strMeal, strMealThumb, strTags, strInstructions} = props.meal;
    // console.log(strMeal);
    const {handleOrder}=props;
    const element = <FontAwesomeIcon icon={faCartPlus} />
    return (
        <div>
            {/* <div className="row row-cols-1 row-cols-md-3 g-5"></div> */}
            <div className="col rounded-pill border">
                <div className="card">
                <img src={strMealThumb} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{strMeal}</h5>
                    <p className="card-text"><small>
                        {
                            strTags? strTags : ' '
                        }    
                    </small></p>
                    <p className="card-text overflow-hidden" style={{height:"78px"}}>{strInstructions}</p>
                    <button onClick={()=>handleOrder(strMeal)} type="button" className="btn btn-success">{element} Order Now</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Food;
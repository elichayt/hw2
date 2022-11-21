import React from 'react'

const Car = ({car}) => {
    // console.log(props);
    // const car = props.car;
    return (
        <div className='col-12 col-md-6 col-lg-3 shadow p-2 mt-4 border-1 border'>
            <div className='row h-100'>
                <div className="col-12 col-md-6">

                    <img width={`100%`} src={car.img_url} alt={car.model} />

                </div>
                <div className='col-12 col-md-6' >
                    <h3 className='p-0 m-0'>{car.model}</h3>
                    <h4>{car.company}</h4>
                    <p className='p-0 m-0'> price: {car.price}</p>
                    <p className='p-0 m-0'> year: {car.year}</p>

                </div>

            </div>

        </div>
    )
}

export default Car
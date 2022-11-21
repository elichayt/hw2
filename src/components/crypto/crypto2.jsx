import React from 'react'

const Crypto2 = ({ crypto }) => {
    return (
        <div className='col-12 col-md-6 col-lg-3 shadow p-2 mt-4 border-1 border'>
            <div className='row h-100'>

                <div className='col-12 col-md-6' >
                    <h3 className='p-0 m-0'>{crypto.name}</h3>
                    <h4>{crypto.symbol}</h4>
                    <p className='p-0 m-0'> {Number(crypto.price_usd).toFixed}</p>
                    <p className='p-0 m-0'>{Number(crypto.price_btc).toFixed}</p>

                </div>

            </div>

        </div>
    )
}

export default Crypto2
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Crypto2 from './crypto2';

const Crypto = () => {

    const [crypto, setcrypto] = useState([]);
    // const [data,setData] = useState();

    const doApi = async () => {
        try {
            let url = `http://fs1.co.il/bus/bitcoin.php`

            const { data } = await axios(url)
            console.log(data)
            setcrypto(data);
            // this.state.cars = data
        } catch (err) {
            console.log(err.response)
        }
    }

    //בשביל השאפליקציה תאתחל את עצמה ביחד עם הקשת האייפיאי נשתמש בהוק זה:
    // useEffect(() => {
    //     doApi()
    // }, [])

    useEffect(()=>{
        doApi()
    },[])


    return (
        <div>

            <h1 className='display-3 text-center'>crypto coins</h1>

            <div className="container">
                <div className="row ">
                    {crypto.map((item, i) =>
                    (
                        <Crypto2 key={i} crypto={item}/>
                    )
                    )}
                </div>

            </div>


            {/* {cars.map((item,i)=>{
                  return(
                      <p>{item.model}</p>
                  )
              })} */}



            {/* {cars[0]?.model ?
                  <div>
                      <p>{cars[0].model}</p>
                      <p>{cars[1].model}</p>
                      <p>{cars[2].model}</p>
                      <p>{cars[3].model}</p>
  
                  </div>
                  : <p>Loading</p>} */}
        </div>
    )
}


export default Crypto
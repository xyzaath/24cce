import React from 'react'
import './MedData.css'
import { assets } from '../../assets/assets'

const MedData = () => {
  return (
    <div className='med-container'>
      <div className="med-display">
        {
            assets.medicineData.map((data,index)=>{
                return(
                    <div key={index} className="med-item">
                        <img src={data.image.url} alt="" />
                        <div className="description">
                            <h4>{data.name}</h4>
                            <p>Rs {data.price}</p>
                            <p>{data.description}</p>
                        </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default MedData

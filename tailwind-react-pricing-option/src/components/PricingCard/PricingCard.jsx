import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({pricing}) => {
    const {name, price, duration, description, features} = pricing;
    return (
        <div className=' flex flex-col border bg-amber-600 rounded-2xl p-4'>
            {/* card header */}
            <div>
                <h1 className="text-7xl">{name}</h1>
                <h4 className='text-3xl'>${price}/ {duration}</h4>
            </div>
            {/* card body */}
            <div className='bg-amber-400 p-4 rounded-2xl mt-6 flex-1'>
                <p>{description}</p>
                {
                    features.map((feature, index) => 
                    <PricingFeatures 
                    key={index}
                    feature={feature}>
                    </PricingFeatures>)
                }
            </div>
            <button className='btn w-full bg-black text-white mt-4'>Subscribe</button>
        </div>
    );
};

export default PricingCard;
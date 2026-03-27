import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({pricingPromise}) => {

    const pricingData = use(pricingPromise);
    


    return (
        <div className=''>
            <h2 className='mb-4 text-4xl font-bold'>Get Our Membership</h2>
            <div className='grid md:grid-cols-3 gap-8'>
                {
                    pricingData.map(pricing => <PricingCard 
                        key={pricing.id}
                        pricing={pricing}>

                        </PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;
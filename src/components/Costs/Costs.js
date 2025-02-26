import React from 'react';
import "./Costs.css";

const Costs = () => {
  return (
    <div>
      <h1 className='heading'>Costs</h1>
      <p className='info'>
        Cost per adult, Ex Nairobi - USD1582/- incl of local taxes
      </p>
      <p className='info'>
        Cost per child ( 4 to 9 years ), Ex Nairobi - USD 1400/- incl
        of taxes
      </p>
      <p className='info'>
        Special Independence Day offer valid for bookings made on or before
        till August 14th 2023 - Cost per adult - USD 1322
      </p>
      <p className='info'>
        Special Independence Day offer valid for bookings made on or before
        till August 14th 2023 - Cost per child - USD 1127
      </p>
    </div>
  );
};

export default Costs;
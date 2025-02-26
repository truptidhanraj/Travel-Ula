import React from 'react';

const PaymentTermsAndCancellation = () => {
  return (
    <div>
      <h1 className='heading'>Payment Terms and Cancellation Policy</h1>
      <p className='info'>
        100% of the tour cost at the time of booking
      </p>
      <p className='info'>
        50% of the tour cost would be given back as credit if the tour is
        cancelled 60 days before the travel dates
      </p>
      <p className='info'>
        No refund is provided if tour is cancelled within thirty days of
        the travel dates
      </p>
    </div>
  );
};

export default PaymentTermsAndCancellation;
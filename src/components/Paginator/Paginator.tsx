import React from 'react';
import { range } from 'lodash';

const Paginator = (props: { totalProducts: number; paginate: any }) => {
  const pageNumbers = range(1, props.totalProducts / 10);

  return (
    <div>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button
              className={'page-link'}
              onClick={() => props.paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Paginator;

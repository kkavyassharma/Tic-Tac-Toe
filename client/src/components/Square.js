import React from 'react'

function Square({chooseSqure, val}) {
  return (
    <div className='square' onClick={chooseSqure}>
        {val}
    </div>
  );
}

export default Square
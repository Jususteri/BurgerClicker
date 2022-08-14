import React, { useState } from 'react';

function Reset(props) {
    
      return (
        <div className="reset">
        <button type="button"
        alt="" 
        onClick={props.onClick}
        >Reset clicks and coupons</button>
        </div>
      );
    }

    export default Reset;
import React from 'react';

const ApprovalCard = (props) => {
  
    return(
        <div class="ui card"  >
        <div class="content">
        {props.children}
          
         
          <div class="description">
            <p></p>
          </div>
        </div>
        <div class="extra content">
          <span class="left floated like">
            <i class="like icon"></i>
            Beğen
          </span>
          <span class="right floated star">
            <i class="star icon"></i>
            Favori
          </span>
        </div>
      </div>
    )

};

export default ApprovalCard ;
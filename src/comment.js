import React from 'react';
import faker from 'faker';


const Comment = ({name,timeAgo,comment,hour,amPm}) => {
    return(
      <div class="comment">
      <a class="avatar">
        <img src={faker.image.avatar()} />
      </a>
      <div class="content">
        <a class="author">{name} </a>
        <div class="metadata">
    <span class="date">{timeAgo} gün önce {amPm} {hour} </span>
        </div>
        <div class="text">
          {comment}
        </div>
        <div class="actions">
          <a class="reply">Cevapla</a>
        </div>
      </div>
    </div>
    )
}

export default Comment;
import React from 'react';
import ReactDom from 'react-dom';
import Comment from './comment';
import ApprovalCard from  './approvalCard';




function App() {
  return (
    <div class="ui comments">
       
       <ApprovalCard>
       <Comment
        name='Volkan Göksu'
        timeAgo='5'
        comment='Katılıyorum '
        hour="19:00"
        amPm="Akşam"
       />
       </ApprovalCard>
     
       <ApprovalCard>
       <Comment
        name='Serhat Potur'
        timeAgo='9'
        comment='Katılıyorum '
        hour="9:00"
        amPm="Sabah"
       />
       </ApprovalCard>
       
      
     
  </div>
   
  );
}

ReactDom.render(
  <App />,
  document.querySelector('#root')
);


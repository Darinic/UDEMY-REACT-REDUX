import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./components/CommentDetail";
import faker from "faker";
import ApprovalCard from "./components/ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
        <ApprovalCard>
      <CommentDetail
        name="Alex"
        timeAgo="Today at 4:45PM"
        commentText="Amazing Blog"
        img={faker.image.image()}
      />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail
        name="Jane"
        timeAgo="Today at 2:00AM"
        commentText="Daniil, You changed my life"
        img={faker.image.image()}
      />
       </ApprovalCard>
       <ApprovalCard>
      <CommentDetail
        name="Valerija"
        timeAgo="Yesterday at 5:00PM"
        commentText="Slava Ukraini"
        img={faker.image.image()}
      />
      </ApprovalCard>
    </div>
  );
};

ReacDOM.render(<App />, document.querySelector("#root"));
//https://semantic-ui.com/

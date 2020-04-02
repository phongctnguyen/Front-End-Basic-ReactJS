import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          source={faker.image.avatar()}
          author={faker.name.firstName()}
          timeAgo={faker.date.month()}
          content={faker.lorem.text()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          source={faker.image.avatar()}
          author={faker.name.firstName()}
          timeAgo={faker.date.month()}
          content={faker.lorem.text()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          source={faker.image.avatar()}
          author={faker.name.firstName()}
          timeAgo={faker.date.month()}
          content={faker.lorem.text()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

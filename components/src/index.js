import React from "react";
import ReactDOM from 'react-dom';
import {faker} from '@faker-js/faker';
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>Are you sure?</ApprovalCard>
            <ApprovalCard>
                <div>
                    <h4>Are you sure in HTML</h4>
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author={faker.name.findName()} timeAgo="Today at 4.45PM" text="Awesome stuff" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author={faker.name.findName()} timeAgo="Today at 2.00AM" text="Nice blog post" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author={faker.name.findName()} timeAgo="Yesterday at 12.30PM" text="Awesome stuff" avatar={faker.image.avatar()}/>
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('#root'))
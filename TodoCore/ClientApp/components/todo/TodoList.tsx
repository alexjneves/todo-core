import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';

interface TodoListState {
}

export class TodoList extends React.Component<RouteComponentProps<{}>, TodoListState> {
    constructor() {
        super();
        this.state = {};
    }

    public render() {
        return <div>
                   <h1>To-do List</h1>
               </div>;
    }
}

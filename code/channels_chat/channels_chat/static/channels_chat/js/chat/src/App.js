import React, { Component } from 'react';

import MessageListTab from './MessageListTab';
import { Tabs } from './Tabs';

class App extends Component {
    render() {
        const tabs_names = ['chat', 'questions'];

        return (
            <div id="app">
                <Tabs tabs={tabs_names} />
                <MessageListTab/>
            </div>
        );
    }
}

export default App;

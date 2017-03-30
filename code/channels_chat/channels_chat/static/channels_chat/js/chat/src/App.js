import React, { Component } from 'react';

import MessageListTab from './MessageListTab';
import Tabs from './Tabs';
import UsernameDialog from './UsernameDialog';

class App extends Component {
    render() {
        const tabs_names = ['chat', 'question'];

        return (
            <div id="app">
                <Tabs tabs={tabs_names} />
                <MessageListTab/>

                <UsernameDialog/>
            </div>
        );
    }
}

export default App;

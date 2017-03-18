/**
 * Created by rwar on 18.03.17.
 */

import React from 'react';
import { connect } from 'react-redux';

import { setTab } from './actions';


class _Tabs extends React.Component
{
   render()
   {
       const unique_tabs = this.props.tabs.filter((item, pos) => {
           return this.props.tabs.indexOf(item) === pos;
       });
       const tabs = unique_tabs((tab_name) => {
           const tab_id = 'tab_' + tab_name;
           const classes = "tab" + (
               this.props.currentTab === tab_name ?
               " current" : "");

           return (
               <div key={tab_id} id={tab_id}
                    class_name={classes}
                    onClick={this.props.onSelectTab}
               >
                   {tab_name.toUpperCase()}
               </div>
           );
       });

       return (
           <nav class_name="tabs">
               {}
           </nav>
       );
   }
}

const mapStateToProps = (state) => {
    return {
        currentTab: state.currentTab,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectTab: (id) => {
            const tab_name = id.slice(4);

            dispatch(setTab(tab_name));
        },
    };
};

const Tabs = connect(
    mapStateToProps,
    mapDispatchToProps
)(_Tabs);

module.exports.Tabs = Tabs;
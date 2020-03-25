import React from 'react';
import {Paper, Tabs, Tab} from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create';
import GroupIcon from '@material-ui/icons/Group';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import './styles.css';
import StarRateIcon from "@material-ui/icons/StarRate";
import EventCard from "../EventCard";

class UserProfile extends React.Component {
    state = {
        tab: 0
    };

    handleTabChange = (event, value) => {
        this.setState({
            tab: value
        });
    };

    eventType() {
        const {user, events, onEditing, onViewing} = this.props;

        if (this.state.tab === 0) {
            const filteredEvents = events.filter(event => event.username === user.username)
            if (filteredEvents.length != 0) {
                return (
                    filteredEvents.map(event => (
                        <EventCard
                            username={user.username}
                            onEditing={onEditing}
                            onViewing={onViewing}
                            event={event}/>
                    ))
                )
            } else {
                return <div className="empty-list-text">You have not created any events.</div>
            }
            
        } else {
            const filteredEvents = events.filter(event => event.members.includes(user.username))
            if (filteredEvents != 0) {
                return(
                    filteredEvents.map(event => (
                        <EventCard
                            username={user.username}
                            onEditing={onEditing}
                            onViewing={onViewing}
                            event={event}/>
                    ))
                )
            } else {
                return <div className="empty-list-text">You have not joined any events.</div>
            }
            
        }
    }

    render() {
        const {user, events} = this.props;
        const stars = [];
        for (let i=0; i < user.rating; i++) {
            stars.push(<StarRateIcon fontSize='large'/>)
        }

        console.log(user);
        console.log(events);

        return (
            <div id='user-profile'>
                <div id='user-info'>
                    <h1>{'@' + user.username}</h1>
                    <div>
                        {stars}
                    </div>
                </div>

                <Paper>
                    <Tabs
                        value={this.state.tab}
                        onChange={this.handleTabChange}
                        variant="fullWidth"
                        indicatorColor="secondary"
                        textColor="secondary"
                    >
                        <Tab icon={<CreateIcon />} label="CREATED" />
                        <Tab icon={<GroupIcon />} label="JOINED" />
                    </Tabs>
                </Paper>
                <div className="event-list">
                    {this.eventType()}
                </div>
            </div>
        )
    }
}

export default UserProfile;
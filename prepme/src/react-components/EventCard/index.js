import React from "react";

import "../../index.css";
import "./styles.css";

import avatar1 from '../EventCard/static/avatar_1.png';
import avatar2 from '../EventCard/static/avatar_2.png';
import avatar3 from '../EventCard/static/avatar_3.png';
import avatar4 from '../EventCard/static/avatar_4.png';
import avatar5 from '../EventCard/static/avatar_5.png';
import avatar6 from '../EventCard/static/avatar_6.png';

import { List, ListItem, ListItemText, ListItemIcon, Button} from '@material-ui/core'; 
import EventIcon from '@material-ui/icons/Event';

/* Component for the Home page */
class EventCard extends React.Component {
  
  state = {
    isJoined: false
  }
  addMember = (event) => {
    if(event.members.includes(this.props.username)){
      const indx = event.members.indexOf(this.props.username);
      event.members.splice(indx,1)
      console.log(event.members)
      this.setState({ isJoined:true }); 
    }
    else {
      this.setState({ isJoined:false}); 
      event.members.push(this.props.username)
      console.log(event.members)
    }
  }

  render() {
  
    const {username, isAdmin,onEditing ,onViewing, event} = this.props 
    
    let join_value = "Join"
    if (event.members.includes(username)) {
      join_value = "Joined"
    }

    const icons = [avatar1, avatar3, avatar5, avatar2, avatar4, avatar6]
    return (
      <div className="event-card">
        <div className="header" >
          <div className="event-info">
            <div className="icon">
              <img id="icon-img" src={ icons[event.icon]}/>
            </div>
            <div>
            <div className="course" >
              {event.course}
            </div>
            <div className="event-subject">
              {event.subject}
            </div>
            </div>
          </div>
          <div className="username" >
             {'@' + event.username}
          </div>
        </div>
        <div className='event_description'>
            {event.description}
        </div>
        <div className="actions">
          <div>
              { isAdmin || event.members.includes(username) ? (
                <div className="action-button" id='rate-button'>
                  <Button onClick={() => onEditing(event)}  variant="outlined" color="primary" size="small">
                    Rate Organizer
                  </Button>
                </div>
              ) : ( <div /> )}
          </div>
          <div className="right_actions">
              { isAdmin || username === event.username ? (
                  <div className="action-button" id='edit-button'>
                    <Button onClick={() => onEditing(event)}  variant="outlined" color="primary" size="small">
                      Edit
                    </Button>
                  </div>
                ) : ( <div /> )}
                <div className="action-button" id='view-button'>
                  <Button onClick={() => onViewing(event)}  variant="outlined" color="primary" size="small">
                    View
                  </Button>
                </div>
                <div className="action-button" id='join-button'>
                  <Button onClick={ () => { this.addMember(event)}} variant="outlined" color="primary" size="small">
                    {join_value}
                  </Button>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default EventCard;
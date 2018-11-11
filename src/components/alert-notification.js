import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export class SharedAlert extends React.Component {

  render() {
      return (
         <div id="alertNotification" className="BG">
           <span className="video-clip-shared-alert">
            <FontAwesomeIcon icon={['fas', 'check-circle']}/>
            &nbsp;
            Video clip shared with Slack!
          </span>
          <FontAwesomeIcon
            icon={['fal', 'times']}
            className="close-alert"
            onClick={this.props.closeAlert}/>
         </div>
      );
  }
}


export class ErrorAlert extends React.Component {

  render() {
      return (
         <div id="errorAlertNotification" className="ERROR-BG">
           <span className="channel-selection-validation-alert">
            <FontAwesomeIcon icon={['fas', 'times-circle']}/>
            &nbsp;
            Please select a Slack channel to post the video clip to!
          </span>
          <FontAwesomeIcon
            icon={['fal', 'times']}
            className="close-alert"
            onClick={this.props.closeAlert}/>
         </div>
      );
  }
}

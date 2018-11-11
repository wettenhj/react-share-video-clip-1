import React from 'react';
import Modal from 'react-modal';
import {SelectChannel} from './select-channel.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export class ShareVideoModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        modalIsOpen: props.modalIsOpen
    };

    this.afterOpenModal = this.afterOpenModal.bind(this);
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  componentDidMount() {
      Modal.setAppElement('body');
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.props.closeModal}
          contentLabel="Share video clip"
          className="share-video-modal"
        >
            <span className="Share-video-clip">
              Share video clip
            </span>
            <FontAwesomeIcon icon={['fal', 'times']}
                             className="Rectangle-12"
                             onClick={this.props.closeModal}/>
            <div className="Rectangle-20">
              <span className="Select-slack-channel">
                Select slack channel
              </span>
              <span className="-copy">
                To share this clip, select the Slack channel you want to post
                to, then click 'Share with Slack'.
              </span>
              <span className="participant">
                Projects0001 Report / Task 2 / <span style={{color: "#333333"}}>Participant 4</span>
              </span>
              <FontAwesomeIcon icon={['fas', 'video']} className="video-copy"/>
              <span className="Start-Copy">Start</span>
              <span className="Time" style={{left: "75px"}}>2:30</span>
              <span className="End">End</span>
              <span className="Time" style={{left: "141px"}}>2:30</span>
              <SelectChannel
                placeholder="Select"
                onChange={this.props.handleChannelSelectionChange}
                selectedChannel={this.props.selectedChannel}
              />
              <button id="shareWithSlackButton"
                   className="Rectangle-16"
                   onClick={this.props.shareWithSlack}>
                  <span className="Share-with-Slack">Share with Slack</span>
              </button>
            </div>
        </Modal>
      </div>
    );
  }
}

import React from 'react';
import Background from './images/background_image.png';
import {ShareVideoModal} from './share-video-modal.js';
import {SharedAlert} from './alert-notification.js';
import {ErrorAlert} from './alert-notification.js';


export class ScreenContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        showModal: false,
        sharedAlertIsVisible: false,
        errorAlertIsVisible: false,
        selectedChannel: null
    };

    this.openShareVideoClipModal = this.openShareVideoClipModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.shareWithSlack = this.shareWithSlack.bind(this);
    this.closeAlert = this.closeAlert.bind(this);
  }

  openShareVideoClipModal() {
      this.setState(state => ({
        showModal: true,
        sharedAlertIsVisible: false,
        errorAlertIsVisible: false,
        selectedChannel: null
      }));
  }

  closeModal() {
      this.setState(state => ({
        showModal: false
      }));
  }

  handleChannelSelectionChange = (selectedChannel) => {
    this.setState({ selectedChannel });
  }

  shareWithSlack() {
      if (this.state.selectedChannel) {
        this.setState(state => ({
          showModal: false,
          sharedAlertIsVisible: true,
          errorAlertIsVisible: false
        }));
      } else {
        this.setState(state => ({
          showModal: false,
          sharedAlertIsVisible: false,
          errorAlertIsVisible: true
        }));
      }
  }

  closeAlert() {
      this.setState(state => ({
        sharedAlertIsVisible: false,
        errorAlertIsVisible: false
      }));
  }

  render() {
      return (
        <div id="screenContainer"
             style={{width: "1440px", height: "800px",
                     backgroundImage: "url(" + Background + ")",
                     backgroundSize: "contain"}}>
          <button id="clickButton"
               style={{width: "300px", height: "46px", borderRadius: "2px", backgroundColor: "#65c7ab",
                       position: "relative", left: "570px", top: "240px"}}
               onClick={this.openShareVideoClipModal}>
              <span className="button-text">Click</span>
          </button>
          <ShareVideoModal
              modalIsOpen={this.state.showModal}
              closeModal={this.closeModal}
              handleChannelSelectionChange={this.handleChannelSelectionChange}
              shareWithSlack={this.shareWithSlack}
              selectedChannel={this.state.selectedChannel}
          />
          {this.state.sharedAlertIsVisible ? <SharedAlert closeAlert={this.closeAlert}/> : null}
          {this.state.errorAlertIsVisible ? <ErrorAlert closeAlert={this.closeAlert}/> : null}
        </div>
      );
  }
}

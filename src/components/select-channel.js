import React from 'react';
import Select, {components} from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// See: https://react-select.com/styles
const selectChannelStyles = {
    container: styles => ({ ...styles,
      position: "absolute",
      top: "162px",
      width: "352px",
      height: "40px",
      padding: "0px",
      margin: "0px" }),
    placeholder: styles => ({ ...styles,
      width: "200px",
      height: "14px",
      fontFamily: "Lato",
      fontSize: "14px",
      fontWeight: "normal",
      fontStyle: "normal",
      fontStretch: "normal",
      lineHeight: "1",
      letterSpacing: "normal",
      color: "var(--greyish)"}),
    input: styles => ({ ...styles,
      width: "200px",
      height: "14px",
      fontFamily: "Lato",
      fontSize: "14px",
      fontWeight: "normal",
      fontStyle: "normal",
      fontStretch: "normal",
      lineHeight: "1",
      letterSpacing: "normal"}),
    groupHeading: styles => ({ ...styles,
      textTransform: "none",
      fontWeight: "bold",
      color: "black",
      fontFamily: "Lato",
      fontSize: "14px"
    }),
    option: styles => ({ ...styles,
      fontFamily: "Lato",
      fontWeight: "normal",
      fontSize: "14px",
      paddingTop: "13px",
      marginLeft: "16px",
      paddingBottom: "13px"}),
    valueContainer: styles => ({ ...styles,
        paddingLeft: "16px",
        height: "40px"})
};


export class SelectChannel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      channelOptions: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8010/proxy/v1/slack/")
      .then(res => res.json())
      .then(
        (result) => {

          function validSlackChannelName(channel) {
            return channel.label.startsWith("#");
          }
          this.setState({
            isLoaded: true,
            channels: result.channels.map(channel => {return {value: channel.name, label: channel.name}}).filter(validSlackChannelName)
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const DropdownIndicator = (props) => {
      return components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
          <FontAwesomeIcon icon={['fa', 'chevron-down']}
          />
        </components.DropdownIndicator>
      );
    };
    const { error, isLoaded, channels } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      const options = [ { label: 'Channels', options: channels} ];
      return (
        <Select
          value={this.props.selectedChannel}
          components={DropdownIndicator}
          placeholder={this.props.placeholder}
          options={options}
          styles={selectChannelStyles}
          classNamePrefix="select-channel-"
          onChange={this.props.onChange}
        />
      );
    }
  }
}

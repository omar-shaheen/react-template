import axios from "axios";
import React, { Component } from "react";
import { SocialMedia, Social, Icon, SocialDesk, Span } from "./style.js";

class SocailMedia extends Component {
  state = {
    social: [],
  };

  componentDidMount() {
    axios.get("js/data.json").then((res) => {
      this.setState({
        social: res.data.social,
      });
    });
  }

  render() {
    const { social } = this.state;

    const socialList = social.map((socialItem) => {
      return (
        <Social item={socialItem.id} key={socialItem.id}>
          <Icon className={socialItem.icon}></Icon>
          <SocialDesk>
            <Span className="info1"> {socialItem.title} </Span>
            <Span className="info2"> {socialItem.body} </Span>
          </SocialDesk>
        </Social>
      );
    });

    return (
      <SocialMedia>
        {socialList}
        {/* <Social twitter>
          <Icon className="icon fa fa-twitter fa-lg"></Icon>
          <SocialDesk>
            <Span className="info1">Tweet Me on</Span>
            <Span className="info2">Social twitter</Span>
          </SocialDesk>
        </Social>

        <Social pin>
          <Icon className="icon fa fa-pinterest fa-lg"></Icon>
          <SocialDesk>
            <Span className="info1">Pin Me on</Span>
            <Span className="info2">Social Pinterest</Span>
          </SocialDesk>
        </Social> */}
      </SocialMedia>
    );
  }
}

export default SocailMedia;

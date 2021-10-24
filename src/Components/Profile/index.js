import React, { Component } from "react";
import axios from "axios";
import {
  ProfileSkills,
  ProfileInfo,
  ProfileList,
  ProfileItem,
  ProfileItemSpan,
  SpanWeb,
  Skills,
  SkillsDesc,
  Bar,
  Title,
  TitlePerc,
  Parent,
  ParentSpan,
  ProfileTitle,
  ProfileTitleSpan,
} from "./style.js";

/*
  Task : Lecture => #8

  [1] Convert Style to Styled Components + HTML
  [2] use axios + Loop skills [ Based Component /Or/ Hooks ]
*/

class Profile extends Component {
  state = {
    skills: [],
  };

  componentDidMount() {
    axios.get("js/data.json").then((res) => {
      this.setState({
        skills: res.data.skills,
      });
    });
  }

  render() {
    const { skills } = this.state;

    return (
      <ProfileSkills>
        <div className="container">
          <ProfileInfo>
            <ProfileTitle>
              <ProfileTitleSpan>My </ProfileTitleSpan>Profile
            </ProfileTitle>
            <ProfileList>
              <ProfileItem>
                <ProfileItemSpan>Name</ProfileItemSpan>
                Hamza Nabil
              </ProfileItem>
              <ProfileItem>
                <ProfileItemSpan>Birthday</ProfileItemSpan>
                21/1/1996
              </ProfileItem>
              <ProfileItem>
                <ProfileItemSpan>Address</ProfileItemSpan>
                Ain shams
              </ProfileItem>
              <ProfileItem>
                <ProfileItemSpan>Phone</ProfileItemSpan>
                4444 5555 6666
              </ProfileItem>
              <ProfileItem>
                <ProfileItemSpan>Email</ProfileItemSpan>
                hamza@hamza.com
              </ProfileItem>
              <ProfileItem>
                <ProfileItemSpan>Website</ProfileItemSpan>
                <SpanWeb className="web">www.google.com</SpanWeb>
              </ProfileItem>
            </ProfileList>
          </ProfileInfo>

          <Skills>
            <ProfileTitle>
              Some <ProfileTitleSpan>skills</ProfileTitleSpan>
            </ProfileTitle>
            <SkillsDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              praesentium blanditiis esse cupiditate, omnis similique.
            </SkillsDesc>

            {skills.map((skill) => (
              <Bar key={skill.id}>
                <Title>{skill.title}</Title>
                <TitlePerc>{skill.titlePerc}</TitlePerc>
                <Parent>
                  <ParentSpan width={skill.percent}></ParentSpan>
                </Parent>
              </Bar>
            ))}
          </Skills>
        </div>
      </ProfileSkills>
    );
  }
}

export default Profile;

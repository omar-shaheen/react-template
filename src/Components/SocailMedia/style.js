import styled from "styled-components";

export const SocialMedia = styled.div`
  height: auto;
  overflow: hidden;
`;

export const Social = styled.div`
  width: 33.33%;
  float: left;
  box-sizing: border-box;
  padding: 100px 0 100px 60px;
  background-color: ${(props) => (props.item === 1 ? "#3b5998" : "")};
  background-color: ${(props) => (props.item === 2 ? "#498cbf" : "")};
  background-color: ${(props) => (props.item === 3 ? "#cc2127" : "")};
  @media (max-width: 991px) {
    width: 100%;
    float: none;
  }
`;

/* .social-media .social.face {
    background: #3b5998;
}

.social-media .social.twitter {
    background: #498cbf;
}

.social-media .social.pin {
    background: #cc2127;
} */

export const Icon = styled.i`
  width: 50px;
  height: 50px;
  background: #fff;
  text-align: center;
  line-height: 50px;
  color: #888;
  float: left;
  margin-right: 10px;
`;

export const SocialDesk = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
  color: #fff;
`;

export const Span = styled.span`
  display: block;
  margin-bottom: 8px;
`;

// .social-media .social p span.info2 {
//     font-weight: normal
// }

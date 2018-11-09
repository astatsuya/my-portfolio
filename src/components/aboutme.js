import React from 'react';
import { Panel, Table } from 'react-bootstrap';
import Octicon, {LogoGithub} from '@githubprimer/octicons-react'

const AboutMe = () => {
  return (
    <div className="Aboutme">
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h3">About me</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Table striped bordered condensed hover>
           <thead>
             <tr>
              <td>略歴</td>
              <td colSpan="2">1987年生まれ男性、経済学部卒業</td>
             </tr>
             <tr>
              <td>職歴</td>
              <td colSpan="2">
                弱電メーカープロジェクトマネージャー3年
                <br />
                マレーシアにて海外法人営業2年
              </td>
             </tr>
             <tr>
              <td>語学</td>
              <td colSpan="2">海外在住計4年, TOEIC850, TOEIC SW 300</td>
             </tr>
             <tr>
              <td>その他</td>
              <td colSpan="2">
                GitHub: <a href="https://github.com/astatsuya" target="_blank" rel="noopener noreferrer">https://github.com/astatsuya</a>
                <br />
                Medium(学習記録): <a href="https://medium.com/@astatsuya" target="_blank" rel="noopener noreferrer">https://medium.com/@astatsuya</a>
                <br />
                Twitter: <a href="https://twitter.com/astatsuya1" target="_blank" rel="noopener noreferrer">https://twitter.com/astatsuya1</a>
                <br />
                E-mail: <a href="https://goo.gl/forms/dFk8SH5G4sPczJBf2" target="_blank" rel="noopener noreferrer">こちらのフォーム</a>からお願いします。
                <br />
              </td>
             </tr>
           </thead>
          </Table>
        </Panel.Body>
      </Panel>
    </div>
  );
}

//
//
// class Skills extends React.Component {
//   render() {
//     return (
//       <div className="Main">
//         <Panel>
//           <Panel.Heading>
//             <Panel.Title componentClass="h3">Skills</Panel.Title>
//           </Panel.Heading>
//           <Panel.Body>
//             <Table striped bordered condensed hover>
//              <thead>
//                <tr>
//                 <td>Language</td>
//                 <td colSpan="2">JavaScript, HTML5, CSS3</td>
//                </tr>
//                <tr>
//                 <td>Frameworks</td>
//                 <td colSpan="2">React</td>
//                </tr>
//                <tr>
//                 <td>Others</td>
//                 <td colSpan="2">Redux</td>
//                </tr>
//              </thead>
//             </Table>
//           </Panel.Body>
//         </Panel>
//       </div>
//     );
//   }
// }

export default AboutMe;

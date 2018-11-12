import React from 'react';
import { Panel, Table } from 'react-bootstrap';
import { tableStyle } from './skills'

const AboutMe = () => {
  return (
    <Panel className="Aboutme">
      <Panel.Heading>
        <Panel.Title componentClass="h3">About me, Contacts</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
        <Table striped bordered condensed hover style={tableStyle}>
         <thead>
           <tr>
            <td>略歴</td>
            <td colSpan="2">1987年生まれ男性、経済学部卒業</td>
           </tr>
           <tr>
            <td>職歴</td>
            <td colSpan="2">
              都内の弱電メーカーで建設施工プロジェクト管理3年
              <br />
              マレーシアの梱包材メーカー、商社で海外法人営業2年
            </td>
           </tr>
           <tr>
            <td>語学</td>
            <td colSpan="2">TOEIC850, TOEIC SW 300, 海外在住計約4年</td>
           </tr>
           <tr>
            <td>その他</td>
            <td colSpan="2">
              GitHub: <a href="https://github.com/astatsuya" target="_blank" rel="noopener noreferrer">https://github.com/astatsuya</a>
              <br />
              Medium (学習記録): <a href="https://medium.com/@astatsuya" target="_blank" rel="noopener noreferrer">https://medium.com/@astatsuya</a>
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
  );
}

export default AboutMe;

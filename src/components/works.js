import React from 'react';
import { Panel, Image, Row, Col } from 'react-bootstrap';

const Works = () => {
  return (
    <Panel className="Works">
      <Panel.Heading>
        <Panel.Title componentClass="h3">Works</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
        <Row>
          <Col xs={12} md={6}>
            <a href="https://astatsuya.github.io/transfer/" target="_blank" rel="noopener noreferrer">
              <h4>部署異動の傾向を調べるアプリ</h4>
            </a>
            <br />
            <p>性別、年齢、役職など指定した条件から、異動までの平均年数と異動先を検索する。</p>
            <p>React, Redux, React-Routerを使用。</p>
          </Col>
          <Col xs={12} md={6} style={{maxWidth: 900}}>
            <Image src="images/transfer.png" alt="" responsive thumbnail />
          </Col>
        </Row>
      </Panel.Body>
      <Panel.Body>
        <Row>
          <Col xs={12} md={6}>
            <a href="https://astatsuya.github.io/scout/" target="_blank" rel="noopener noreferrer">
              <h4>パフォーマンスの記録、確率を手軽にカウントするアプリ</h4>
            </a>
            <br />
            <p>スポーツ等のパフォーマンスを4段階で記録できる。</p>
            <p>Reactを使用。</p>
          </Col>
          <Col xs={12} md={6} style={{maxWidth: 900}}>
            <Image src="images/Scout.png" alt="" responsive thumbnail />
          </Col>
        </Row>
      </Panel.Body>
      <Panel.Body>
        <Row>
          <Col xs={12} md={6}>
            <a href="https://astatsuya.github.io/scout/" target="_blank" rel="noopener noreferrer">
              <h4>ポートフォリオ</h4>
            </a>
            <br />
            <p>こちらのサイト</p>
            <p>React, React-BootStrapを使用。</p>
          </Col>
          <Col xs={12} md={6} style={{maxWidth: 900}}>
            <Image src="images/Portfolio.png" alt="" responsive thumbnail />
          </Col>
        </Row>
      </Panel.Body>
      <Panel.Body>
        <Row>
          <Col xs={12} md={6}>
            <a href="https://astatsuya.github.io/scoreboard/" target="_blank" rel="noopener noreferrer">
              <h4>バレーボールのスコアボードアプリ</h4>
            </a>
            <br />
            <p>デュースは2点差になるまで継続、3セット先取、5セット目は15点マッチといった公式ルールを適用。</p>
            <p>JavaScript, HTML5, CSS3を使用。</p>
          </Col>
          <Col xs={12} md={6} style={{maxWidth: 900}}>
            <Image src="images/Scoreboard.png" alt="" responsive thumbnail />
          </Col>
        </Row>
      </Panel.Body>
    </Panel>
  );
}

export default Works;

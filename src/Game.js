import React, {Component} from 'react';
import Burger from './Burger';
import Stats from './Stats';
import Booster from './Booster';
import Reset from './Reset';


class Game extends React.Component {

    constructor(props) {
        super(props);
        this.mouseClicked = this.mouseClicked.bind(this);
        this.reset = this.reset.bind(this);
        
      }
    
      mouseClicked() {
        const clicks = this.props.clicks + 1;
        this.props.setClicks(clicks);
      }

      reset() {
        const clicks = 0;
        this.props.setClicks(clicks);
        window.location.reload(); 
      }


render() {
    return (
        <>
        <div className="header">
      <h1>Burger Clicker</h1>
      </div>
      <div className="content content--justified">
      <Stats count={this.props.clicks}/>
      <Burger onClick={this.mouseClicked}/>
      <Reset onClick={this.reset}/>
      <Booster boost={1} />
      </div>
      </>
          );
  }
}
export default Game;
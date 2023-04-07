import { Component } from "react";
import img1 from "../img/mat-ngua.jpg"
import img2 from "../img/mat-up.jpg"
class FaceCoin extends Component {
  constructor() {
    super();
    this.state = {
      isFaceCoin: false,
    };
    this.handleCoin = this.handleCoin.bind(this);
  }
  handleCoin = () => {
    this.setState({ isFaceCoin: !this.state.isFaceCoin });
  };
   imgCoin = {
    img1,
    img2 
  }
  render() {
    return (
      <>
        <h1>flip-coin</h1>
        {this.state.isFaceCoin ? (
          <div>
            <h2>mat ngửa</h2>
            <img src={this.imgCoin.img1}></img>
            <button onClick={this.handleCoin}>mat ngửa</button>
          </div>
        ) : (
          <div>
            <h2>sấp</h2>
            <img src={this.imgCoin.img2}></img>
            <button onClick={this.handleCoin}>mat sấp</button>
          </div>
        )}
      </>
    );
  }
}
export default FaceCoin;

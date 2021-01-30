import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isMenuOpen: false,
      email: '',
      password: '',
      phone: '',
      address: '',
    };
  }

  toggleMenu = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    });
  };

  handleChange = (e) => {
    this.setState({
      //"password" or "email"
      [e.target.name]: e.target.value,
    });
  };

  render() {
    let { isMenuOpen } = this.state;
    let shouldShow = isMenuOpen ? 'mobile-nav-bar-show' : null;

    return (
      <div className="App">
        <header className="header">
          <h1>WRPT1 AND DONE</h1>
          <nav className="nav-bar">
            <p className="nav-item">Home</p>
            <p className="nav-item">About</p>
            <p className="nav-item">Contact</p>
          </nav>
          <img
            alt="hamburger"
            onClick={() => this.toggleMenu()}
            className="hamburger"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
          />
          <nav className={`mobile-nav-bar ${shouldShow}`}>
            <p className="mobile-nav-item">Home</p>
            <p className="mobile-nav-item">About</p>
            <p className="mobile-nav-item">Contact</p>
          </nav>
        </header>

        {/* <div className="red-box"></div> */}
        <input name="email" onChange={(e) => this.handleChange(e)} />
        <input name="password" onChange={(e) => this.handleChange(e)} />
        <input name="address" onChange={(e) => this.handleChange(e)} />
        <input name="phone" onChange={(e) => this.handleChange(e)} />
        <input name="username" onChange={(e) => this.handleChange(e)} />
        <input name="kelsey" onChange={(e) => this.handleChange(e)} />
      </div>
    );
  }
}

export default App;

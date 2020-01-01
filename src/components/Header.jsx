import React from 'react';

class Header extends React.Component {

    render () {
        return (
            <div className="header d-flex justify-content-between align-items-center">
                <div className="col-md-2">
                    <div className="header__logo">
                        <h2>Yalantis</h2>
                        <h4>React.js school</h4>
                    </div>
                </div>
                <div className="mr-4">
                    <div className="header__about">
                        <div className="row d-flex align-items-center">
                            <span>by Nikolas Kohno</span>
                            <img className="pl-3" src={require('../assets/img/about.png')} alt="about img"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
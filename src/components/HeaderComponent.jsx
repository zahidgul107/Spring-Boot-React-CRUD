import React, { Component } from 'react';

class HeaderComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar bg-dark">
                        <div className="container-fluid">
                            <span className="navbar-brand mb-0 h1 text-white ps-5">EMS</span>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;
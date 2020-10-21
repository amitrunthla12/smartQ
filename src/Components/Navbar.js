import React from 'react';

const style = {
   background: "#FEBF34"
}

class Navbar extends React.Component{
    render() {
        return (
            <div style={style}>
                <nav className="navbar navbar-light">
                    <div className="row">
                        <div className='col' style={{paddingTop: 6}}>
                            <i className="fa fa-arrow-left"/>
                        </div>
                        <div className='col-md-10'>
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Navbar;
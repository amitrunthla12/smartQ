import React from 'react';

class Footer extends React.Component{
    render() {
        return (
            <div className="row footer">
                <div className="col">
                    <button className="btn  my-2 my-sm-0 btnFooter" onClick={this.props.onUnavailable}>All Un-Available</button>
                </div>
                <div className="col">
                    <button  className="btn  my-2 my-sm-0 btnFooter" onClick={this.props.onAvailable}>All Available</button>
                </div>
                <div className="col">
                    <button  className="btn  my-2 my-sm-0 btnFooter">Apply</button>
                </div>
            </div>
        );
    }
}
export default Footer;
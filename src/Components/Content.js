import React from 'react';
import data from "../DummyData/Data"
import "../App.css"
import Footer from "./Footer";
import {YELLOW_COLOR, RED_COLOR, GREEN_COLOR} from "../common/commonUtils"

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: [],
            active: "EATORAMA"
        }
    }

    componentDidMount() {
        this.getData('EATORAMA')
    }

    updateState = (updatedValue) => {
        this.setState({
            values: updatedValue
        })
    }

    getData = (hotelName) => {
        const hotelData = data.menuDetails[hotelName]
        for (let i = 0; i < hotelData.length; i++) {
            hotelData[i].color = this.IsItemAvailable(hotelData[i])
        }
        this.updateState(hotelData)
        this.setState({
            active: hotelName
        })
    }

    toggleColor = (item) => {
        let updateValues = this.state.values
        updateValues.find((i) => {
            if (i === item) {
                i.color = i.color === GREEN_COLOR ? RED_COLOR : GREEN_COLOR
            }
        })
        this.updateState(updateValues)
    }

    availableAll = () => {
        let updateValues = this.state.values
        updateValues.map((i) => i.color = GREEN_COLOR)
        this.updateState(updateValues)
    }

    unavailableAll = () => {
        let updateValues = this.state.values
        updateValues.map((i) => i.color = RED_COLOR)
        this.updateState(updateValues)
    }

    timeNow = () => {
        let d = new Date(),
            h = (d.getHours() < 10 ? '0' : '') + d.getHours(),
            m = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
        return h + ':' + m;
    }

    IsItemAvailable = (item) => {
        let timeString = item.servingtime
        let ofs = item.ofs
        let curTime = this.timeNow()
        let timeArr = timeString.split(',')
        let checkFlag = false
        for (let i = 0; i < timeArr.length; i++) {
            let item = timeArr[i]
            let temp = item.split('-')
            if (temp[0] <= curTime && temp[1] >= curTime) {
                checkFlag = true
            }
            if (checkFlag) {
                break
            }
        }

        return checkFlag || ofs ? GREEN_COLOR : RED_COLOR;
    }

    getMenu = (detailData) => {
        const temp = [];
        for (const menuArrKey in detailData) {
            temp.push(menuArrKey)
        }
        return temp
    }

    render() {
        const menuArr = this.getMenu(data.menuDetails)
        return (
            <div className="container-fluid">
                <div className="row content">
                    <div className="col-md-2 p-0 sidenav">
                        <div className="card sideMenu">
                            {
                                menuArr.map((item, index) => {
                                    const bgColor = item === this.state.active ? YELLOW_COLOR : ''
                                    return (
                                        <div className="mt-4 cardMenu" style={{background: bgColor}}
                                             onClick={() => this.getData(item)} key={index}>
                                            {item}
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            {
                                this.state.values.map((item, index) => {
                                    return (
                                        <div style={{margin: 10, padding: 10}} onClick={() => this.toggleColor(item)}
                                             key={index}>
                                            <div className="card foodCard" style={{background: item.color}} key={index}>
                                                <div className="card-body">
                                                    <div className="foodTitle">{item.foodname}</div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
                <Footer
                    onUnavailable={this.unavailableAll}
                    onAvailable={this.availableAll}
                />
            </div>

        );
    }
}

export default Content
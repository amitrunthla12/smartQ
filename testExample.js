// 1.Function to find if a menu item is available at the current moment or not
// A menu item ( eg: Dosa ) in a restaurant menu is available during certain period of time
// in a day. For example Dosa might be available from 7:00 to 10:00 and from 17:00 to
// 21:00. Objective of the program is to find out if this item is currently available or not
// based on the system current time.
//     Implement a function called ‘IsItemAvailable’ which accepts a ‘timestring’ as parameter
// and returns yes or no based on current time
// Input:
//     timestring = ‘17:00-21:00,7:00-10:00,10:45-12:00’
// Output:
//     If current time is 17:15
// Dosa available
// if current time is 12:30
// Dosa not available

function timeNow() {
    let d = new Date(),
        h = (d.getHours()<10?'0':'') + d.getHours(),
        m = (d.getMinutes()<10?'0':'') + d.getMinutes();
    return h + ':' + m;
}
function IsItemAvailable(timeString, item){
    let curTime = timeNow()
    let timeArr = timeString.split(',')
    let checkFlag = false
    for (let i = 0; i < timeArr.length; i++) {
        let item = timeArr[i]
        let temp = item.split('-')
        if(temp[0] <= curTime && temp[1] >= curTime ){
            checkFlag = true
        }
        if(checkFlag){
            break
        }
    }
    checkFlag ? console.log(`${item} available`) : console.log(`${item} not available`)
}
const  timeString = "18:00-18:05,7:00-10:00,10:45-12:00";
const item = 'Dosa'

IsItemAvailable(timeString, item)


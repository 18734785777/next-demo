function getCurrentTime() {
    const nowTime = new Date()
    const hours = nowTime.getHours()
    const minutes = nowTime.getMinutes()
    const seconds = nowTime.getSeconds()
    return hours + ':' + (minutes >= 10 ? minutes : '0' + minutes) + ':' + (seconds >= 10 ? seconds : '0' + seconds)
}

export {
    getCurrentTime
};
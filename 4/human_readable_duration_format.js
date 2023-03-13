function formatDuration (seconds) {
    const second = seconds % 60
    const minute = Math.floor(seconds / 60) % 60
    const hour = Math.floor(seconds / (60 * 60)) % 60
    const day = Math.floor(seconds / (60 * 60 * 24)) % 365
    const year = Math.floor(seconds/ (60 * 60 * 24 * 365))



    return year
}


console.log(formatDuration(99999999))
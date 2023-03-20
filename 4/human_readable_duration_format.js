function formatDuration (time) {
    if (time === 0) return 'now'

    const seconds = time % 60
    const minutes = Math.floor(time / 60) % 60
    const hours = Math.floor(time / (60 * 60)) % 24
    const days = Math.floor(time / (60 * 60 * 24)) % 365
    const years = Math.floor(time/ (60 * 60 * 24 * 365))

    const parts = [];

    function pluralOrNot(number) {
        return number > 1 ? "s" : ""
    }

    function generatePart(number, title) {
        parts.push(number + ` ${title}` + pluralOrNot(number));
    }

    if (years > 0) {
        generatePart(years, 'year')
    }
    if (days > 0) {
        generatePart(days, 'day')
    }
    if (hours > 0) {
        generatePart(hours, 'hour')
    }
    if (minutes > 0) {
        generatePart(minutes, 'minute')
    }
    if (seconds > 0) {
        generatePart(seconds, 'second')
    }

    return  parts.length === 1 ? parts[0] : parts.slice(0, -1).join(', ') + ' and ' + parts[parts.length - 1]
}


console.log(formatDuration(15731080))
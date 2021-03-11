//date expected to be a valid Date
//start and finish are expected to be strings in HH:MM format
class Shift {
  constructor(date, start, finish) {
    validateDate(date)
    validateTime(start)
    validateTime(finish)
    this.length = validateLen(start, finish)
  }
}

export { Shift }

const validateDate = (obj) => {
  if (!obj) {
    throw `Error: Date can't be falsy!`
  }

  if (Object.prototype.toString.call(obj) !== '[object Date]' || isNaN(obj)) {
    throw `Error: Date couldn't be recognized as a JS Date object!`
  }
}

//Expects HH:MM format
const validateTime = (time) => {
  if ((typeof time) !== 'string') {
    throw `Error: ${time} was not a string!`
  }

  const [hrs, min] = time.split(':')

  if (isNaN(hrs) || isNaN(min) || !hrs || !min) {
    throw `Error: Time not in correct format! Use HH:MM format. Received: ${time}`
  }

  if (time.length !== 5) {
    throw `Error: Time length was not 5 characters! Received: ${time}`
  }

  if (hrs < 0 || hrs > 23) {
    throw `Error: Hours should be between 00 to 23! Received: ${time}`
  }

  if (min < 0 || min > 59) {
    throw `Error: Minutes should be between 00 to 59! Received: ${time}`
  }
}

const validateLen = (start, finish) => {
  const length = toHours(finish) - toHours(start)

  if (length < 0) {
    throw `Error: Shift ended before it started! Check you're sending starting time first.`
  }

  //extra
  if (length === 0) {
    throw `Error: Shift's length shouldn't be zero!`
  }

  if (length > 16) {
    throw `Error: Shift mustn't be longer than 16 hours!`
  }

  return length.toFixed(2)
}

const toHours = (time) => {
  const [hrs, min] = time.split(':')
  return Number(hrs) + (Number(min) / 60)
}
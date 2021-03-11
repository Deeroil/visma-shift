import { Shift } from '/Shift.js'

const submit = () => {
  const date = document.getElementById('date').value
  const start = document.getElementById('start').value
  const finish = document.getElementById('finish').value
  const dateObj = new Date(date)

  let shift
  try {
    shift = new Shift(dateObj, start, finish)
    document.getElementById('shiftInfo').innerText = `Shift is ${shift.length} hours long`
  } catch (e) {
    alert(e)
  }
}
document.getElementById('validateBtn').addEventListener('click', submit)
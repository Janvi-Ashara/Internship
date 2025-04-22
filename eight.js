// sort javascript array not use any inbult method
// 9. “Sort Array By Date
// const events = [
//   { name: 'Event 1', date: '2022-10-20’, location: ‘New York’ },
//   { name: ‘Event 2’, date: ‘2023-02-10’, location: ‘Paris’ },
//   { name: ‘Event 3’, date: ‘2023-01-01’, location: ‘Tokyo’ },
// ];
// The date property can be assumed to be a string in the format YYYY-MM-DD.


const events = [
    { name: 'Event 1', date: '2022-10-20', location: 'New York' },
    { name: 'Event 2', date: '2025-02-10', location: 'Paris' },
    { name: 'Event 3', date: '2023-01-01', location: 'Tokyo' },
    { name: 'Event 4', date: '2021-11-20', location: 'New York' },
    { name: 'Event 5', date: '2029-02-02', location: 'Paris' },
    { name: 'Event 6', date: '2024-01-21', location: 'Tokyo' },
    ];
// console.log(events[2].date)   

const allDates = events.map(event => event.date)
// console.log(allDates)
allDates.sort()
// console.log(allDates)

const sortDate = [...events].sort((a,b)=>new Date(a.date) - new Date(b.date))
console.log(sortDate)



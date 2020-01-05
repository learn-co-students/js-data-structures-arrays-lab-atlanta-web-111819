// Write your solution here!

let drivers = ["Milo", "Otis", "Garfield"]
function destructivelyAppendDriver(driver) {
    drivers.push(driver)
    return drivers
}

function destructivelyPrependDriver(driver) {
   drivers.unshift(driver)
   return driver
}

function destructivelyRemoveLastDriver() {
    drivers.pop()
    return drivers
 }

 function destructivelyRemoveFirstDriver() {
    drivers.shift()
    return drivers
 }

 function appendDriver(driver) {
     let newDrivers = [...drivers, driver]
     return newDrivers

 }

 function prependDriver(driver) {
     let newDrivers = [driver, ...drivers]
     return newDrivers
 }

 function removeLastDriver() {
     let newDrivers = drivers.slice(0, drivers.length -1)
     return newDrivers
 }

 function removeFirstDriver() {
     let newDrivers = drivers.slice(1)
     return newDrivers
 }
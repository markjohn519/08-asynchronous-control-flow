function myAsync1(s) {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    if (s === null) {
      reject( new Error(null))
    } else resolve("async1")
    }, 3000)
  })
}

function myAsync2(s) {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    if (s === null) {
      reject( new Error(null))
    } else resolve("async2")
    }, 2000)
  })
}

function myAsync3(s) {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    if (s === null) {
      reject( new Error(null))
    } else resolve("async3")
    }, 1000)
  })
}

function myAsync4() {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
      reject(`Promise rejected ${null}`)
    }, 3000)
  })
}

function start() {
  myAsync1('y').then(result => {
    console.log(result)
    return myAsync2()
  }).then(result => {
    console.log(result)
    return myAsync3()
  }).then(result => {
    console.log(result)
    return myAsync4()
  }).then(result => {
    console.log(result)
  }).catch(error => {
    console.log('In the catch', error);
  })
}

start()

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

async function start() {
	try {
  console.log(await myAsync1());
  console.log(await myAsync2());
  console.log(await myAsync3());
  console.log(await myAsync4());
  } catch (err) {
  console.log(err.message)
  }
}

start()
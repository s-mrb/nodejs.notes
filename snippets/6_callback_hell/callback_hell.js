

const ch = (delay1) => {
  setTimeout(
    (delay2) => {
      setTimeout(
        (delay3) => {
          setTimeout(
            (delay4) => {
              setTimeout(
                (delay5) => {
                  console.log('I got printed after ', delay1 * 4, ' ms')
                },
                delay4,
                delay4
              )
            },
            delay3,
            delay3
          )
        },
        delay2,
        delay2
      )
    },
    delay1,
    delay1
  )
}

ch(1000)


function strip(x: string | number) {
  if (typeof x === 'number') {
    return x.toFixed(2)
  } else {
    return x.trim()
  }
}


//=====================================


class MyResponse {
  header = 'response header'
  result = 'response result'
}

class MyError {
  header = 'error header'
  message = 'response message'
}

function handle(res: MyResponse | MyError) {
  if (res instanceof MyResponse) {
    return {
      info: res.header + res.result
    }
  } else {
    return {
      info: res.header + res.message
    }
  }
}

//=====================================

type AlertType = 'warning' | 'error' | 'success'

function setAlertType(alertType: AlertType) {
  //......
}

setAlertType('success')




class Ajax {
  static echo(data: any) {
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        if(data){
          resolve(data)
        }else{
          reject(new Error('error1'))
        }
      },300)
    })
  }
}

export {Ajax}
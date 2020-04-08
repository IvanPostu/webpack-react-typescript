/// <reference path="./3_namespace.ts" />

namespace Form {

  class MyForm {
    private type: FormType = 'inline'
    private state: FormState = 'active'

    constructor(public email: string) { }

    getInfo(): FormInfo {
      return {
        type: this.type,
        state: this.state
      }
    }

  }



}

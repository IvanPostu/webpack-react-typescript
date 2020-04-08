function Log(constructor: Function) {
  // console.log(constructor)
}

function Log2(target: any, propName: string | Symbol) {
  // console.log(target)
  // console.log(propName)
}

function Log3(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
  // console.log(target)
  // console.log(propName)
  // console.log(descriptor)
}

@Log
class Component2 {

  @Log2
  name: string

  constructor(name: string) {
    this.name = name
  }

  @Log3
  get componentName(): string {
    return this.name
  }

  @Log3
  logName(): void {
    console.log(`Component name: ${this.name}`)
  }

}


//===============================================================

interface ComponentDecorator {
  selector: string
  template: string
}

function Component(config: ComponentDecorator) {
  return function <T extends { new(...args: any[]): object }>(Constructor: T) {
    return class extends Constructor {
      constructor(...args: any[]) {
        super(...args)
      }
    }
  }
}

@Component({
  selector: '#card',
  template: `
    <div> Hello </div>
  `
})
class CardComponent {
  constructor(public name: string) { }

  logName(): void {
    console.log('qqq')
  }

}

// const card = new CardComponent('My card component') on initialize render on html

//===============================================================

type ValidatorType = 'required' | 'email'

interface ValidatorConfig {
  [prop: string]: {
    [validateProp: string]: ValidatorType
  }
}

const validators: ValidatorConfig = {}

function Required(target: any, propName: string) {
  validators[target.constructor.name] = {
    ...validators[target.constructor.name],
    [propName]: 'required'
  }
}

export function validate(obj: any): boolean {
  const objConfig = validators[obj.constructor.name]
  if (!objConfig) {
    return true
  }

  let isValid = true

  Object.keys(objConfig).forEach(key => {
    if (objConfig[key] === 'required') {
      isValid = isValid && !!obj[key]
    }
  })

  return isValid
}

export class Form {

  @Required
  public email: string | void

  constructor(email?: string) {
    this.email = email
  }

}

//===============================================================



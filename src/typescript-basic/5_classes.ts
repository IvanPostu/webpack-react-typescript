class Typescript {
  version: string

  constructor(version: string) {
    this.version = version
  }

  info(name: string) {
    return `${name} adjf lkadjklfj ldkaf  ${this.version}`
  }
}


// class Car {
//   readonly model : string
//   readonly numberOfWHeels: number = 4

//   constructor(theModel: string) {
//     this.model = theModel
//   }
// }

class Car {
  readonly numberOfWheels: number = 4
  constructor(readonly model: string) { }
}

//=====================================

class Animal {
  protected voice: string = ''
  public color: string = 'red'

  private makeSound(): string {
    return 'go'
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice
  }
}

//=====================================

abstract class Component {
  abstract render(): void
  abstract info(): string
}

class ApComponent extends Component {
  render(): void {

  }

  info() {
    return 'info'
  }
}









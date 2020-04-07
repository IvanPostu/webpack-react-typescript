interface Rect {
  readonly id: string,
  color?: string, //not required
  size: {
    width: number,
    height: number
  }
}

const rect1: Rect = {
  id: '1234',
  size: {
    height: 22,
    width: 33
  },
  color: 'red'
}

const rect2: Rect = {
  id: '333',
  size: {
    height: 122,
    width: 333
  },
}

rect2.color = 'blue'

const rect3 = {} as Rect
const rect4 = <Rect>{}

//=====================================

interface RectWithArea extends Rect {
  getArea: () => number
}

export const rect5: RectWithArea = {
  id: '222',
  size: {
    height: 122,
    width: 333
  },
  getArea(): number {
    return this.size.width * this.size.height
  }
}

//=====================================

interface IClock {
  time: Date
  setTime(date: Date): void
}

class Clock implements IClock {
  time: Date = new Date()

  setTime(date: Date): void {
    this.time = date
  }

}

//=====================================

interface Styles {
  [key: string]: string
}

const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
  color: 'red'
}

export class PostModel {
  public id;
  public title;
  public text;

  constructor(id: number, title: string, text: string) {
    this.id = id;
    this.title = title;
    this.text = text;
  }
}

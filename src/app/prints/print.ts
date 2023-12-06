// todo: add data to download here
// todo: make imgData byte or sth like a picture value
export class Print {
  private readonly _name: string;
  private readonly _description: string;
  private readonly _imgData: string;

  constructor(name: string, description: string, imgLink: string) {
    this._name = name;
    this._description = description;
    this._imgData = imgLink;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get imgData(): string {
    return this._imgData;
  }

  toString(): string {
    return this.name + ' | ' + this.description + ' | ' + this.imgData;
  }
}

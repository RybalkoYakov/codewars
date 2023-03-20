class File {
  filename = this.fullName.replace(/\.\w+$/gi, '')
  extension = this.fullName.replace(this.filename, '').replace('.', '')

  get fullName() {
    return this._fullName;
  }

  constructor(fullName, contents) {
    this._fullName = fullName;
  }

  getContents(){

  }

  write(str){

  }

  gets(){

  }

  getc(){

  }
}
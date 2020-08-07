class Error {
  constructor() {
    this.errors = {}
  }

  save(data) {
    this.errors = data
  }

  get(field) {
    if (this.errors[field]) {
      return this.errors[field][0]
    }
  }

  has(field) {
    return this.errors.hasOwnProperty(field)
  }

  clear(field) {
    delete this.errors[field]
  }
}

export default Error

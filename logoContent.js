// Circle
// `<svg width = "300" height = "200"><text x = "0" y = "15" fill = ${charColor}>${characters}/text></svg>`

// Triangle
// `<svg height="300" width="200"><text x = "0" y = "15" fill = ${this.charColor}>${characters}/text></svg>`

// Square
// `<svg width="300" height="200"><text x = "0" y = "15" fill = ${charColor}>${characters}/text></svg>`

class LogoContent {
    constructor() {
        this.characters = ''
        this.shape = ''
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.characters}</svg>`
    }

    setContent(characters, charColor) {
        if (characters.length > 3) {
            throw new Error('limit your logo to 3 characters')
        }
        this.characters = `<text x = "50%" y = "50%" fill = "${charColor}">${characters}</text>`
    }
    setShape(shape) {
        this.shape = shape.render()
    }
}

module.exports = LogoContent
// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
// characters, charColor, shape, shapeColor
// Module 10 Activity 8 Solved
// class ForumItem {
//   constructor(authorName, text, createdOn) {
//     this.authorName = authorName;
//     this.text = text;
//     this.createdOn = createdOn;
//   }
// }
class Shape {
  constructor(shapeColor, characters, charColor) {
    this.shapeColor = shapeColor;
    this.characters = characters;
    this.charColor = charColor;
  }
}

// class BlogPost extends ForumItem {
//   constructor(authorName, title, text, createdOn) {
//     super(authorName, text, createdOn);
//     this.title = title;
//     this.comments = [];
//   }

//   addComment(comment) {
//     this.comments.push(comment);
//   }
// }

class Circle extends Shape {
  constructor(shapeColor, characters, charColor) {
    super(shapeColor, characters, charColor)
  }

  // w3 schools svg tutorial
  render() {
    return `<svg width = "300" height = "200"><circle cx="150" cy="100" r="50" fill="${this.shapeColor}/><text x = "0" y = "15" fill = ${this.charColor}>${this.characters}/text></svg>`;
  }
}

class Triangle extends Shape {
  render() {
    return `<svg height="300" width="200">
      <polygon points="100,20 10,180 190,180" style="fill:"${this.color}"/><text x = "0" y = "15" fill = ${this.charColor}>${this.characters}/text>
    </svg>`;
  }
}

class Square extends Shape {
  render() {
    return `<svg width="300" height="200">
    <rect x = "50" y = "20" width = "150" height = "150" style = fill = "${this.color}"/><text x = "0" y = "15" fill = ${this.charColor}>${this.characters}/text>
  </svg>`;
  }
}

module.exports = Shape, Circle, Triangle, Square

// TODO: Create a class constructor named ForumItem that takes in 'authorName', 'text', and 'createdOn'.


// TODO: Setup BlogPost and Comment so they inherit their structure from ForumItem.
class BlogPost extends ForumItem {
  constructor(authorName, title, text, createdOn) {
    super(authorName, text, createdOn);
    this.title = title;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment extends ForumItem {
  constructor(authorName, text, createdOn, reaction) {
    super(authorName, text, createdOn);
    this.reaction = reaction;
  }
}

// TODO: Create a new object using the BlogPost class constructor.
const newPost = new BlogPost(
  'John Doe',
  'My Fourth Post',
  'Dogs, cats, and snakes are super cute!',
  '12/19/2021'
);

// TODO: Create a new object using the Comment class constructor.
const newComment = new Comment(
  'Jane Doe',
  'This post is really awesome!',
  '12/20/2021',
  '🐶😺🐍'
);
// TODO: Log both newly created BlogPost and Comment to the console.
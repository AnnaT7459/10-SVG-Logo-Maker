// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
// characters, charColor, shape, shapeColor
//reference: Module 10 Activity 8 Solved

class Shape {
  constructor(shapeColor, characters, charColor) {
    this.shapeColor = shapeColor;
    this.characters = characters;
    this.charColor = charColor;
  }
}

class Circle extends Shape {
  // w3 schools svg tutorial
  render() {
    return `<circle cx="150" cy="100" r="50" fill="${shapeColor}/></svg>`;
  }
}

class Triangle extends Shape {
  render() {
    return `
      <polygon points="100,20 10,180 190,180" style="fill:"${shapeColor}"/>
    </svg>`;
  }
}

class Square extends Shape {
  render() {
    return `
    <rect x = "50" y = "20" width = "150" height = "150" style = fill = "${shpaeColor}"/>
  </svg>`;
  }
}

module.exports = { Circle, Triangle, Square }

// // TODO: Create a class constructor named ForumItem that takes in 'authorName', 'text', and 'createdOn'.


// // TODO: Setup BlogPost and Comment so they inherit their structure from ForumItem.
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

// class Comment extends ForumItem {
//   constructor(authorName, text, createdOn, reaction) {
//     super(authorName, text, createdOn);
//     this.reaction = reaction;
//   }
// }

// // TODO: Create a new object using the BlogPost class constructor.
// const newPost = new BlogPost(
//   'John Doe',
//   'My Fourth Post',
//   'Dogs, cats, and snakes are super cute!',
//   '12/19/2021'
// );

// // TODO: Create a new object using the Comment class constructor.
// const newComment = new Comment(
//   'Jane Doe',
//   'This post is really awesome!',
//   '12/20/2021',
//   '🐶😺🐍'
// );
// // TODO: Log both newly created BlogPost and Comment to the console.
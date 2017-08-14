var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
  'article-One' : { 
    title: "Article One | Neethu Nath",
    heading: "Article One",
    date: "Aug 14, 2017",
    content: `<p>
              This is the content for article one. This is a sample web page project created by me. 
              I'm learning html and css.
           </p>
           <p>
              This is the content for article one. This is a sample web page project created by me. 
              I'm learning html and css.
           </p>
           <p>
              This is the content for article one. This is a sample web page project created by me. 
              I'm learning html and css.
           </p>`
  },           
  'article-Two' : {
    title: "Article Two | Neethu Nath",
    heading: "Article Two",
    date: "Aug 14, 2017",
    content: `<p>
              This is the content for article two. This is a sample web page project created by me. 
              I'm learning html and css.
           </p>
           <p>
              This is the content for article two. This is a sample web page project created by me. 
              I'm learning html and css.
           </p>
           <p>
              This is the content for article two. This is a sample web page project created by me. 
              I'm learning html and css.
           </p>`
  },
  'article-Three' : {
    title: "Article Three | Neethu Nath",
    heading: "Article Three",
    date: "Aug 14, 2017",
    content: `<p>
              This is the content for article three. This is a sample web page project created by me. 
              I'm learning html and css.
           </p>
           <p>
              This is the content for article three. This is a sample web page project created by me. 
              I'm learning html and css.
           </p>
           <p>
              This is the content for article three. This is a sample web page project created by me. 
              I'm learning html and css.
           </p>`
  },
};

function createTemplate (data) {
  var title = data.title;
  var date = data.date;
  var heading = data.heading;
  var content = data.content;
  
  var htmlTemplate = `
    <!DOCTYPE html>
      <head>
      <title> 
        ${title}
      </title> 
      <link href="/ui/style.css" rel="stylesheet" />
      <meta name="viewport" content="width=device-width" initial-scale=1 />
      </head>  
      <body>
     
        <div class="container">
           <div>
              <a href="/">Home</a>
           </div>
      
           <hr/>
      
           <h3>
              ${heading}
           </h3>
      
           <div>
              ${date}
           </div>
      
           <div>
              ${content}
           </div>
       </div>
     </body>  
</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
  //articleName = article-one
  //articles[articleName] = {} content of article one
  var articleName = req.params.articlName;
  res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

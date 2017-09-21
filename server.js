var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
     'article-one': {
    title: 'The C concepts | yuvraj',
    heading : 'The C Concepts',
    date : '5 sep 2017',
    content : ` <p>
                Lets begin with a quick introduction to C. Our aim is to learn the concept of C deeply and implement that concepts and logics in real program.
                C is a general-purpose language. It has been closely associated with the UNIX system where it was developed, since both Sytem and most of the programs that run on it are written in C-lanugaue. The language, however, is not tied to any one operating system or machine; and although it has been called a "System Programming Language" because it is useful to writing compilers and Opearting systems, it has been used equally well to write major programs in many different domains.
            </p>
            <p>
                C provides the fundamental control flow constructions required for well-structured programs: statement grouping, decision making(if-else), selecting one of a set of possible cases (switch), looping with termination test at the top(while, for) or at the bottom (do),  and early loop exit (break).
            </p>`
},
     'article-two': {
        title: 'Detail C concepts | yuvraj',
        heading : 'Detail C Concepts',
        date : '10 sep 2017',
        content : `
            <p>
                C provides the fundamental control flow constructions required for well-structured programs: statement grouping, decision making(if-else), selecting one of a set of possible cases (switch), looping with termination test at the top(while, for) or at the bottom (do),  and early loop exit (break).
            </p>`
         },
     'article-three':{
        title: 'Understanding C concepts | yuvraj',
        heading : 'Understanding C Concepts',
        date : '25 sep 2017',
        content : `
            <p>
                C provides the fundamental control flow constructions required for well-structured programs: statement grouping, decision making(if-else), selecting one of a set of possible cases (switch), looping with termination test at the top(while, for) or at the bottom (do),  and early loop exit (break).
            </p>`
         }

};

function createTemplate (Data){
var title = Data.title;
var date = Data.date;
var heading = Data.heading;
var content = Data.content;
var htmlTemplate = `
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name = "viewport" content="width=device-width,intial-scale=1"/>
      <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href = "/">Home</a>
        </div>
        <hr/>
        <h3>${heading}</h3>
        <h4>yuvraj</h4><br/>
        
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
var counter = 0;
app.get('/counter',function (req,res){
   counter = counter +1;
   res.send(counter.toString());
});

var names = [];
app.get('/submit-name/:name',function (req,res){
    
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringfy(names));
});

app.get('/:articlename',function(req , res){
    
    var articlename = req.params.articlename;
    res.send(createTemplate(articles[articlename]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

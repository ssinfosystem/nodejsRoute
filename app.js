var express = require('express');
var bodyParser = require('body-parser') ;
var path = require('path') ;
var expressValidator = require('express-validator') ;

var app = express();

// Global Varriable 


/*
// Middle Ware, but the position of logger is very importnant
var logger = function(req,res,next){
   console.log('Logging') ;
   next() ;
}

app.use(logger) ;
*/

// Array structure
var person = [
    {
        name : "Susanta" ,
        roll : 49
    } ,
    {
        name : "Sulekha" ,
        roll : 38
    } ,
    {
        name : "Suman" ,
        roll : 11
    } 
]

// Json structure
var studentsdetail = {
    1 : {
      name : "Susanta" ,
      roll : 20,
      subjects : ['Java', 'C##', 'Nodejs'] ,
      marks : 20
    } ,
    2 : {
      name : "Suman" ,
      roll : 20,
      subjects : ['VB', 'Python', 'Nodejs'],
      marks : 95
    } ,
    3 : {
      name : "Sulekha" ,
      roll : 20,
      subjects : ['JavaScript', 'MSSql', 'Cobol'],
      marks : 90
    }
  }
//     body-parser Middleware
app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded({extended : false})) ;

//  Setting Middle ware for static Path, public folder will contain css etc. If you put index.html
//  in public folder, it will used as default page overriding / route


app.use(express.static(path.join(__dirname,'public'))) ;



// Setting View engine as ejs
app.set('view engine','ejs');

 // app.set('views', path.join(__dirname,'views')) ;

 app.use(function(rerq,res,next){
  res.locals.errors = null ;
  next();
});


 app.use(expressValidator({
  errorFormatter : function(param,msg,value){
      var nameSpace = param.split('.') 
      , root = nameSpace.shift()
      , formParam = root ;

      while (nameSpace.length){
        formParam += '[' + nameSpace.shift() + ']' ;
      }
      return {
        param : formParam ,
        msg : msg ,
        value : value 
      } ;
   }
 })) ;



app.get('/', function(req,res){
  // res.send('This is home page') ;
  // res.json(person) ;
  res.render('index.ejs',{
    title : 'Title of the page' 
  }) ;
}) ;

app.get('/about', function(req,res){
    console.log('Requested') ;
    res.sendFile(__dirname + '/about.html') ;
  })

app.get('/studentsdetail/:id', function(req,res){
    // Rending the View with ejs.
    // student is the student.ejs , objet with value pair
    res.render('studentdetailview' , {name : studentsdetail[req.params.id].name , 
      id : req.params.id ,
      subjects : studentsdetail[req.params.id].subjects , 
      totalmarks : studentsdetail[req.params.id].marks
     });
    // Disabling the below line since I am going to use ejs
    //res.send('You have requested Students description of ID : ' + students[req.params.id]) ;
  })

  app.post('/customer/add', function(req,res){
    req.checkBody('first_name',"First Name cannot be blank").notEmpty();
    req.checkBody('last_name',"Last Name cannot be blank").notEmpty();
    req.checkBody('email',"Email is required").notEmpty();

    var errors = req.validationErrors() ;
    if (errors) {
      res.render('index.ejs',{
        title : 'Title of the page' ,
        errors : errors
      }) ;
    } else {
      var newCustomer = {
        first_name : req.body.first_name ,
        last_name : req.body.last_name ,
        email : req.body.email
      }
       console.log("SUCCESS") ;
     }
  })

app.listen(3000 , function(){
    console.log('Server is running at http://localhost:3000 port') ;
})
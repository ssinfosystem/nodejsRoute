var express = require('express');

var app = express();

// Setting the view engine to ejs
app.set('view engine','ejs');

// GET
//POST
//PUT
//DELETE

var students = {
    1 : "Susanta" ,
    2 : "Suman" ,
    3 : "Sulekha"
}

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

app.get('/', function(req,res){

  //res.send('This is home page') ;
  res.sendFile(__dirname + '/index.html') ;
})

app.get('/about', function(req,res){
    res.sendFile(__dirname + '/about.html') ;
  })

  app.get('/content', function(req,res){
    res.send('This is contest page') ;
  })

  app.get('/students/:id', function(req,res){
    // Rending the View with ejs.
    // student is the student.ejs , objet with value pair
    res.render('studentview' , {name : students[req.params.id] , id : req.params.id  });


    // Disabling the below line since I am going to use ejs
    //res.send('You have requested Students description of ID : ' + students[req.params.id]) ;
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


app.listen(3000 , function() {
   console.log('Server is running at http://localhost:3000 port') ;

})
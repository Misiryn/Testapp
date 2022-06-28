var MongoClient             = require("mongodb").MongoClient,
    express                 = require("express"),
    mongoose                = require("mongoose"),
    passport                = require("passport"),
    UserProfile             = require("./models/user.js"),
    Questions               = require("./models/questions.js"),
    bodyParser              = require("body-parser"),
    LocalStrategy           = require("passport-local"),
    passpostLocalMongoose   = require("passport-local-mongoose"),
    expressValidator        = require("express-validator")

mongoose.connect("mongodb+srv://shubham:shubham123@test-app.ttjba.mongodb.net/test",{ useUnifiedTopology: true , useNewUrlParser: true }, function (err, db) {
if (err) {
    throw err;
} else {
    console.log("Connected");
}   
});

var app = express();
var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require("express-session")({
	secret: "Test_database",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());

app.use(passport.session());

passport.use(new LocalStrategy(UserProfile.authenticate()));

passport.serializeUser(UserProfile.serializeUser());

passport.deserializeUser(UserProfile.deserializeUser());

app.use('/public', express.static('public'));

require("./routes/get_routes")(app);

//require("./routes/post_routes")(app);



//----------------------------------------------------------------------------------------------------------
//   code for registering New user / Admin to DB                                                                            
app.post("/new_user", function (req, res) {                                                               
    var tempUser;                                                                                           
    console.log(req.body.username);                                                                        
    console.log(req.body.password);                                                                         
    UserProfile.register(                                                                                   
        new UserProfile({ username: req.body.username }), req.body.password, function (err, user) {         
            tempUser = user;                                                                                
            console.log(err);                                                                               
            console.log(user);                                                                              
            if (err) {                          S                                                             
                console.log(err);                                                                           
                return res.render('login');                                                                
            }                                                                                               
            passport.authenticate("local")(req, res, function () {                                          
                console.log(tempUser._id);                                                                  
                res.redirect("/admin_dashboard");                                                           
            });                                                                                             
        });                                                                                                  
});                   


//  Login code

app.post("/", function(req , res){
    UserProfile.findOne({ username : req.body.username }).then(isAdmin => {
		console.log("isadmin : "+isAdmin);
		if (isAdmin.isAdmin == true) {
            console.log("----");    
            res.redirect('/admin_dashboard');
            // passport.authenticate("local",{
            //     failureRedirect: "/",
            //     successRedirect: "/admin_dashboard",
            // });
        }
		else {
            console.log("oooo");
            res.redirect('/test');
            // passport.authenticate("local",{
            //     failureRedirect: "/",
            //     successRedirect: "/test"
            // });
        }
	}).catch(err => {
		res.status(400).json({ error: "something is wrong : " + err })
	});
});

// editing and adding 
app.post("/admin_test", function(req , res){
    console.log( "REQ : "+ req.body);
    console.log("++++");
    console.log(req.body.question);
    console.log(req.body.answer);
    
//     var qna = new Questions();
// 				qna.question = {question : req.body.question , answer: [{options : req.body.answer , isCorrect : req.body.isCorrect}] };
//                 qna.save();
//                 // .exec(function (err, managerparent) {
//                 //          console.log("err : " + err);
//                 //          });
// });



    // var qna = new Questions();
    // qna.question = req.body.question;
    // qna.answer = [{options : req.body.answer}];
    // qna.save();

    Questions.create({
        
        question : req.body.question,
        answer : [ {options : req.body.question }]
    });




});


var port = process.env.PORT || 5232;
app.listen(port, function () {
	console.log("Server Has Started!");
});
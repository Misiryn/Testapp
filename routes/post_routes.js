module.exports = (app)=>{
    
    app.post("/",passport.authenticate("local", { 
                failureRedirect: "/",
                successRedirect: "/admin_dashboard"    
        }));
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
}
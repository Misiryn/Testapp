module.exports= (app) => {


app.get("/",function(req , res){
    res.render("login");
});

app.get("/admin_dashboard", function (req, res) {
	res.render("admin_dashboard");
});

app.get("/admin_test",function(req , res){
    res.render("admin_test");
});

app.get("/new_user",function(req , res){
    res.render("new_user");
});

app.get("/test",function(req , res){
    res.render("user_test")
});

}
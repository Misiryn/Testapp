// $(document).ready(function () {
//     $("#proceed").click(function(req , res){
//         UserProfile.findOne({ username : req.body.username }).then(isAdmin => {
//             console.log("isadmin : "+isAdmin);
//             if (UserProfile.isAdmin == true) {
//                 console.log("----");
//                  passport.authenticate("local", {
//                     failureRedirect: "/",
//                     successRedirect: "/admin_dashboard",
//                 });
//             }
    
//             else {
//                 console.log("oooo");
//                 passport.authenticate("local", {
//                     failureRedirect: "/",
//                     successRedirect: "/test"
//                 });
//             }
//         }).catch(err => {
//             res.status(400).json({ error: "something is wrong" })
//         });
//         )
// });
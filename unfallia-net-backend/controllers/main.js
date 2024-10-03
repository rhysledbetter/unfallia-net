// main/home controller

module.exports.home = function(request,response){
    response.render('index', { title: 'Welcome to Unfallia' });
}

module.exports.about = function(request,response){
    response.render('about');
}

module.exports.contact = function(request,response){
    response.render('contact');
}

module.exports.login = function(request,response){
    response.render('login');
}

module.exports.register = function(request,response){
    response.render('register');
}

module.exports.forgotpassword = function(request,response){
    response.render('forgot-password');
}
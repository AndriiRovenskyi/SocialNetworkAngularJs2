app.controller('logInCtrl', ["ServiceUser", function(ServiceUser){ 
    var vm = this;

    vm.check=function(){
      ServiceUser.checkUser(vm.user); 
    }
    
vm.registration=function(){
   ServiceUser.regShow();
};
    
    vm.exit=function(){
        ServiceUser.exitUser();
    }
  
    
}])
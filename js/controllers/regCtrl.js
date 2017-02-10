app.controller('regCtrl',["ServiceUser",function(ServiceUser, $location){
    
    var vm = this;
    
    vm.addUser=function(){
        ServiceUser.regUser(vm.user);
        console.log(users);

    }
    vm.back=function(){
        ServiceUser.back();
    }
    
    
}])
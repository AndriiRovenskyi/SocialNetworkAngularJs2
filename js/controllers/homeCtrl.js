app.controller('homeCtrl',['ServiceUser',function(ServiceUser){
    
    var vm = this;
    vm.users=ServiceUser.allUsers();
    vm.posts=posts;
    vm.message="Home message"
    vm.writePost=function(){
        ServiceUser.addPost(vm.text);
        vm.text="";
    }
    vm.delete=function(p){
       ServiceUser.deletePost(p);
    }
    vm.userNow=ServiceUser.userNow();
    vm.addFriend=function(friend){
        ServiceUser.addFriend(friend);
    }
    vm.deleteFriend=function(f){
        ServiceUser.deleteFriend(f);
    }
    
    
}])
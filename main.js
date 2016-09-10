var app= angular.module('todoApp',[]);
app.controller('todoController',function($scope){
	this.todolist=[
	{
      text:"Complete javascript.",
	},
    {
    	text:"Complete angular-egghead.",
    } 
	];
	this.addTodo= function(todotext)
	{
		if(todotext!==undefined && todotext!=='')
		{
			 var todo={text: todotext};
		     this.todolist.push(todo);
		     this.text="";
		     this.myform.$setPristine();
		}
	};
});
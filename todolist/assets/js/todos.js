/*
	// check off specific todos by clicking
	$("li").on("click", function (){
		$(this).toggleClass("checkOff");
	});

	注意这样添加 如果有新的li 进来是不会添加上listener的
	即使简单的swap on 和 click也不行. 要这么写
	NOTE: We can only add eventListener to elements that exist at the first place

	$("ul").on("click", "li", function (){
		$(this).toggleClass("checkOff");
	});
	意思when an li is click in the ul element do this
 */
$("ul").on("click", "li", function (){
	$(this).toggleClass("checkOff");
});

// deleting todos, why ul?not li, li does note exist when the code is run
$("ul").on("click", "span", function(event){	
	/*
		we can simply do this $(this).parent().remove();

		However, remove is too fast, we can also use fadeOut 
		but we need to actually delete it. we can not just do this
		$(this).parent().fadeOut();

		this won't work too, because remove would not wait the fadeOut to finish
		$(this).parent().fadeOut().remove();

		what we need to do is this:
	 */
	
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});

	/*
		因为span是在li里面的, li在ul里面, ul在div里面 ...
		点击span相当于一步步click别的 知道接触到最外层为止
		我们可以添加 一行这个以免发散出去
	 */
	event.stopPropagation(); 
});

// Creating todos
$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		//add to list
		var toDoText = $(this).val();
		$(this).val("");
		// 注意如果仅仅是加span是不work的 我们的span删除不了
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + toDoText +  "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

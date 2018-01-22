$(document).ready(function(){
	$.ajax({
		type:"get",
		url:"http://apis.juhe.cn/cook/query?key=03981026be0522e9a4d4c6ed99625aba&menu=牛肉&rn=10&pn=3",
		async:true,
		dataType:"jsonp",
		success:function(data){
			console.log(data);
			callBack(data);
		}
	});
	
	function callBack(data){
		var data=data.result.data[0];
		console.log(data);
		$('.all h2').text(data.title);
		$('.intro').text(data.tags);
		$('.all img').attr('src',data.albums[0]);
		$('.zl').text(data.burden);
		$('.fl').text(data.ingredients);
		
	}
})

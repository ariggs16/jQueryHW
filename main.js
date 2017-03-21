$(document).ready(function(){
	$("#add").on('click', function(){
		var num_1 = $("#num_1").val()
		var num_2 = $("#num_2").val()
		$("#answer").val(Number(num_1) + Number(num_2))
	})
})
$(document).ready(function(){
	$("#sub").on('click', function(){
		var num_1 = $("#num_1").val()
		var num_2 = $("#num_2").val()
		$("#answer").val(Number(num_1) - Number(num_2))
	})
})
$(document).ready(function(){
	$("#div").on('click', function(){
		var num_1 = $("#num_1").val()
		var num_2 = $("#num_2").val()
		$("#answer").val(Number(num_1) / Number(num_2))
	})
})
$(document).ready(function(){
	$("#multi").on('click', function(){
		var num_1 = $("#num_1").val()
		var num_2 = $("#num_2").val()
		$("#answer").val(Number(num_1) * Number(num_2))
	})
})
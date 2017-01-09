jQuery(document).ready(function(){
 $("button").click(function(){
 	if($("select option:selected").val()=="nexus5")
 	{
 	$("h1").text("NEXUS5");
 	$("#framenxs5").attr("src",$("input").val());
 	$("#nexus5").css("display","block");
 	$("#nexus5").fadeIn();
 	$("#framenxs5").fadeIn();
 	$("#iphone6").css("display","none");
 	$("#frameiphone6").css("display","none");
    $("#iphone5").css("display","none");
 	$("#frameiphone5").css("display","none");
    $("#motog").css("display","none");
 	$("#framemotog").css("display","none");
 }

 	else if($("select option:selected").val()=="iphone5")
 	{
 	$("h1").text("IPHONE5");
 	$("#frameiphone5").attr("src",$("input").val());
 	$("#iphone5").css("display","block");
 	$("#iphone5").fadeIn();
 	$("#frameiphone5").fadeIn();
 	$("#iphone6").css("display","none");
 	$("#frameiphone6").css("display","none");
    $("#nexus5").css("display","none");
 	$("#framenxs5").css("display","none");
    $("#motog").css("display","none");
 	$("#framemotog").css("display","none");
 }

 	else if($("select option:selected").val()=="iphone6")
 	{
 	$("#frameiphone6").attr("src",$("input").val());
 	$("#iphone6").css("display","block");
 	$("#iphone6").fadeIn();
 	$("#frameiphone6").fadeIn();
 	$("#iphone5").css("display","none");
 	$("#frameiphone5").css("display","none");
    $("#nexus5").css("display","none");
 	$("#framenxs5").css("display","none");
    $("#motog").css("display","none");
 	$("#framemotog").css("display","none");
 }

 	else if($("select option:selected").val()=="motog")
 	{
 	$("h1").text("MOTOG");
 	$("#framemotog").attr("src",$("input").val());
 	$("#motog").css("display","block");
 	$("#motog").fadeIn();
 	$("#framemotog").fadeIn();
 	$("#iphone5").css("display","none");
 	$("#frameiphone5").css("display","none");
    $("#nexus5").css("display","none");
 	$("#framenxs5").css("display","none");
    $("#iphone6").css("display","none");
 	$("#frameiphone6").css("display","none");
 }
})
});


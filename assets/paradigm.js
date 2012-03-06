	$(document).ready(function() {  $("a.single_image").fancybox(); $("a.single_image").fancybox({ 'hideOnContentClick': true }); $("a.group").fancybox({ 'zoomSpeedIn': 300, 'zoomSpeedOut': 300, 'overlayShow': false });

	defaultValue = $("#q").val();

	$('#q').click(function() {
		if(this.value == defaultValue ) {
			$(this).val("");
			$(this).parent().addClass("activesearch");
		}
	});
	
	$('#q').blur(function() {
		if(this.value == "") {
			console.log("true");
			$(this).val("Search...");
			$(this).parent().removeClass("activesearch");
			
		}
	});
	
	$(".main-nav li.dropdown").hover(
		function() {
			$(this).addClass("active");
			$(this).children(".dropdown-ie").show();		
				
		},
		function(){
			$(this).removeClass("active");
			$(this).children(".dropdown-ie").hide();
		})

}); 


$(window).load(function() {

	equalHeightProducts();
	equalHeightCat();

	function equalHeightProducts() {
		var tallestPro = 0;
		$(".products td img").each(function() {
			var thisHeight = $(this).height();
			
			if(thisHeight > tallestPro) {
				tallestPro = thisHeight;
			}
		});
		
		$(".products td span").height(tallestPro);
		$(".products td span .vertical-center").height(tallestPro);

	}

	function equalHeightCat() {
		var tallestCat = 0;
		$(".categories td img").each(function() {
			var thisHeight = $(this).height();
			if(thisHeight > tallestCat) {
				tallestCat = thisHeight;
			}
		});
		$(".categories td span").height(tallestCat);	
	}
});
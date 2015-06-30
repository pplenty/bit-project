$(".toolbar-math").click(function() {
		$(".toolbar-list").css('visibility', 'hidden');
		$(".math-list").css('visibility', 'visible');
	});

	$(".page-wrapper").not($(".math-list")).click(function() {
		$(".math-list").css('visibility', 'hidden');
		$(".toolbar-list").css('visibility', 'visible');
	});

	$(".math-toolbar-group-trigger").click(function() {
		if (!$(this).hasClass("open")) {
			$(".math-toolbar-group-options").css({
				'height' : '274px',
				'visibility' : 'visible',
				'opacity' : '1'
			});
			$(this).addClass("open");
		} else if ($(this).hasClass("open")) {
			$(".math-toolbar-group-options").css({
				'height' : '0px',
				'visibility' : 'hidden',
				'opacity' : '0'
			});
			$(this).removeClass("open");
		}
	});
	$(".math-list .toolbar-select .math-toolbar-select-trigger").hover(
			function() {
				if (!$(".math-toolbar-panel").hasClass("open")) {
					$(".math-toolbar-panel").css({
						'visibility' : 'visible',
						'top' : (event.pageY - 10)
					});
					$(".math-toolbar-panel").addClass("open");

				}
			}, function() {
				$(".math-toolbar-panel").css('visibility', 'hidden');
				$(".math-toolbar-panel").removeClass("open");
			});

	$(".math-toolbar-select-item1").click(
			function() {
				$(".math-toolbar-select-trigger").text(
						$(".math-toolbar-select-item1").text());
			});
	$(".math-toolbar-select-item2").click(
			function() {
				$(".math-toolbar-select-trigger").text(
						$(".math-toolbar-select-item2").text());
			});
	$(".math-toolbar-select-item3").click(
			function() {
				$(".math-toolbar-select-trigger").text(
						$(".math-toolbar-select-item3").text());
			});

	$(".math-toolbar-panel").hover(function() {
		$(".math-toolbar-panel").css('visibility', 'visible');
	}, function() {
		$(".math-toolbar-panel").css('visibility', 'hidden');
	});

	$(".page-wrapper").not($(".math-toolbar-panel")).click(function() {
		if ($(".math-toolbar-panel").hasClass("open")) {
			$(".math-toolbar-panel").css({
				'visibility' : 'hidden',
			});
			$(".math-toolbar-panel").removeClass("open");
		}
	});

	$(".page-wrapper").not($(".math-list")).click(function() {
		$(".math-list").css('visibility', 'hidden');
		$(".math-toolbar-group-options").css({
			'height' : '0px',
			'visibility' : 'hidden',
			'opacity' : '0'
		});
		$(this).removeClass("open");
	});
/** @format */

$(document).ready(function () {
	$(
		".form1Wrap .controlGroup label, .form1Wrap .controlGroup input, .form1Wrap .controlGroup textarea",
	).on("focus", function (event) {
		event.stopPropagation()
		if (!$(this).val()) {
			$(this).closest(".controlGroup").removeClass("focus")
		}
		$(this).closest(".controlGroup").addClass("focus")
	})

	$(
		".form1Wrap .controlGroup label, .form1Wrap .controlGroup input, .form1Wrap .controlGroup textarea",
	).on("blur", function (event) {
		event.stopPropagation()
		if (!$(this).val()) {
			$(this).closest(".controlGroup").removeClass("focus")
		}
	})
})

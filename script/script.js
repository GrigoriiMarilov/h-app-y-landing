
function navLink(i) {
	let el;
	switch (i) {
		case 1:
			el = document.getElementsByClassName("features")[0]
			break;
		case 2:
			el = document.getElementsByClassName("price-block")[0]
			break;
		case 3:
			el = document.getElementsByClassName("testimonials")[0]
			break;
		case 4:
			el = document.getElementsByClassName("download")[0]
			break;
		default:
			break;
	}
	el.scrollIntoView({ behavior: "smooth" })
	return
}
/*  Header Gnb Toggle
/* ------------------------------------ */
document.addEventListener("DOMContentLoaded", function () {
	var sampleMenuButton = document.querySelector(".menu-toggle-btn");

	sampleMenuButton.addEventListener("click", function () {
		var blockScroll = document.querySelector("body>.wp-site-blocks");
		this.classList.toggle("is_active");
		blockScroll.style.overflow = this.classList.contains("is_active") ? "hidden" : "";
	});
});

/*  Header Aside BG Color Change
/* ------------------------------------ */
document.addEventListener("DOMContentLoaded", function () {
	const elements = document.querySelectorAll("header.wp-block-template-part, .index-page+.wp-block-template-part");

	elements.forEach((element) => {
		element.style.setProperty("--red", getRandomValue());
		element.style.setProperty("--green", getRandomValue());
		element.style.setProperty("--blue", getRandomValue());
	});

	function getRandomValue() {
		return Math.floor(Math.random() * 256);
	}
});

/*  Search
/* ------------------------------------ */
document.addEventListener("DOMContentLoaded", function () {
	var searchInput = document.querySelector(".wp-block-search__input");
	var searchButton = document.querySelector(".search-wrap");

	// Add autocomplete="off" attribute to the search input
	searchInput.setAttribute("autocomplete", "off");

	searchInput.addEventListener("input", function () {
		if (searchInput.value.trim() === "") {
			searchButton.classList.remove("is_focus");
		} else {
			searchButton.classList.add("is_focus");
		}
	});

	searchButton.addEventListener("click", function () {
		searchInput.value = ""; // Clear the input text
		searchButton.classList.remove("is_focus");
	});
});

// 1200px 이하 서치 숨김
document.addEventListener("DOMContentLoaded", function () {
	var headerWrap = document.querySelector(".header-wrap");
	var searchButton = document.createElement("div");
	searchButton.className = "search-button";
	searchButton.textContent = "search";
	var templatePart = document.querySelector(".index-page .wp-block-template-part:first-child");

	function addSearchButton() {
		if (window.innerWidth <= 1200 && !headerWrap.contains(searchButton)) {
			headerWrap.appendChild(searchButton);
		} else if (window.innerWidth > 1200 && headerWrap.contains(searchButton)) {
			headerWrap.removeChild(searchButton);
		}

		if (window.innerWidth <= 1200) {
			templatePart.style.display = "none";
		} else {
			templatePart.style.display = "";
		}
	}

	addSearchButton();

	window.addEventListener("resize", function () {
		addSearchButton();
	});

	searchButton.addEventListener("click", function (e) {
		e.stopPropagation();
		if (templatePart.style.display === "none") {
			templatePart.style.display = "";
		} else {
			templatePart.style.display = "none";
		}
	});

	templatePart.addEventListener("click", function (e) {
		e.stopPropagation();
	});

	document.addEventListener("click", function () {
		if (window.innerWidth <= 1200) {
			templatePart.style.display = "none";
		}
	});
});

/*  Aside Rearranging Tag Items
/* ------------------------------------ */
document.addEventListener("DOMContentLoaded", function () {
	const topicList = document.querySelector(".wp-block-categories-list");
	const topicItems = Array.from(topicList.getElementsByClassName("cat-item"));

	shuffle(topicItems);

	topicItems.forEach((item) => {
		topicList.appendChild(item);
	});

	function shuffle(array) {
		let currentIndex = array.length;
		let temporaryValue, randomIndex;

		while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}
});

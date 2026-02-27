(function () {
	const STORAGE_KEY = "theme";
	const root = document.documentElement;

	function isDarkMode() {
		return root.classList.contains("dark");
	}

	function setIconState() {
		const sunIcon = document.getElementById("theme-toggle-sun");
		const moonIcon = document.getElementById("theme-toggle-moon");

		if (!sunIcon || !moonIcon) {
			return;
		}

		if (isDarkMode()) {
			sunIcon.classList.remove("hidden");
			sunIcon.classList.add("block");
			moonIcon.classList.remove("block");
			moonIcon.classList.add("hidden");
			return;
		}

		sunIcon.classList.remove("block");
		sunIcon.classList.add("hidden");
		moonIcon.classList.remove("hidden");
		moonIcon.classList.add("block");
	}

	function applyTheme(theme) {
		if (theme === "dark") {
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
		}

		setIconState();
	}

	function resolveInitialTheme() {
		try {
			const storedTheme = localStorage.getItem(STORAGE_KEY);
			if (storedTheme === "dark" || storedTheme === "light") {
				return storedTheme;
			}

			if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				return "dark";
			}
		} catch (error) {
			return "light";
		}

		return "light";
	}

	document.addEventListener("DOMContentLoaded", function () {
		applyTheme(resolveInitialTheme());

		const toggleButton = document.getElementById("theme-toggle");
		if (!toggleButton) {
			return;
		}

		toggleButton.addEventListener("click", function () {
			const nextTheme = isDarkMode() ? "light" : "dark";
			applyTheme(nextTheme);

			try {
				localStorage.setItem(STORAGE_KEY, nextTheme);
			} catch (error) {
				// Ignore storage failures (e.g. private mode restrictions).
			}
		});
	});
})();


(() => {
    "use strict";

    // Block right-click
    document.addEventListener("contextmenu", e => {
        e.preventDefault();
    });

    // Block text selection
    document.addEventListener("selectstart", e => {
        if (!e.target.closest("input, textarea")) {
            e.preventDefault();
        }
    });

    // Block copy and cut
    document.addEventListener("copy", e => e.preventDefault());
    document.addEventListener("cut", e => e.preventDefault());

    // Block dragging images and elements
    document.addEventListener("dragstart", e => {
        if (e.target.tagName === "IMG") {
            e.preventDefault();
        }
    });

    // Block common keyboard shortcuts
    document.addEventListener("keydown", e => {
        const key = e.key.toLowerCase();
        const modifier = e.ctrlKey || e.metaKey;

        if (modifier && ["a", "c", "x", "s", "u", "p"].includes(key)) {
            e.preventDefault();
        }

        if (
            e.key === "F12" ||
            (e.ctrlKey && e.shiftKey &&
            ["i", "j", "c"].includes(key))
        ) {
            e.preventDefault();
        }
    });

})();

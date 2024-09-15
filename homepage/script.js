/* script.js */

function toggleMenu() {
    var panel = document.getElementById("floating-panel");
    if (panel.style.left === "0px" || panel.style.left === "") {
        panel.style.left = "-250px";
    } else {
        panel.style.left = "0px";
    }
}

function toggleContent(contentId, readMoreId, readLessId) {
    var moreContent = document.getElementById(contentId);
    var readMoreLink = document.getElementById(readMoreId);
    var readLessLink = document.getElementById(readLessId);

    if (moreContent.style.display === "none" || moreContent.style.display === "") {
        moreContent.style.display = "block"; // Show the hidden paragraphs
        readMoreLink.style.display = "none"; // Hide the "Read more" link
        readLessLink.style.display = "inline"; // Show the "Read less" link
    } else {
        moreContent.style.display = "none"; // Hide the paragraphs
        readMoreLink.style.display = "inline"; // Show the "Read more" link
        readLessLink.style.display = "none"; // Hide the "Read less" link
    }
}
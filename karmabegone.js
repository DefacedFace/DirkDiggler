document.onmousemove = function() {
    const posts = document.querySelectorAll("shreddit-comment-action-row");
    if (posts) {
        posts.forEach((post) => {
            const faceplateNumber = post.shadowRoot.querySelector("faceplate-number");
            if (faceplateNumber) {
                faceplateNumber.style.display = "none";
            }
        });
    }
};

if (faceplateNumber && faceplateNumber.style.display === "none") {
    document.removeEventListener("onmousemove", arguments.callee)
}

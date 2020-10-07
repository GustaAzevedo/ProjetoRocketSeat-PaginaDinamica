const kards = document.querySelectorAll('.kard');

for (let kard of kards) {
    kard.addEventListener("click", function () {
        const videoId = kard.getAttribute("id");
        window.location.href = `/video?id=${videoId}`;
    })
}

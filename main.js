let canvas = document.getElementById('gamezone');
let context = canvas.getContext('2d');
let scoreshow = document.getElementById('score');

let birdimg = new Image();
let hinhnenchinh = new Image();
let ongtren = new Image();
let ongduoi = new Image();
birdimg.src = "bird.png";
hinhnenchinh.src = "nenchinh.png";
ongtren.src = "ongtren.png";
ongduoi.src = "ongduoi.png";

let score = 0;
let khoangcachhaiong = 150;
let khoangcachdenongduoi;
let bird = {
    x: hinhnenchinh.width / 5,
    y: hinhnenchinh.height / 2
}
let ong = [];
ong[0] = {
    x: canvas.width,
    y: 0
}

function run() {
    context.drawImage(hinhnenchinh, 0, 0);
    context.drawImage(birdimg, bird.x, bird.y);

    for (let i = 0; i < ong.length; i++) {
        khoangcachdenongduoi = ongtren.height + khoangcachhaiong;
        context.drawImage(ongtren, ong[i].x, ong[i].y);
        context.drawImage(ongduoi, ong[i].x, ong[i].y + khoangcachdenongduoi);
        ong[i].x -= 5;
        if (ong[i].x === canvas.width / 2) {
            ong.push({
                x: canvas.width,
                y: Math.floor(Math.random() * ongtren.height) - ongtren.height
            })
        }
        if (ong[i].x === 0) ong.splice(0, 1);
        if (ong[i].x === bird.x) score++;
        if (bird.y + birdimg.height === canvas.height ||
            bird.x + birdimg.width >= ong[i].x && bird.x <= ong[i].x + ongtren.width
            && (bird.y <= ong[i].y + ongtren.height ||
                bird.y + birdimg.height >= ong[i].y + khoangcachdenongduoi)
        ) {
            confirm("Bạn đã thua \n" + score + " là điểm của bạn");
            if (confirm === true) {
                window.location.reload()
            }
            window.location.reload();

        }
    }


    scoreshow.innerHTML = "score: " + score;
    bird.y += 3;
    requestAnimationFrame(run);
}

document.addEventListener("keydown", function () {
    bird.y -= 60;
})
run();






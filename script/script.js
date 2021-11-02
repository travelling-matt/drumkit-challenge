document.addEventListener("keydown", (e) => {
    console.log(e);
    console.log(e.key);
    if (e.key == "a" || e.key == "A") {
    document.getElementById("boom").pause();
    document.getElementById("boom").currentTime = 0;
    document.getElementById("boom").play();
    }
});

document.addEventListener("keydown", (e) => {
    console.log(e);
    console.log(e.key);
    if (e.key == "s" || e.key == "S") {
    document.getElementById("clap").pause();
    document.getElementById("clap").currentTime = 0;
    document.getElementById("clap").play();
    }
});

document.addEventListener("keydown", (e) => {
    console.log(e);
    console.log(e.key);
    if (e.key == "d" || e.key == "D") {
    document.getElementById("hihat").pause();
    document.getElementById("hihat").currentTime = 0;
    document.getElementById("hihat").play();
    }
});

document.addEventListener("keydown", (e) => {
    console.log(e);
    console.log(e.key);
    if (e.key == "f" || e.key == "F") {
    document.getElementById("kick").pause();
    document.getElementById("kick").currentTime = 0;
    document.getElementById("kick").play();
    }
});

document.addEventListener("keydown", (e) => {
    console.log(e);
    console.log(e.key);
    if (e.key == "g" || e.key == "G") {
    document.getElementById("openhat").pause();
    document.getElementById("openhat").currentTime = 0;
    document.getElementById("openhat").play();
    }
});

document.addEventListener("keydown", (e) => {
    console.log(e);
    console.log(e.key);
    if (e.key == "h" || e.key == "H") {
    document.getElementById("ride").pause();
    document.getElementById("ride").currentTime = 0;
    document.getElementById("ride").play();
    }
});

document.addEventListener("keydown", (e) => {
    console.log(e);
    console.log(e.key);
    if (e.key == "j" || e.key == "J") {
    document.getElementById("snare").pause();
    document.getElementById("snare").currentTime = 0;
    document.getElementById("snare").play();
    }
});

document.addEventListener("keydown", (e) => {
    console.log(e);
    console.log(e.key);
    if (e.key == "k" || e.key == "K") {
    document.getElementById("tink").pause();
    document.getElementById("tink").currentTime = 0;
    document.getElementById("tink").play();
    }
});

document.addEventListener("keydown", (e) => {
    console.log(e);
    console.log(e.key);
    if (e.key == "l" || e.key == "L") {
    document.getElementById("tom").pause();
    document.getElementById("tom").currentTime = 0;
    document.getElementById("tom").play();
    }
});

const aKey = document.getElementById("aKey");
const sKey = document.getElementById("sKey");
const dKey = document.getElementById("dKey");
const fKey = document.getElementById("fKey");
const gKey = document.getElementById("gKey");
const hKey = document.getElementById("hKey");
const jKey = document.getElementById("jKey");
const kKey = document.getElementById("kKey");
const lKey = document.getElementById("lKey");

aKey.addEventListener("click", () => {
    document.getElementById("boom").pause();
    document.getElementById("boom").currentTime = 0;
    document.getElementById("boom").play();
})

sKey.addEventListener("click", () => {
    document.getElementById("clap").pause();
    document.getElementById("clap").currentTime = 0;
    document.getElementById("clap").play();
})

dKey.addEventListener("click", () => {
    document.getElementById("hihat").pause();
    document.getElementById("hihat").currentTime = 0;
    document.getElementById("hihat").play();
})

fKey.addEventListener("click", () => {
    document.getElementById("kick").pause();
    document.getElementById("kick").currentTime = 0;
    document.getElementById("kick").play();
})

gKey.addEventListener("click", () => {
    document.getElementById("openhat").pause();
    document.getElementById("openhat").currentTime = 0;
    document.getElementById("openhat").play();
})

hKey.addEventListener("click", () => {
    document.getElementById("ride").pause();
    document.getElementById("ride").currentTime = 0;
    document.getElementById("ride").play();
})

jKey.addEventListener("click", () => {
    document.getElementById("snare").pause();
    document.getElementById("snare").currentTime = 0;
    document.getElementById("snare").play();
})

kKey.addEventListener("click", () => {
    document.getElementById("tink").pause();
    document.getElementById("tink").currentTime = 0;
    document.getElementById("tink").play();
})

lKey.addEventListener("click", () => {
    document.getElementById("tom").pause();
    document.getElementById("tom").currentTime = 0;
    document.getElementById("tom").play();
})
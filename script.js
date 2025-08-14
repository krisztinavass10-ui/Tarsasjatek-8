const cardImages = [
    "images/3beadf0e5bd8e6bbaadc49e93e543ca8.jpg",
    "images/4c75a627840fa3cf1c714454fcf4e173.jpg",
    "images/023f41abf90d523b5341ea6dc1177533.jpg",
    "images/045d53d92051eda96e4115f73a5931f1.jpg",
    "images/45a4a47aaeeced3432e0869fb374f460.jpg",
    "images/0779fbbf1a5dabc026973d22d2f65d15.jpg",
    "images/9756fe9df5a80f0b13df9d2ab21c004f.jpg",
    "images/24105fe10192cfc52f624c58ef8e283a.jpg",
    "images/d27ebb6de481e23dafccc64d636e01bf.jpg",
    "images/d152959aa5dc4a082583adb492487783.jpg",
    "images/d680301f8ebe38135d680d401ffb99af.jpg",
    "images/d31422000d3d05a1d6455fb6fbe90701.jpg",
    "images/e10abac162cea08d51913e19fb39b385.jpg",
    "images/eeef7a098569c99a42d8fc121c8c9de0.jpg",
    "images/f79dd743d415167600d9e3f12a50f6bc.jpg",
    "images/fb90cea01475b135418bf7c7882ed418.jpg",
    "images/fd2297f1a92da0c67162514da4048328.jpg",
    "images/9a9c65e17c65681a7a13c82c5b34c74b.jpg"
];

const questions = {
    felelsz: [
        "Mi volt a legkínosabb pillanatod az iskolában?",
        "Ki a titkos szerelmed?",
        "Mikor sírtál utoljára?"
    ],
    merszek: [
        "Énekelj el egy dalt hangosan!",
        "Csinálj 10 fekvőtámaszt!",
        "Hívd fel valakit és vallj szerelmet!"
    ],
    csokhazassag: [
        "Csók, házasság vagy halál: válassz a jelenlévők közül!",
        "Csók, házasság vagy halál: hírességek verzió"
    ],
    mostlikely: [
        "Ki valószínűbb, hogy híres lesz?",
        "Ki valószínűbb, hogy késik a saját esküvőjéről?"
    ],
    inkabb: [
        "Inkább lennél láthatatlan vagy tudnál repülni?",
        "Inkább élnél a múltban vagy a jövőben?"
    ],
    mutasdmeg: [
        "Mutasd meg az utolsó keresésed!",
        "Mutasd meg az utolsó képed!",
        "Mutasd meg az utolsó üzeneted!"
    ],
    tortenelem: [
        "Mikor volt a mohácsi csata?",
        "Ki volt az első magyar király?"
    ]
};

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

let hasFlipped = false;

function showQuestions(category) {
    const container = document.getElementById("questions-container");
    container.innerHTML = "";
    hasFlipped = false;

    const usedImages = [];
    while (usedImages.length < 6) {
        const img = getRandomItem(cardImages);
        if (!usedImages.includes(img)) {
            usedImages.push(img);
        }
    }

    usedImages.forEach(imgSrc => {
        const card = document.createElement("div");
        card.className = "card";

        const front = document.createElement("div");
        front.className = "front";
        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = "Kártya hátlap";
        front.appendChild(img);

        const back = document.createElement("div");
        back.className = "back";
        back.innerText = getRandomItem(questions[category]);

        card.appendChild(front);
        card.appendChild(back);

        card.addEventListener("click", () => {
            if (!hasFlipped) {
                hasFlipped = true;
                card.classList.add("flipped");

                setTimeout(() => {
                    card.classList.remove("flipped");
                    showQuestions(category);
                }, 3000);
            }
        });

        container.appendChild(card);
    });
}

// ----------------------
// QR-kód generálása
// ----------------------
const gameUrl = "https://sajat-oldalad.hu/index.html"; // vagy GitHub Pages link
new QRCode(document.getElementById("qrcode"), {
    text: gameUrl,
    width: 128,
    height: 128,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});

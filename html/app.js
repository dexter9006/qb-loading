const { ref } = Vue

// Customize language for dialog menus and carousels here

const load = Vue.createApp({
  setup () {
    return {
      CarouselText1: 'Arrivée à l\'Aéroport Imminante',
      CarouselSubText1: 'Bienvenue sur Pain ! Nous sommes ravis de t\'accueillir dans notre communauté immersive et pleine d\'aventures. Prépare-toi à plonger dans un monde unique où tes choix façonnent ton destin, peut être même celui des autres ! Amuse-toi bien et n\'hésite pas à contacter notre équipe si tu as des questions. Bon jeu !',
      CarouselText2: 'Juste avant d\'arriver ...',
      CarouselSubText2: 'Nous te faisons savoir que ton ancien permis est valide sur Pain. Fait attention à pas le perdre !',
      CarouselText3: 'Arrivée à l\'Aéroport Imminante',
      CarouselSubText3: 'Bienvenue sur Pain ! Nous sommes ravis de t\'accueillir dans notre communauté immersive et pleine d\'aventures. Prépare-toi à plonger dans un monde unique où tes choix façonnent ton destin, peut être même celui des autres ! Amuse-toi bien et n\'hésite pas à contacter notre équipe si tu as des questions. Bon jeu !',
      CarouselText4: 'Une dernière chose ...',
      CarouselSubText4: 'Bonne chance ... qui sait ce qui peut arriver !',

      DownloadTitle: 'Téléchargement de Pain Island',
      DownloadDesc: "Tenez-vous bien pendant que nous commençons à télécharger toutes les ressources nécessaires pour jouer sur Pain Island. \n\nUne fois le téléchargement terminé avec succès, vous serez placé sur le serveur et cet écran disparaîtra. Veuillez ne pas quitter ou éteindre votre PC. ",

      SettingsTitle: 'Réglages',
      AudioTrackDesc1: 'Lorsqu\'il est désactivé, la lecture de la piste audio en cours sera arrêtée.',
      AutoPlayDesc2: 'Lorsqu\'elles sont désactivées, les images du carrousel s\'arrêtent de défiler et restent sur la dernière affichée.',
      PlayVideoDesc3: 'Lorsqu\'il est désactivé, la lecture de la video en cours sera arrêtée.',

      KeybindTitle: 'Raccourcis Clavier par défaut',
      Keybind1: 'Inventaire',
      Keybind2: 'Portée de la voix',
      Keybind3: 'Téléphone',
      Keybind4: 'Ceinture de sécurité',
      Keybind5: 'Menu Target',
      Keybind6: 'Menu Radial',
      Keybind7: 'Menu HUD',
      Keybind8: 'Radio',
      Keybind9: 'Scoreboard',
      Keybind10: 'Verrouillé véhicule',
      Keybind11: 'Moteur ON/OFF',
      Keybind12: 'Pointer du doigt',
      Keybind13: 'Keybind Slots',
      Keybind14: 'Lever les bras',
      Keybind15: 'Use Item Slots',
      Keybind16: 'Cruise Control',

      firstap: ref(true),
      secondap: ref(true),
      thirdap: ref(true),
      firstslide: ref(1),
      secondslide: ref('1'),
      thirdslide: ref('13'),   // last image +1
      audioplay: ref(true),
      playvideo: ref(true),
      download: ref(false),
      settings: ref(false),
    }
  }
})

load.use(Quasar, { config: {} })
load.mount('#loading-main')

var audio = document.getElementById("audio");
audio.volume = 0.1;

function audiotoggle() {
    var audio = document.getElementById("audio");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function videotoggle() {
    var video = document.getElementById("video");
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

let count = 0;
let thisCount = 0;

const handlers = {
    startInitFunctionOrder(data) {
        count = data.count;
    },

    initFunctionInvoking(data) {
        document.querySelector(".thingy").style.left = "0%";
        document.querySelector(".thingy").style.width = (data.idx / count) * 100 + "%";
    },

    startDataFileEntries(data) {
        count = data.count;
    },

    performMapLoadFunction(data) {
        ++thisCount;

        document.querySelector(".thingy").style.left = "0%";
        document.querySelector(".thingy").style.width = (thisCount / count) * 100 + "%";
    },
};

window.addEventListener("message", function (e) {
    (handlers[e.data.eventName] || function () {})(e.data);
});

class Pokemon {
    constructor(nom, niveau, vie, vitesse, type) {
        this.nom = nom;
        this.niveau = niveau;
        this.vie = vie;
        this.vitesse = vitesse;
        this.type = type;
    }
}
//Création de la classe et du personnage pikachu
class Pikachu extends Pokemon {
    constructor(nom, niveau, vie, vitesse, type) {
        super(nom, niveau, vie, vitesse, type);
        this.fatal_foudre = (ennemi) => {
            switch (ennemi.type) {
                case "eau":
                    ennemi.vie -= 20
                    break;
                case "poisson":
                    ennemi.vie -= 10
                    break;
                case "sol":
                    ennemi.vie -= 3
                    break;
                default:
                    ennemi.vie -= 5
                    break;
            }
        }
        this.queue_de_fer = (ennemi) => {
            switch (ennemi.type) {
                case "eau":
                    ennemi.vie -= 10
                    break;
                case "poisson":
                    ennemi.vie -= 5
                    break;
                case "sol":
                    ennemi.vie -= 3
                    break;
                default:
                    ennemi.vie -= 1
                    break;
            }
        }
        this.charge = (ennemi) => {
            switch (ennemi.type) {
                case "eau":
                    ennemi.vie -= 5
                    break;
                case "poisson":
                    ennemi.vie -= 0
                    break;
                case "sol":
                    ennemi.vie -= 3
                    break;
                default:
                    ennemi.vie -= 2
                    break;
            }
        }
        this.quick_attack = (ennemi) => {
            switch (ennemi.type) {
                case "eau":
                    ennemi.vie -= 8
                    break;
                case "poisson":
                    ennemi.vie -= 4
                    break;
                case "sol":
                    ennemi.vie -= 3
                    break;
                default:
                    ennemi.vie -= 1
                    break;
            }
        }
    }
}

let niveauPersoPika = Math.floor(Math.random() * (99 - 1)) + 1;

let pika = new Pikachu("Pikachu", niveauPersoPika, 10, 50, ["eclair"]);

//Création de la classe et du personnage carapuce
class Carapuce extends Pokemon {
    constructor(nom, niveau, vie, vitesse, type) {
        super(nom, niveau, vie, vitesse, type);
        this.pistolet_a_eau = (ennemi) => {
            switch (ennemi.type) {
                case "eclair":
                    ennemi.vie -= 20
                    break;
                case "poisson":
                    ennemi.vie -= 15
                    break;
                case "sol":
                    ennemi.vie -= 10
                    break;
                default:
                    ennemi.vie -= 5
                    break;
            }
        }
        this.morsure = (ennemi) => {
            switch (ennemi.type) {
                case "eclair":
                    ennemi.vie -= 10
                    break;
                case "poisson":
                    ennemi.vie -= 5
                    break;
                case "sol":
                    ennemi.vie -= 10
                    break;
                default:
                    ennemi.vie -= 1
                    break;
            }
        }
        this.vibraqua = (ennemi) => {
            switch (ennemi.type) {
                case "eclair":
                    ennemi.vie -= 6
                    break;
                case "poisson":
                    ennemi.vie -= 1
                    break;
                case "sol":
                    ennemi.vie -= 3
                    break;
                default:
                    ennemi.vie -= 2
                    break;
            }
        }
        this.etrainte = (ennemi) => {
            switch (ennemi.type) {
                case "eclair":
                    ennemi.vie -= 8
                    break;
                case "poisson":
                    ennemi.vie -= 4
                    break;
                case "sol":
                    ennemi.vie -= 3
                    break;
                default:
                    ennemi.vie -= 1
                    break;
            }
        }
    }
}
let niveauPersoCara = Math.floor(Math.random() * (99 - 1)) + 1;

let cara = new Carapuce("Carapuce", niveauPersoCara, 10, 20, ["eau"]);

//Création de la classe et du personnage onix
class Onix extends Pokemon {
    constructor(nom, niveau, vie, vitesse, type) {
        super(nom, niveau, vie, vitesse, type);
        this.tourbi_sable = (ennemi) => {
            switch (ennemi.type) {
                case "eclair":
                    ennemi.vie -= 20
                    break;
                case "poisson":
                    ennemi.vie -= 10
                    break;
                case "eau":
                    ennemi.vie -= 15
                    break;
                default:
                    ennemi.vie -= 5
                    break;
            }
        }
        this.armure = (ennemi) => {
            switch (ennemi.type) {
                case "eclair":
                    ennemi.vie -= 10
                    break;
                case "poisson":
                    ennemi.vie -= 8
                    break;
                case "eau":
                    ennemi.vie -= 5
                    break;
                default:
                    ennemi.vie -= 1
                    break;
            }
        }
        this.souplesse = (ennemi) => {
            switch (ennemi.type) {
                case "eclair":
                    ennemi.vie -= 6
                    break;
                case "poisson":
                    ennemi.vie -= 3
                    break;
                case "eau":
                    ennemi.vie -= 4
                    break;
                default:
                    ennemi.vie -= 2
                    break;
            }
        }
        this.etreinte = (ennemi) => {
            switch (ennemi.type) {
                case "eclair":
                    ennemi.vie -= 8
                    break;
                case "poisson":
                    ennemi.vie -= 4
                    break;
                case "eau":
                    ennemi.vie -= 6
                    break;
                default:
                    ennemi.vie -= 1
                    break;
            }
        }
    }
}
let niveauPersoOni = Math.floor(Math.random() * (99 - 1)) + 1;

let oni = new Onix("Onix", niveauPersoOni, 10, 40, ["sol"]);

//Création de la classe et du personnage smogo
class Smogo extends Pokemon {
    constructor(nom, niveau, vie, vitesse, type) {
        super(nom, niveau, vie, vitesse, type);
        this.explosion = (ennemi) => {
            switch (ennemi.type) {
                case "eclair":
                    ennemi.vie -= 20
                    break;
                case "eau":
                    ennemi.vie -= 15
                    break;
                case "sol":
                    ennemi.vie -= 10
                    break;
                default:
                    ennemi.vie -= 5
                    break;
            }
        }
        this.brouillard = (ennemi) => {
            switch (ennemi.type) {
                case "eclair":
                    ennemi.vie -= 10
                    break;
                case "eau":
                    ennemi.vie -= 5
                    break;
                case "sol":
                    ennemi.vie -= 8
                    break;
                default:
                    ennemi.vie -= 1
                    break;
            }
        }
        this.pure_de_poid = (ennemi) => {
            switch (ennemi.type) {
                case "eclair":
                    ennemi.vie -= 6
                    break;
                case "eau":
                    ennemi.vie -= 3
                    break;
                case "sol":
                    ennemi.vie -= 5
                    break;
                default:
                    ennemi.vie -= 2
                    break;
            }
        }
        this.destruction = (ennemi) => {
            switch (ennemi.type) {
                case "eclair":
                    ennemi.vie -= 8
                    break;
                case "eau":
                    ennemi.vie -= 4
                    break;
                case "sol":
                    ennemi.vie -= 6
                    break;
                default:
                    ennemi.vie -= 1
                    break;
            }
        }
    }
}
let niveauPersoSmo = Math.floor(Math.random() * (99 - 1)) + 1;

let smo = new Smogo("Smogo", niveauPersoSmo, 10, 20, ["poisson"]);

//Tableau des joueurs afin de séléctionner un combattant de manière aléatoire
let combattant = [pika, cara, oni, smo];
let combattantAleatoire = combattant[Math.floor(Math.random() * combattant.length)];

function combat() {
    alert("Bonjour et bienvenue dans ce jeu. Afin de commencer la partie, veillez choisir votre personnage");
    let choix;
    let joueur;
    let poke = null

    //Boucle qui permets de choisir le personnage que l'utilisateur aura choisi
    while (poke === null) {
        choix = prompt(`Souahites-tu jouer avec ${pika.nom}, ${cara.nom}, ${oni.nom} ou ${smo.nom}?`);
        joueur = choix.charAt(0).toUpperCase() + choix.slice(1);
        for (let i = 0; i < combattant.length; i++) {
            const element = combattant[i];
            for (const [key, value] of Object.entries(element)) {
                if (key === 'nom' && value === joueur) {
                    poke = element
                    alert(`Tu as décidé de jouer avec ${poke.nom}`);
                }
            }
        }
    }

    alert(`Il est l'heure de savoir contre quel Pokemon tu vas combattre ...`);
    alert(`combattant ennemie: ${combattantAleatoire.nom}`);
    alert(`Voyons maintenant lequel de vous lancera la première attaque ...`);

    do {
        if (poke.vitesse > combattantAleatoire.vitesse) {
            alert(`${poke.nom}, c'est à toi de lancer une attaque!`);
            if (poke.nom === "Pikachu") {
                let choixAttaque = prompt(`Quelle attaque souhaites-tu? (Attention, le nom de l'attaque doit bien être orthographié!): Fatal foudre / queue de fer / charge / quick attack`);
                switch (choixAttaque) {
                    case "fatal foudre":
                        alert(`Tu as choisi ${choixAttaque} comme attaque`);
                        pika.fatal_foudre(combattantAleatoire);
                        break;
                    case "queue de fer":
                        alert(`Tu as choisi ${choixAttaque} comme attaque`);
                        pika.queue_de_fer(combattantAleatoire);
                        break;
                    case "charge":
                        alert(`Tu as choisi ${choixAttaque} comme attaque`);
                        pika.charge(combattantAleatoire);
                        break;
                    case "quick attack":
                        alert(`Tu as choisi ${choixAttaque} comme attaque`);
                        pika.quick_attack(combattantAleatoire);
                        break;
                    default:
                        break;
                }
                alert(`${combattantAleatoire.nom} a encore ${combattantAleatoire.vie} points de vie`)
            } else if (poke.nom === "Carapuce") {
                let choixAttaque = prompt(`Quelle attaque souhaites-tu? (Attention, le nom de l'attaque doit bien être orthographié!): pistolet à eau / morsure / vibraqua / étrainte`);
                switch (choixAttaque) {
                    case "pistolet à eau":
                        alert(`Tu as choisi ${choixAttaque} comme attaque`);
                        cara.pistolet_a_eau(combattantAleatoire);
                        break;
                    case "morsure":
                        alert(`Tu as choisi ${choixAttaque} comme attaque`);
                        cara.morsure(combattantAleatoire);
                        break;
                    case "vibraqua":
                        alert(`Tu as choisi ${choixAttaque} comme attaque`);
                        cara.vibraqua(combattantAleatoire);
                        break;
                    case "étrainte":
                        alert(`Tu as choisi ${choixAttaque} comme attaque`);
                        cara.etrainte(combattantAleatoire);
                        break;
                    default:
                        break;
                }
                alerte(`${combattantAleatoire.nom} a encore ${combattantAleatoire.vie} points de vie`)
            } else if (poke.nom === "Onix") {
                let choixAttaque = prompt(`Quelle attaque souhaites-tu? (Attention, le nom de l'attaque doit bien être orthographié!): tourbi sable / armure / souplesse / étreinte`);
                switch (choixAttaque) {
                    case "tourbi sable":
                        alert(`Tu as choisi ${choixAttaque} comme attaque`);
                        oni.tourbi_sable(combattantAleatoire);
                        break;
                    case "armure":
                        alert(`Tu as choisi ${choixAttaque} comme attaque`);
                        oni.armure(combattantAleatoire);
                        break;
                    case "souplesse":
                        alert(`Tu as choisi ${choixAttaque} comme attaque`);
                        oni.souplesse(combattantAleatoire);
                        break;
                    case "étreinte":
                        alert(`Tu as choisi ${choixAttaque} comme attaque`);
                        oni.etreinte(combattantAleatoire);
                        break;
                    default:
                        break;
                }
                alert(`${combattantAleatoire.nom} a encore ${combattantAleatoire.vie} points de vie`)
            } else if (poke.nom === "Smogo") {
                let choixAttaque = prompt(`Quelle attaque souhaites-tu? (Attention, le nom de l'attaque doit bien être orthographié!): explosion / brouillard / puré de poid / destruction`);
                switch (choixAttaque) {
                    case "explosion":
                        alert(`Tu as choisi ${choixAttaque} comme attaque`);
                        smo.explosion(combattantAleatoire);
                        break;
                    case "brouillard":
                        alert(`Tu as choisi ${choixAttaque} comme attaque`);
                        smo.brouillard(combattantAleatoire);
                        break;
                    case "puré de poid":
                        alert(`Tu as choisi ${choixAttaque} comme attaque`);
                        smo.pure_de_poid(combattantAleatoire);
                        break;
                    case "destruction":
                        alert(`Tu as choisi ${choixAttaque} comme attaque`);
                        smo.destruction(combattantAleatoire);
                        break;
                    default:
                        break;
                }
                alert(`${combattantAleatoire.nom} a encore ${combattantAleatoire.vie} points de vie`)
            }
        } else {
            alert(`${combattantAleatoire.nom}, c'est à toi de lancer une attaque!`);
            if (combattantAleatoire.nom === "Pikachu") {
                let tableauAttaquePika = ["fatal", "queue", "charge", "quick"];
                let attaqueAleatoirePika = tableauAttaquePika[Math.floor(Math.random() * tableauAttaquePika.length)];
                switch (attaqueAleatoirePika) {
                    case "fatal":
                        pika.fatal_foudre(poke);
                        alert(`${combattantAleatoire.nom} vous a attaqué avec fatal foudre!`);
                        break;
                    case "queue":
                        pika.queue_de_fer(poke);
                        alert(`${combattantAleatoire.nom} vous a attaqué avec queue de fer!`);
                        break;
                    case "charge":
                        pika.charge(poke);
                        alert(`${combattantAleatoire.nom} vous a attaqué avec charge!`);
                        break;
                    case "quick":
                        pika.quick_attack(poke);
                        alert(`${combattantAleatoire.nom} vous a attaqué avec quick attack!`);
                        break;
                }
                alert(`${poke.nom}, tu a encore ${poke.vie} points de vie`)

            } else if (combattantAleatoire.nom === "Carapuce") {
                let tableauAttaqueCara = ["pistolet", "morsure", "vibraqua", "étrainte"]
                let attaqueAleatoireCara = tableauAttaqueCara[Math.floor(Math.random() * tableauAttaqueCara.length)];
                switch (attaqueAleatoireCara) {
                    case "pistolet":
                        cara.pistolet_a_eau(poke);
                        alert(`${combattantAleatoire.nom} vous a attaqué avec pistolet à eau.`);
                        break;
                    case "morsure":
                        cara.morsure(poke);
                        alert(`${combattantAleatoire.nom} vous a attaqué avec morsure.`);
                        break;
                    case "vibraqua":
                        cara.vibraqua(poke);
                        alert(`${combattantAleatoire.nom} vous a attaqué avec vibraqua.`);
                        break;
                    case "étrainte":
                        cara.etrainte(poke);
                        alert(`${combattantAleatoire.nom} vous a attaqué avec étrainte.`);
                        break;
                }
                alert(`${poke.nom}, tu a encore ${poke.vie} points de vie`)
            } else if (combattantAleatoire.nom === "Onix") {
                let tableauAttaqueOni = ["tourbi", "armure", "souplesse", "etreinte"]
                let attaqueAleatoireOni = tableauAttaqueOni[Math.floor(Math.random() * tableauAttaqueOni.length)];
                switch (attaqueAleatoireOni) {
                    case "tourbi":
                        oni.tourbi_sable(poke);
                        alert(`${combattantAleatoire.nom} vous a attaqué avec tourbi sable.`);
                        break;
                    case "armure":
                        oni.armure(poke);
                        alert(`${combattantAleatoire.nom} vous a attaqué avec armure.`);
                        break;
                    case "souplesse":
                        oni.souplesse(poke);
                        alert(`${combattantAleatoire.nom} vous a attaqué avec souplesse.`);
                        break;
                    case "etreinte":
                        oni.etreinte(poke);
                        alert(`${combattantAleatoire.nom} vous a attaqué avec étreinte.`);
                        break;
                }
                alert(`${poke.nom}, tu a encore ${poke.vie} points de vie`)
            } else if (combattantAleatoire.nom === "Smogo") {
                let tableauAttaqueSmo = ["explosion", "brouillard", "puré de poid", "destruction"]
                let attaqueAleatoireSmo = tableauAttaqueSmo[Math.floor(Math.random() * tableauAttaqueSmo.length)];                
                switch (attaqueAleatoireSmo) {
                    case "explosion":
                        smo.explosion(poke);
                        alert(`${combattantAleatoire.nom} vous a attaqué avec explosion.`);
                        break;
                    case "brouillard":
                        smo.brouillard(poke);
                        alert(`${combattantAleatoire.nom} vous a attaqué avec brouillard.`);
                        break;
                    case "puré de poid":
                        smo.pure_de_poid(poke);
                        alert(`${combattantAleatoire.nom} vous a attaqué avec puré de poid.`);
                        break;
                    case "destruction":
                        smo.destruction(poke);
                        alert(`${combattantAleatoire.nom} vous a attaqué avec destruction.`);
                        break;
                    default:
                        break;
                }
                alert(`${combattantAleatoire.nom} a encore ${combattantAleatoire.vie} points de vie`)
            }
        }
        if (poke.vitesse > combattantAleatoire.vitesse) {
            alert(`${combattantAleatoire.nom}, c'est à toi de lancer une attaque!`);
            if (combattantAleatoire.nom === "Pikachu") {
                let tableauAttaquePika = ["fatal", "queue", "charge", "quick"];
                let attaqueAleatoirePika = tableauAttaquePika[Math.floor(Math.random() * tableauAttaquePika.length)];
                switch (attaqueAleatoirePika) {
                    case "fatal":
                        pika.fatal_foudre(poke);
                        alert(`${combattantAleatoire.nom} vous a attaqué avec fatal foudre`);
                        break;
                    case "queue":
                        pika.queue_de_fer(poke);
                        alert(`${combattantAleatoire.nom} vous a attaqué avec queue de fer`);
                        break;
                    case "charge":
                        pika.charge(poke);
                        alert(`${combattantAleatoire.nom} vous a attaqué avec charge`);
                        break;
                    case "quick":
                        pika.quick_attack(poke);
                        alert(`${combattantAleatoire.nom} vous a attaqué avec quick attack`);
                        break;
                }
                alert(`${poke.nom}, tu a encore ${poke.vie} points de vie`)

            } else if (combattantAleatoire.nom === "Carapuce") {
                let tableauAttaqueCara = ["pistolet", "morsure", "vibraqua", "étrainte"]
                let attaqueAleatoireCara = tableauAttaqueCara[Math.floor(Math.random() * tableauAttaqueCara.length)];
                switch (attaqueAleatoireCara) {
                    case "pistolet":
                        cara.pistolet_a_eau(poke);
                        alert(`${combattantAleatoire.nom} vous a attaqué avec pistolet à eau`);
                        break;
                    case "morsure":
                        cara.morsure(poke);
                        alert(`${combattantAleatoire.nom} vous a attaqué avec morsure`);
                        break;
                    case "vibraqua":
                        cara.vibraqua(poke);
                        alert(`${combattantAleatoire.nom} vous a attaqué avec vibraqua`);
                        break;
                    case "étrainte":
                        cara.etrainte(poke);
                        alert(`${combattantAleatoire.nom} vous a attaqué avec étrainte`);
                        break;
                }
                alert(`${poke.nom}, tu a encore ${poke.vie} points de vie`)
            } else if (combattantAleatoire.nom === "Onix") {
                let tableauAttaqueOni = ["tourbi", "armure", "souplesse", "etreinte"]
                let attaqueAleatoireOni = tableauAttaqueOni[Math.floor(Math.random() * tableauAttaqueOni.length)];
                switch (attaqueAleatoireOni) {
                    case "tourbi":
                        oni.tourbi_sable(poke);
                        alert(`${combattantAleatoire.nom} vous a attaqué avec tourbi sable`);
                        break;
                    case "armure":
                        oni.armure(poke);
                        alert(`${combattantAleatoire.nom} vous a attaqué avec armure`);
                        break;
                    case "souplesse":
                        oni.souplesse(poke);
                        alert(`${combattantAleatoire.nom} vous a attaqué avec souplesse`);
                        break;
                    case "etreinte":
                        oni.etreinte(poke);
                        alert(`${combattantAleatoire.nom} vous a attaqué avec étreinte`);
                        break;
                }
                alert(`${poke.nom}, tu a encore ${poke.vie} points de vie`)
            } else if (combattantAleatoire.nom === "Smogo") {
                let tableauAttaqueSmo = ["explosion", "brouillard", "puré de poid", "destruction"]
                let attaqueAleatoireSmo = tableauAttaqueSmo[Math.floor(Math.random() * tableauAttaqueSmo.length)];                
                switch (attaqueAleatoireSmo) {
                    case "explosion":
                        smo.explosion(poke);
                        alert(`${combattantAleatoire.nom} vous a attaqué avec explosion.`);
                        break;
                    case "brouillard":
                        smo.brouillard(poke);
                        alert(`${combattantAleatoire.nom} vous a attaqué avec brouillard.`);
                        break;
                    case "puré de poid":
                        smo.pure_de_poid(poke);
                        alert(`${combattantAleatoire.nom} vous a attaqué avec puré de poid.`);
                        break;
                    case "destruction":
                        smo.destruction(poke);
                        alert(`${combattantAleatoire.nom} vous a attaqué avec destruction.`);
                        break;
                    default:
                        break;
                }
                alert(`${combattantAleatoire.nom} a encore ${combattantAleatoire.vie} points de vie`)
            }
        } else {
            alert(`${poke.nom} c'est à ton tour de lancer une attaque!`);
            if (poke.nom === "Pikachu") {
                let choixAttaque = prompt(`Quelle attaque souhaites-tu? (Attention, le nom de l'attaque doit bien être orthographié!): Fatal foudre / queue de fer / charge / quick attack`);
                switch (choixAttaque) {
                    case "fatal foudre":
                        alert(`Tu as choisi ${choixAttaque} comme attaque`);
                        pika.fatal_foudre(combattantAleatoire);
                        break;
                    case "queue de fer":
                        alert(`Tu as choisi ${choixAttaque} comme attaque`);
                        pika.queue_de_fer(combattantAleatoire);
                        break;
                    case "charge":
                        alert(`Tu as choisi ${choixAttaque} comme attaque`);
                        pika.charge(combattantAleatoire);
                        break;
                    case "quick attack":
                        alert(`Tu as choisi ${choixAttaque} comme attaque`);
                        pika.quick_attack(combattantAleatoire);
                        break;
                    default:
                        break;
                }
                alert(`${combattantAleatoire.nom}, tu a encore ${combattantAleatoire.vie} points de vie`)
            } else if (poke.nom === "Carapuce") {
                let choixAttaque = prompt(`Quelle attaque souhaites-tu? (Attention, le nom de l'attaque doit bien être orthographié!): pistolet à eau / morsure / vibraqua / étrainte`);
                switch (choixAttaque) {
                    case "pistolet à eau":
                        alert(`Tu as choisi ${choixAttaque} comme attaque`);
                        cara.pistolet_a_eau(combattantAleatoire);
                        break;
                    case "morsure":
                        alert(`Tu as choisi ${choixAttaque} comme attaque`);
                        cara.morsure(combattantAleatoire);
                        break;
                    case "vibraqua":
                        alert(`Tu as choisi ${choixAttaque} comme attaque`);
                        cara.vibraqua(combattantAleatoire);
                        break;
                    case "étrainte":
                        alert(`Tu as choisi ${choixAttaque} comme attaque`);
                        cara.etrainte(combattantAleatoire);
                        break;
                    default:
                        break;
                }
                alert(`${combattantAleatoire.nom} a encore ${combattantAleatoire.vie} points de vie`)
            } else if (poke.nom === "Onix") {
                let choixAttaque = prompt(`Quelle attaque souhaites-tu? (Attention, le nom de l'attaque doit bien être orthographié!): tourbi sable / armure / souplesse / étreinte`);
                switch (choixAttaque) {
                    case "tourbi sable":
                        alert(`Tu as choisi ${choixAttaque} comme attaque`);
                        oni.tourbi_sable(combattantAleatoire);
                        break;
                    case "armure":
                        alert(`Tu as choisi ${choixAttaque} comme attaque`);
                        oni.armure(combattantAleatoire);
                        break;
                    case "souplesse":
                        alert(`Tu as choisi ${choixAttaque} comme attaque`);
                        oni.souplesse(combattantAleatoire);
                        break;
                    case "étreinte":
                        alert(`Tu as choisi ${choixAttaque} comme attaque`);
                        oni.etreinte(combattantAleatoire);
                        break;
                    default:
                        break;
                }
                alert(`${combattantAleatoire.nom} a encore ${combattantAleatoire.vie} points de vie`)
            } else if (poke.nom === "Smogo") {
                let choixAttaque = prompt(`Quelle attaque souhaites-tu? (Attention, le nom de l'attaque doit bien être orthographié!): explosion / brouillard / puré de poid / destruction`);
                switch (choixAttaque) {
                    case "explosion":
                        alert(`Tu as choisi ${choixAttaque} comme attaque`);
                        smo.explosion(combattantAleatoire);
                        break;
                    case "brouillard":
                        alert(`Tu as choisi ${choixAttaque} comme attaque`);
                        smo.brouillard(combattantAleatoire);
                        break;
                    case "puré de poid":
                        alert(`Tu as choisi ${choixAttaque} comme attaque`);
                        smo.pure_de_poid(combattantAleatoire);
                        break;
                    case "destruction":
                        alert(`Tu as choisi ${choixAttaque} comme attaque`);
                        smo.destruction(combattantAleatoire);
                        break;
                    default:
                        break;
                }
                alert(`${combattantAleatoire.nom} a encore ${combattantAleatoire.vie} points de vie`)
            }
        }
    }
    while (poke.vie >= 0 && combattantAleatoire.vie >= 0);
    
    if(poke.vie <=0){
        alert(`${poke.nom} tu as perdu!`);
    } else{
        alert(`${combattantAleatoire.nom} tu as perdu!`);
    }
}
// combat()
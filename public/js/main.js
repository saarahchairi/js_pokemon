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
                case "sol":
                    ennemi.vie -= 10
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
                case "sol":
                    ennemi.vie -= 5
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
                case "sol":
                    ennemi.vie -= 0
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
                case "sol":
                    ennemi.vie -= 4
                    break;
                default:
                    ennemi.vie -= 1
                    break;
            }
        }
    }
}
let niveauPersoPika = Math.floor(Math.random() * (99 - 1)) + 1;

let pika = new Pikachu("Pikachu", niveauPersoPika, 100, 50, ["eclair"]);

//Création de la classe et du personnage carapuce
class Carapuce extends Pokemon {
    constructor(nom, niveau, vie, vitesse, type) {
        super(nom, niveau, vie, vitesse, type);
        this.pistolet_a_eau = (ennemi) => {
            switch (ennemi.type) {
                case "eclair":
                    ennemi.vie -= 20
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
                case "sol":
                    ennemi.vie -= 5
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
                case "sol":
                    ennemi.vie -= 3
                    break;
                default:
                    ennemi.vie -= 2
                    break;
            }
        }
        this.ecume = (ennemi) => {
            switch (ennemi.type) {
                case "eclair":
                    ennemi.vie -= 8
                    break;
                case "sol":
                    ennemi.vie -= 4
                    break;
                default:
                    ennemi.vie -= 1
                    break;
            }
        }
    }
}
let niveauPersoCara = Math.floor(Math.random() * (99 - 1)) + 1;

let cara = new Carapuce("Carapuce", niveauPersoCara, 100, 20, ["eau"]);

//Création de la classe et du personnage onix
class Onix extends Pokemon {
    constructor(nom, niveau, vie, vitesse, type) {
        super(nom, niveau, vie, vitesse, type);
        this.tourbi_sable = (ennemi) => {
            switch (ennemi.type) {
                case "eclair":
                    ennemi.vie -= 20
                    break;
                case "eau":
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
                case "eau":
                    ennemi.vie -= 5
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
                case "eau":
                    ennemi.vie -= 3
                    break;
                default:
                    ennemi.vie -= 2
                    break;
            }
        }
        this.ecume = (ennemi) => {
            switch (ennemi.type) {
                case "eclair":
                    ennemi.vie -= 8
                    break;
                case "eau":
                    ennemi.vie -= 4
                    break;
                default:
                    ennemi.vie -= 1
                    break;
            }
        }
    }
}
let niveauPersoOni = Math.floor(Math.random() * (99 - 1)) + 1;

let oni = new Onix("Onix", niveauPersoOni, 100, 20, ["sol"]);

//Tableau des joueurs afin de séléctionner un combattant de manière aléatoire
let combattant = [pika, cara, oni];
let combattantAleatoire = combattant[Math.floor(Math.random() * combattant.length)];

function combat() {
    alert("Bonjour et bienvenue dans ce jeu. Afin de commencer la partie, veillez choisir votre personnage");
    let choix;
    let joueur;
    let poke = null

    //Boucle qui permets de choisir le personnage que l'utilisateur aura choisi
    while(poke === null){
        choix = prompt(`Souahites-tu jouer avec ${pika.nom}, ${cara.nom} ou ${oni.nom}?`);
        joueur = choix.charAt(0).toUpperCase() + choix.slice(1);
        for (let i = 0; i < combattant.length; i++) {
            const element = combattant[i];
            for (const [key, value] of Object.entries(element)) {
                if(key === 'nom' && value === joueur){
                    poke = element
                    console.log(`Tu as décidé de jouer avec ${poke.nom}`);
                } 
            }
        }
    }

    console.log(`Il est l'heure de savoir contre quel Pokemon tu vas combattre ...`);
    console.log(`combattant ennemie: ${combattantAleatoire.nom}`);
}
combat()
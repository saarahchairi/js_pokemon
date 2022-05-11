class Pokemon{
    constructor(nom, niveau, vie, vitesse, type){
        this.nom = nom;
        this.niveau = niveau;
        this.vie = vie;
        this.vitesse = vitesse;
        this.type = type;
    }
}

class Pikachu extends Pokemon{
    constructor(nom, niveau, vie, vitesse, type){
        super(nom, niveau, vie, vitesse, type);
        this.fatal_foudre = (enemie) => {
            switch (enemie.type) {
                case "eau":
                    enemie.vie -= 20
                    break;
                case "eclair":
                    enemie.vie -= 5
                    break;
                default:
                    enemie.vie -= 10
                    break;
            } 
        }
        this.queue_de_fer = (enemie) => {
            switch (enemie.type) {
                case "eau":
                    enemie.vie -= 10
                    break;
                case "eclair":
                    enemie.vie -= 1
                    break;
                default:
                    enemie.vie -= 5
                    break;
            } 
        }
        this.charge = (enemie) => {
            switch (enemie.type) {
                case "eau":
                    enemie.vie -= 5
                    break;
                case "eclair":
                    enemie.vie -= 0
                    break;
                default:
                    enemie.vie -= 2
                    break;
            } 
        }
        this.quick_attack = (enemie) => {
            switch (enemie.type) {
                case "eau":
                    enemie.vie -= 8
                    break;
                case "eclair":
                    enemie.vie -= 1
                    break;
                default:
                    enemie.vie -= 4
                    break;
            } 
        }
    }
}
let niveauPersoPika = Math.floor(Math.random()*(99-1))+1;

let pika = new Pikachu("Pikachu", niveauPersoPika, 100, 50,["eclair"]);

class Carapuce extends Pokemon {
    constructor(nom, niveau, vie, vitesse, type){
        super(nom, niveau, vie, vitesse, type);
        this.pistolet_a_eau = (enemie) => {
            switch (enemie.type) {
                case "eclair":
                    enemie.vie -= 20
                    break;
                case "eau":
                    enemie.vie -= 5
                    break;
                default:
                    enemie.vie -= 10
                    break;
            }
        }
        this.morsure = (enemie) => {
            switch (enemie.type) {
                case "eclair":
                    enemie.vie -= 10
                    break;
                case "eau":
                    enemie.vie -= 1
                    break;
                default:
                    enemie.vie -= 5
                    break;
            }
        }
        this.vibraqua = (enemie) => {
            switch (enemie.type) {
                case "eclair":
                    enemie.vie -= 6
                    break;
                case "eau":
                    enemie.vie -= 2
                    break;
                default:
                    enemie.vie -= 3
                    break;
            }
        }
        this.ecume = (enemie) => {
            switch (enemie.type) {
                case "eclair":
                    enemie.vie -= 8
                    break;
                case "eau":
                    enemie.vie -= 1
                    break;
                default:
                    enemie.vie -= 4
                    break;
            }
        }
    }
}
let niveauPersoCara = Math.floor(Math.random()*(99-1))+1;

let cara = new Carapuce("Carapuce", niveauPersoCara, 100, 20, ["eau"]);

console.log(pika);
console.log(cara);

function combat () {
    console.log("Bonjour et bienvenue dans ce jeu. Afin de commencer la partie, veillez choisir votre personnage");
    let joueur = prompt(`Souahites-tu jouer avec ${pika.nom} ou ${cara.nom}?`);
    switch (joueur) {
        case "pikachu":
            console.log(`Tu as décidé de jouer avec ${pika.nom}`);
            break;
        case "carapuce":
            console.log(`Tu as décidé de jouer avec ${cara.nom}`);
            break;
        default:
            break;
    }
}
combat()
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
let niveauPerso = Math.floor(Math.random()*(99-1))+1;

let pika = new Pikachu("Pikachu", niveauPerso, 100, 50,["eclair"]);

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

let cara = new Carapuce("Carapuce", niveauPerso, 50, ["eau"]);
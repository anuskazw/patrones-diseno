/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

class Restaurant {

    constructor() {
    }

    orderHamburger() {
        return this;
    }
}

class BeefRestaurant extends Restaurant {
    constructor() {
        super();
    }
}
class ChickenRestaurant extends Restaurant {
    constructor() {
        super();
    }
}


function main() {

    console.log('hola')

    let restaurant: Restaurant;

    const burgerType = prompt('¿qué tipo de hamburguesa quieres? (beef/chicken/bean)');
    switch (burgerType) {
        case 'chicken': restaurant = new ChickenRestaurant();
            break;

        case 'beef': restaurant = new BeefRestaurant();
            break;

        default: throw new Error('Opción no válida');
    }

}

main();
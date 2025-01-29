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

import { COLORS } from '../helpers/colors.ts';

interface Hamburger {
    prepare(): void;
}

class BeefHamburger implements Hamburger {
    prepare(): void {
        console.log('Preparando una hamburguesa de %cCarne', COLORS.brown);
    }
}
class ChickenHamburger implements Hamburger {
    prepare(): void {
        console.log('Preparando una hamburguesa de %cPollo', COLORS.yellow);
    }    
}
class FrijolHamburger implements Hamburger {
    prepare(): void {
        console.log('Preparando una hamburguesa de %cFrijoles', COLORS.green);
    }
}

abstract class Restaurant {

    abstract createHamburger(): Hamburger;

    orderHamburger(): void {
        const hamburguer = this.createHamburger();
        hamburguer.prepare();
    }
}

class ChickenRestaurant extends Restaurant {
    createHamburger(): Hamburger {
        return new ChickenHamburger();
    }
}

class BeefRestaurant extends Restaurant {
    createHamburger(): Hamburger {
        return new BeefHamburger();
    }
}

class FrijolRestaurant extends Restaurant{
    createHamburger(): Hamburger {
        return new FrijolHamburger();
    }
}

function main() {

    console.log('hola')

    let restaurant: Restaurant;

    const burgerType = prompt('¿qué tipo de hamburguesa quieres? (beef/chicken/bean)');
    switch (burgerType) {
        case 'chicken':     restaurant = new ChickenRestaurant();   break;
        case 'beef':        restaurant = new BeefRestaurant();      break;
        case 'bean':        restaurant = new FrijolRestaurant();    break; 

        default: throw new Error('Opción no válida');
    }

}
main();

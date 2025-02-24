/**
 * ! Patrón Prototype:

 * Es un patrón de diseño creacional que nos permite copiar objetos existentes sin hacer
 * que el código dependa de sus clases.
 * 
 * * Es útil cuando queremos duplicar el contenido, 
 * * el título y el autor de un documento, por ejemplo o cualquier objeto complejo.
 * 
 * https://refactoring.guru/es/design-patterns/prototype
 */

class Documento {
    public title: string;
    private content: string;
    public author: string;

    constructor(title: string, content: string, author: string) {
        this.title = title;
        this.content = content;
        this.author = author;
    }

    displayInfo() {
        console.log(`Title: ${this.title}`);
        console.log(`Content: ${this.content}`);
        console.log(`Author: ${this.author}`);
    }
}


function main() {
    const doc1 = new Documento('Documento 1', 'Content 1', 'Author 1');

    console.log({doc1});
    doc1.displayInfo();

    const doc2 = {...doc1}; // Se pierde su ADN
    doc2.title = 'Nuevo titulo';


}

main();
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

    constructor(title: string, content: string, author: string){
        this.title = title;
        this.content = content;
        this.author = author;
    }

    clone(): Documento {
        return new Documento(this.title, this.content, this.author);
    }

    displayContent(){
        console.log(`
            Title: ${this.title}
            Content: ${this.content}
            Author: ${this.author}
        `);
    }

}

function main(){

    const prueba1 = new Documento('Prueba1', 'Contenido1', 'Ana');
    console.log(prueba1);
    prueba1.displayContent();

    const prueba2 = {...prueba1};
    console.log(prueba2);
    // prueba2.displayContent(); // error porque no existe, se ha perdido el ADN.

    const prueba3 = structuredClone(prueba1);
    console.log(prueba3);
    // prueba3.displayContent(); // error, porque no existe, se ha perdido el ADN.

    const prueba4 = prueba1.clone();
    console.log(prueba4);
    prueba4.displayContent(); // Clonado con éxito.
    
    
}

main();
/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */
import { COLORS } from './../helpers/colors.ts';

class Computer {
  cpu: string = 'No definido';
  ram: string = 'No definido';
  storage: string = 'No definido';
  gpu?: string;

  display() {
    console.log('%c---> Mi ordenador es:', COLORS.blue);
    console.log(`
      CPU: ${this.cpu}
      RAM: ${this.ram}
      STORAGE: ${this.storage}
      GPU: ${this.gpu ?? 'No definido'}
      `)
  }
}
class ComputerBuilder {
  private computer: Computer;
  constructor() {
    this.computer = new Computer();
  }

  setCpu = (cpu: string): ComputerBuilder => {
    this.computer.cpu = cpu;
    return this;
  }

  setRam = (ram: string): ComputerBuilder => {
    this.computer.ram = ram;
    return this;
  }

  setStorage = (storage: string): ComputerBuilder => {
    this.computer.storage = storage;
    return this;
  }

  setGpu = (gpu: string): ComputerBuilder => {
    this.computer.gpu = gpu;
    return this;
  }

  build = (): Computer => {
    return this.computer;
  }

}

function main() {
  const OrdenadorBasico: Computer = new ComputerBuilder()
    .setCpu('Intel Core i9')
    .setRam('16GB')
    .setRam('64GB')
    .setStorage('256GB')
    .setStorage('1TB')
    .build();

  OrdenadorBasico.display();
}

main();
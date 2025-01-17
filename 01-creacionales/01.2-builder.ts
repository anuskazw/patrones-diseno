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
 */

import { COLORS } from '../helpers/colors.ts';

//! Tarea: crear un QueryBuilder para construir consultas SQL
/**
 * Debe de tener los siguientes métodos:
 * - constructor(table: string)
 * - select(fields: string[]): QueryBuilder -- si no se pasa ningún campo, se seleccionan todos con el (*)
 * - where(condition: string): QueryBuilder - opcional
 * - orderBy(field: string, order: string): QueryBuilder - opcional
 * - limit(limit: number): QueryBuilder - opcional
 * - execute(): string - retorna la consulta SQL
 * 
 ** Ejemplo de uso:
  const usersQuery = new QueryBuilder("users") // users es el nombre de la tabla
    .select("id", "name", "email")
    .where("age > 18")
    .where("country = 'Cri'")
    .orderBy("name", "ASC")
    .limit(10)
    .execute();

  console.log('Consulta: ', usersQuery);
  // Select id, name, email from users where age > 18 and country = 'Cri' order by name ASC limit 10;
 */

//! Solución
class QueryBuilder {
  private table: string;
  private fields: string[] = [];
  private conditions: string[] = [];
  private orderFields: string[] = [];
  private limitCount?: number;

  constructor(table: string) {
    this.table = table;
  }

  select(...fields: string[]): QueryBuilder {
    if(fields?.length > 0){
      this.fields = fields;
    } else {
      this.fields.push('*');
    }
    return this;
  }

  where(condition: string): QueryBuilder {
    console.log(condition);
    console.log(this.fields);
    // SI NO SE PASA NINGUNA CONDICION, NO SE HACE NADA
    if(condition === '' || !condition) return this;
    // SI SE PASA UNA CONDICION, SE COMPRUEBA SI CONTIENE YA UN WHERE O NO, PARA METERLE WHERE O AND
    // this.conditions.push(condition);
    const primerWhere = this.conditions.findIndex((q: string) => q.toLocaleUpperCase().includes('WHERE')) === -1;
    if(primerWhere){
      this.conditions.push('WHERE', condition)
    } else {
      this.conditions.push('AND', condition);
    }
    return this;
  }

  orderBy(field: string, direction: 'ASC' | 'DESC' = 'ASC'): QueryBuilder {
        // SI NO SE PASA NINGUNA VALOR, NO SE HACE NADA
        if(field === '' || !field) return this;
        this.orderFields.push(`${field} ${direction}`);
        return this;
  }

  limit(count: number): QueryBuilder {
    if(!count || isNaN(count)) return this;
    this.limitCount = count;
    return this;
  }

  execute(): string {
    const query = `SELECT 
    ${this.fields.join(', ')} 
    FROM ${this.table} 
    ${this.conditions.length>0 ? this.conditions.join(' '):''}
    ${this.orderFields.length>0? 'ORDER BY ' + this.orderFields.join(', ')+' ':''}
    ${!!this.limitCount && 'LIMIT '+this.limitCount}`
    // Select id, name, email from users where age > 18 and country = 'Cri' order by name ASC limit 10;
    return query;
  }
}

function main() {
  const usersQuery = new QueryBuilder('users')
    .select('id', 'name', 'email')
    .where('age > 18')
    .where("country = 'Cri'") // Esto debe de hacer una condición AND
    .orderBy('name', 'ASC')
    .limit(10)
    .execute();

   /* SELECT id, name, email FROM users WHERE age > 18 AND country = 'Cri' ORDER BY name ASC LIMIT 10 */
  console.log('%cConsulta:\n', COLORS.red);
  console.log(usersQuery);
}

main();

export class Estudante {
  name: string;
  id: number;
  curso: string ; //  ----  CRIAÇÃO DA CLASSE ESTUDANTE COM SEUS ATRIBUTOS----
  date: string ;
  constructor(name: string, id: number, curso: string, date: string) {
    this.name = name;
    this.id = id;
    this.curso = curso;
    this.date = date;
  }
}

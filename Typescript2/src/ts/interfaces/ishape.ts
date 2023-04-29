// Interface: describen la estructura del objeto, lo que significa que describe cómo debería verse el objeto.
export interface IShape {
    color: string;
    //todas deben tener una funcion area
    area(): number;
    draw(): void;
  }
//usar en otro modulo
export class Training {
  constructor(
    public type: string,
    readonly distance: number,
    public date: string,
    private comments: string = ""
  ) {}
}

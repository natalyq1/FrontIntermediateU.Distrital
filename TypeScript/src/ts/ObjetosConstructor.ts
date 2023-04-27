//definicion de una clase
class Train {
    type: string;
    distance: number;
    date: string;

    //funcion reservada-->instancia el objeto y puede darle valores por defecto
    constructor(
        type: string, 
        distance: number, date: string = 'today'){//a ese objeto type pongale lo que venga por esa misma propiedad
        this.type = type
        this.distance = distance
        this.date = date
    }
  }

  const train1 = new Train('Long run', 21 , '2023-02-11')
  const train2 = new Train('Long run', 21 )//si no le paso el tercer dato sera al que deje por defecto cuando cree la instancia
  train1.type = 'Intervals'
  console.log(train1);//Train {type: 'Intervals', distance: 21, date: '2023-02-11'}
  console.log(train2);//Train {type: 'Long run', distance: 21, date: 'today'}
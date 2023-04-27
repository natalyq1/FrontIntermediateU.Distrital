console.log('ENUMS');
/*Sirve para darle un valor numero a cada variable 

This auto-incrementing behavior is useful for cases where we might not care about the member values themselves, but do care that each value is distinct from other values in the same enum.*/

enum TrainigType {
    TRAINING_RUN, //0
    INTERVALS, //1
    LOND_RUN, //2
}
//declaracion de variables con un tipo enum
let tipoEntrenamiento: TrainigType =TrainigType.TRAINING_RUN

//asigna valores definidos en enum
//tipoEntrenamiento = TrainigType.TRAINING_RUN

//muestra el valor asignado
console.log(tipoEntrenamiento);//0


//verificacion de valor contra Enum
if (tipoEntrenamiento == TrainigType.TRAINING_RUN) {
    console.log('training run');
    
}else if (tipoEntrenamiento == TrainigType.INTERVALS) {
    console.log('intervals');
    
}
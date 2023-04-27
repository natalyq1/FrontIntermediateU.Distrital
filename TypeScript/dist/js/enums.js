"use strict";
console.log('ENUMS');
var TrainigType;
(function (TrainigType) {
    TrainigType[TrainigType["TRAINING_RUN"] = 0] = "TRAINING_RUN";
    TrainigType[TrainigType["INTERVALS"] = 1] = "INTERVALS";
    TrainigType[TrainigType["LOND_RUN"] = 2] = "LOND_RUN";
})(TrainigType || (TrainigType = {}));
let tipoEntrenamiento = TrainigType.TRAINING_RUN;
console.log(tipoEntrenamiento);
if (tipoEntrenamiento == TrainigType.TRAINING_RUN) {
    console.log('training run');
}
else if (tipoEntrenamiento == TrainigType.INTERVALS) {
    console.log('intervals');
}

console.log('modules');
//debe ser .js
import { Training} from './classes/training.js';

const t1 = new Training('Long run', 21, '2023-04-27')
 console.log(t1); //Training {type: 'Long run', distance: 21, date: '2023-04-27', comments: ''}
 
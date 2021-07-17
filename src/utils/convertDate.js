import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');


export const convertDate = ( date ) => {

    if(moment(date).isValid()){
        return moment(date).format("DD MMMM YYYY, h:mm a");
    } else {
        return '';
    }

};


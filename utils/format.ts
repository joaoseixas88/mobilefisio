import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export function formatBRL(value: number){
    const formattedValue = Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(value);
    return formattedValue
}




export function formatDate(date: Date){

    const newDate = new Date(date)
    
    const dateFormatted = Intl.DateTimeFormat('pt-BR',{
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'       
        }).format(newDate)
    const hourFormatted = Intl.DateTimeFormat('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        }).format(newDate)

    return (`Dia ${dateFormatted} às ${hourFormatted} horas`)
}


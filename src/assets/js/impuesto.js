export class Impuesto{
    constructor(montoBrutoAnual, deducciones){
    this._montoBrutoAnual = montoBrutoAnual;
    this._deducciones = deducciones;    
    } 
//Setter y Getter
//Monto Bruto  Anual
    get montoBrutoAnual(){
        return this._montoBrutoAnual;
    }
    set montoBrutoAnual(nuevoMontoBrutoAnual){
        this._montoBrutoAnual = nuevoMontoBrutoAnual;
    }

    //Deducciones
    get deducciones(){
        return this._deducciones;
    }
    set deducciones(nuevaDeducciones){
        this._deducciones = nuevaDeducciones;
    }
};
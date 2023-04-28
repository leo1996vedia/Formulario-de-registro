class Persona {
    constructor (nombreCompleto
    ,fechaDeNacimiento, email,contraseña,genero,residencia)
    {
        this._nombreCompleto=nombreCompleto;
        this._fechaDeNacimiento=fechaDeNacimiento;
        this._email=email;
        this._contraseña=contraseña;
        this._genero=genero;
        this._residencia=residencia;
  
    }
    
    set nombreCompleto (_nombreCompleto){
        this._nombreCompleto=nombreCompleto;
    }

    get nombreCompleto (){
        return this._nombreCompleto;
    }

   
     set fechaDeNacimiento (_fechaDeNacimiento){
        this._fechaDeNacimiento=fechaDeNacimiento;
    }

    get fechaDeNacimiento (){
        return this._fechaDeNacimiento;
    }
 
 
 
    set email (_email){
         this._email=_email;
        }
        
    get email (){
        return this._email;
  
    }
    set contraseña (_contraseña){
        this._contraseña=contraseña;
    }
    get contraseña(){
        return this._contraseña;
    }

    set genero (_genero){
        this._genero=this.genero;
    }

    get genero (){
        return this._genero;
    } 
    set residencia(_residencia){
        this._residencia=residencia;
    }

    get residencia(){
        return this._residencia
    }
    
    toString(){
      
     
        return`${this._nombreCompleto}${this._fechaDeNacimiento}${this._email}  ${this._contraseña} ${this._genero} ${this._residencia}`
        }

}
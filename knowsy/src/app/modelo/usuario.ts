export class Usuario{
    
    constructor(
        public id:number,
        public nombre:string,
        public email:string,
        public contrasena:string,
        public descripcion:string,
        public img:string,
        public estado:boolean,
        public tokens:number,
        public fiable:boolean){
    }

}
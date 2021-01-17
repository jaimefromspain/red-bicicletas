var Bicicleta = function(id, modelo, color, ubicacion){
    this.id = id;
    this.modelo = modelo;
    this.color = color;
    this.ubicacion = ubicacion;
};

Bicicleta.prototype.toString= function(){
    return 'id: ' + this.id + ' | color: ' + this.color;
}

Bicicleta.allBicis = [];

Bicicleta.add = function(aBici){
    Bicicleta.allBicis.push(aBici);
};

Bicicleta.findById= function(aBiciId){
    var aBici = Bicicleta.allBicis.find(x => x.id == aBiciId);
    if (aBici)
        return aBici;
    else
        throw new Error(`No hay ninguna bicicleta con ID: ${aBiciId}`);
}

Bicicleta.removeById= function(aBiciId){
    for (var i=0; i<Bicicleta.allBicis.length; i++)
        if (Bicicleta.allBicis[i].id == aBiciId){
            Bicicleta.allBicis.splice(i,1);
            break;
        }
}

var a = new Bicicleta(1,'urbano', 'rojo',[43.4296400,-3.8592900] )
var b = new Bicicleta(2,'urbano', 'verde',[43.4396400,-3.8692900] )

Bicicleta.add(a);
Bicicleta.add(b);

module.exports = Bicicleta;

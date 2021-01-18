var Bicicleta = require("../../models/bicicleta");

/*
beforeEach(()=>{Bicicleta.allBicis=[];})

describe("Bicicleta.allBicis",()=>{
    it("Bicicletas_list comienza vacía", ()=>{
        expect(Bicicleta.allBicis.length).toBe(0);
    });
})
*/

describe("Bicicleta.add",()=>{
    it("Agrega una bicicleta", ()=>{
        var before = Bicicleta.allBicis.length;
        var bici = new Bicicleta(1,'urbano', 'rojo',[43.4296400,-3.8592900] );
        Bicicleta.add(bici);
        var after = Bicicleta.allBicis.length;
        expect(after-before).toBe(1);
        expect(Bicicleta.allBicis[after-1]).toBe(bici);
    });
})

describe("Bicicleta.findById", ()=>{
    var bici2 = new Bicicleta(2,'urbano', 'verde',[43.4396400,-3.8692900]);
    Bicicleta.add(bici2)
    it("Devuelve la bici con id 2", ()=>{
        expect(Bicicleta.findById(2).id).toBe(2);
    });
})

describe("Bicicleta.removeById",()=>{
    it("Elimina la bicicleta con id 1", ()=>{
        var bici = Bicicleta.findById(1);
        var before = Bicicleta.allBicis.length;
        Bicicleta.removeById(bici.id);
        after = Bicicleta.allBicis.length;
        expect(before-after).toBe(1);

    })
})

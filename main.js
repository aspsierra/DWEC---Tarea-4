class Empresa {
    constructor(nombre, dir, tlfno, NIF) {
        this.nombre = nombre;
        this.dir = dir;
        this.tlfno = tlfno;
        this.NIF = NIF;
    }
}

class Factura {
    constructor(id, fecha) {
        this.id = id;
        this.fecha = fecha;
    }

}

class Cliente {
    constructor(nombre, dir, tlfno, NIF) {
        this.nombre = nombre;
        this.dir = dir;
        this.tlfno = tlfno;
        this.NIF = NIF;
    }
}

function main() {
    /**
     * @type {HTMLButtonElement}
     */
    var btnEnviar = document.getElementById("btnEnviar");
    /**
     * @type {HTMLButtonElement}
     */
    var btnCrear = document.getElementById("btnCrear");
    /**
     * @type {HTMLSelectElement}
     */
    var selector = document.getElementById("selector");
    var arFacturas = []

    btnCrear.addEventListener("click", evt => {
        var label = document.createElement("label");
        var input = document.createElement("input")
        label.innerHTML = document.getElementById(selector.value).innerHTML;
        label.for = selector.value;

        input.type = "text";
        input.id = selector.value;
        input.name = selector.value;

        document.getElementById("data").appendChild(label)
        document.getElementById("data").appendChild(input);

    })
}

main()

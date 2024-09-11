function insert(num) {
    if (num === 'π') {
        document.getElementById('resultado').innerHTML += Math.PI.toFixed(3);
    } else {
        var numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + num;
    }
}
    function clean()
    {
        document.getElementById('resultado').innerHTML = "";
    }
    function back()
    {
        var resultado = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
    }
    function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;

    resultado = resultado.replace(/%/g, '/100');
    resultado = resultado.replace(/\*\*/g, '**');

    if (resultado) {
        try {
            resultado = resultado.replace(/Math.log\(/g, 'Math.log10(');
            document.getElementById('resultado').innerHTML = eval(resultado);
        } catch (error) {
            document.getElementById('resultado').innerHTML = "Erro";
        }
    } else {
        document.getElementById('resultado').innerHTML = "";
    }
}
function calcularRaizQuadrada() {
    var resultado = document.getElementById('resultado').innerHTML;
    
    if (resultado) {
        try {
            resultado = Math.sqrt(eval(resultado));
            document.getElementById('resultado').innerHTML = resultado;
        } catch (error) {
            document.getElementById('resultado').innerHTML = "Erro";
        }
    } else {
        document.getElementById('resultado').innerHTML = "";
    }
}
function calcularElevadoQuadrado() {
    var resultado = document.getElementById('resultado').innerHTML;
    
    if (resultado) {
        try {
            resultado = Math.pow(eval(resultado), 2);
            document.getElementById('resultado').innerHTML = resultado;
        } catch (error) {
            document.getElementById('resultado').innerHTML = "Erro";
        }
    } else {
        document.getElementById('resultado').innerHTML = "";
    }
}
function calcularCosseno() {
    var resultado = document.getElementById('resultado').innerHTML;
    
    if (resultado) {
        try {
            var graus = eval(resultado);
            var radianos = graus * (Math.PI / 180);
            var cosseno = Math.cos(radianos);
            document.getElementById('resultado').innerHTML = cosseno.toFixed(1);
        } catch (error) {
            document.getElementById('resultado').innerHTML = "Erro";
        }
    } else {
        document.getElementById('resultado').innerHTML = "";
    }
}

function calcularSeno() {
    var resultado = document.getElementById('resultado').innerHTML;
    
    if (resultado) {
        try {
            var graus = eval(resultado);
            var radianos = graus * (Math.PI / 180);
            var seno = Math.sin(radianos);
            document.getElementById('resultado').innerHTML = seno.toFixed(1);
        } catch (error) {
            document.getElementById('resultado').innerHTML = "Erro";
        }
    } else {
        document.getElementById('resultado').innerHTML = "";
    }
}

function calcularTangente() {
    var resultado = document.getElementById('resultado').innerHTML;
    
    if (resultado) {
        try {
            var graus = eval(resultado);
            var radianos = graus * (Math.PI / 180);
            var tangente = Math.tan(radianos);
            document.getElementById('resultado').innerHTML = tangente.toFixed(1);
        } catch (error) {
            document.getElementById('resultado').innerHTML = "Erro";
        }
    } else {
        document.getElementById('resultado').innerHTML = "";
    }
}
function calcularBhaskara() {
    var resultado = document.getElementById('resultado').innerHTML;
    
    if (resultado) {
        try {
            var coeficientes = resultado.split(',').map(parseFloat);
            if (coeficientes.length === 3) {
                var a = coeficientes[0];
                var b = coeficientes[1];
                var c = coeficientes[2];

                var delta = b * b - 4 * a * c;
                if (delta >= 0) {
                    var x1 = (-b + Math.sqrt(delta)) / (2 * a);
                    var x2 = (-b - Math.sqrt(delta)) / (2 * a);

                    document.getElementById('resultado').innerHTML = `Delta = ${delta}, x1 = ${x1}, x2 = ${x2}`;
                } else {
                    document.getElementById('resultado').innerHTML = "Delta negativo (raízes complexas)";
                }
            } else {
                document.getElementById('resultado').innerHTML = "Erro";
            }
        } catch (error) {
            document.getElementById('resultado').innerHTML = "Erro";
        }
    } else {
        document.getElementById('resultado').innerHTML = "";
    }
}
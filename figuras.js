console.group("Cuadrados");

    // Código del cuadrado
        function perimetroCuadrado(lado){
            return lado * 4
        }

        function areaCuadrado(lado){
            return lado * lado + "cm²";
        }

console.groupEnd();

console.group("Triangulos");

    // Código del triangulo
        function perimetroTriangulo(lado1, lado2, base){
            return lado1 + lado2 + base;
        }

        function areaTriangulo(base, altura){
            return (base * altura) / 2
        }

console.groupEnd();

console.group("Circulo");

    // Código del circulo
        // PI
            PI = Math.PI

        // Diametro
            function diametroCirculo(radio){
                return radio * 2;
            }
        // Circunferencia
            function perimetroCirculo(radio){
                const diametro = diametroCirculo(radio);
                return diametro * PI
            }
        // Area
            function areaCirculo(radio){
                return (radio * radio) * PI
            }

console.groupEnd();

// Interacción HTML

    // Cuadrado

        function calcularPerimetroCuadrado(){        
            const input = document.getElementById("cuadrado_input");
            const value = input.value;
            const perimetro = perimetroCuadrado(value);
            alert(perimetro + "cm")
        }

        function calcularAreaCuadrado(){ 
            const input = document.getElementById("cuadrado_input");
            const value = input.value;
            const area = areaCuadrado(value);
            alert(area)
        }
    
    // Triangulo

        function calcularPerimetroTriangulo(){
            const input1 = document.getElementById("triangulo_lado1");
            const valueLado1 = input1.value;

            const input2 = document.getElementById("triangulo_lado2");
            const valueLado2 = input2.value;

            const input3 = document.getElementById("triangulo_base");
            const valueBase = input3.value;
            
            const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase)
            alert(perimetro)
        }
        function calcularAreaTriangulo(){
            const input = document.getElementById("triangulo_input");
            const value = input.value;
            const area = areaTriangulo(value, value)
            alert(area)
        }
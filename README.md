# Primeiro-JavaScript
<!DOCTYPE html>

<html lang="pt-BR">
    
<head>
    <label for="combustivel">Valor do combustivel por litro:</label>
    <input type="number" id="combustivel"><br>
    <label for="consumo">Consumo medio por km:</label>
    <input type="number" id="consumo"><br>
    <label for="distancia">Distancia da viagem:</label>
    <input type="number" id="distancia"><br>
    <button onclick="calcular()">Calcular</button>
    <p id="resultado"></p>

    <script>
        function calcular() {
            const combustivel = parseFloat(document.getElementById("combustivel").value);
            const consumo = parseFloat(document.getElementById("consumo").value);
            const distancia = parseFloat(document.getElementById("distancia").value);
            const valorTotal = (distancia / consumo)*combustivel;
            console.log(`Você gastaria R$ ${valorTotal.toFixed(2)} com gasolina`);
        }
    </script>
    </head>
<body>
</body>
</html>

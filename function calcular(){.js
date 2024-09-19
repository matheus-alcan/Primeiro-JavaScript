function calcular(){
    
    const etanol = parseFloat(document.getElementById("etanol").value);
    const gasolina = parseFloat(document.getElementById("gasolina").value);
    const etkm = parseFloat(document.getElementById("etkm").value);
    const gakm = parseFloat(document.getElementById("gakm").value);
    const distancia = parseFloat(document.getElementById("distancia").value);
    const mensagem = "Resultado";

    function validarDados(){
        if (isNaN(etanol) || isNaN(gasolina) || isNaN(etkm) || isNaN(gakm) || isNaN(distancia) || etkm === 0 || gakm === 0){
        alert("Por favor, prencha todos os campos corretamente.");
        return false;
    }
        
    return true;
    }

    if(!validarDados()){
        return;
    }

    const valorEt = (distancia / etkm)*etanol;
    const valorGa = (distancia / gakm)*gasolina;

    document.getElementById("mensagem").innerHTML = mensagem;
    document.getElementById("mensagem").style.display = "block";
    document.getElementById("resultado").style.display= "block";
    document.getElementById("valorEt").innerHTML = "Custo com Etanol: R$"+valorEt.toFixed(2);
    document.getElementById("valorGa").innerHTML = "Custo com Gasolina: R$"+valorGa.toFixed(2);

    const maisEconomico = document.getElementById("maisEconomico");
    if(valorEt < valorGa){
        maisEconomico.innerHTML = "O Etanol é mais barato para esta viagem.";
    }else if(valorGa < valorEt){
        maisEconomico.innerHTML = "A Gasolina é mais barata para esta viagem.";
    }else{
        maisEconomico.innerHTML = "O Etanol e a Gasolina terão o mesmo gasto.";
    }
}

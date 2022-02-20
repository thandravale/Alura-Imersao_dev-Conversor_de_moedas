function Converter() {
  var valor = parseFloat(document.getElementById("valor").value);
  var moeda1 = document.getElementById("moeda1").value;
  var moeda2 = document.getElementById("moeda2").value;
  var valorConvertido = document.getElementById("valorConvertido");
  if (moeda1 == "real" && moeda2 == "dolar") {
    var conversao = valor * 5.22;
    valorConvertido.innerHTML =
      valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) +
      " = US$ " +
      conversao.toFixed(2);
  } else if (moeda1 == "real" && moeda2 == "euro") {
    var conversao = valor * 6.17;
    valorConvertido.innerHTML =
      valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) +
      " = € " +
      conversao.toFixed(2);
  } else if (moeda1 == "real" && moeda2 == "bitcoin") {
    var conversao = valor * 251745.99;
    valorConvertido.innerHTML =
      valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) +
      " = BTC " +
      conversao.toFixed(2);
  } else if (moeda1 == "dolar" && moeda2 == "real") {
    var conversao = valor * 5.22;
    valorConvertido.innerHTML =
      "US$ " +
      valor.toFixed(2) +
      " = " +
      conversao.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  } else if (moeda1 == "dolar" && moeda2 == "euro") {
    var conversao = valor * 0.84;
    valorConvertido.innerHTML =
      "US$ " + valor.toFixed(2) + " = € " + conversao.toFixed(2);
  } else if (moeda1 == "dolar" && moeda2 == "bitcoin") {
    var conversao = valor * 48195.54;
    valorConvertido.innerHTML =
      "US$ " + valor.toFixed(2) + " = BTC " + conversao.toFixed(2);
  } else if (moeda1 == "euro" && moeda2 == "real") {
    var conversao = valor * 6.17;
    valorConvertido.innerHTML =
      "€ " +
      valor.toFixed(2) +
      " = " +
      conversao.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  } else if (moeda1 == "euro" && moeda2 == "dolar") {
    var conversao = valor * 1.18;
    valorConvertido.innerHTML =
      "€ " + valor.toFixed(2) + " = US$ " + conversao.toFixed(2);
  } else if (moeda1 == "euro" && moeda2 == "bitcoin") {
    var conversao = valor * 39026.86;
    valorConvertido.innerHTML =
      "€ " + valor.toFixed(2) + " = BTC " + conversao.toFixed(2);
  } else if (moeda1 == "bitcoin" && moeda2 == "real") {
    var conversao = valor * 251745.99;
    valorConvertido.innerHTML =
      "BTC " +
      valor.toFixed(2) +
      " = " +
      conversao.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  } else if (moeda1 == "bitcoin" && moeda2 == "dolar") {
    var conversao = valor * 48195.54;
    valorConvertido.innerHTML =
      "BTC " + valor.toFixed(2) + " = US$ " + conversao.toFixed(2);
  } else if (moeda1 == "bitcoin" && moeda2 == "euro") {
    var conversao = valor * 39026.86;
    valorConvertido.innerHTML =
      "BTC " + valor.toFixed(2) + " = € " + conversao.toFixed(2);
  } else {
    alert("Informe um valor!");
  }
}

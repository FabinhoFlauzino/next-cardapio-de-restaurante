import { produtos } from "../data/data-produtos.js";

export const buscarProduto = (textoDigitado) => {
  return produtos.filter(
    (produto) =>
      produto.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
      produto.descricao.toLowerCase().includes(textoDigitado.toLowerCase())
  );
};

export const filtrarProdutos = (categoria) => {
  return produtos.filter((produto) => produto.categoria === categoria);
};

export const produtosEntradas = filtrarProdutos("Entradas");

export const formatarValor = new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" })
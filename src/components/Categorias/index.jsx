import styles from "./Categorias.module.css";

import Image from 'next/image'

import icone1 from "../../../public/assets/entrada.png";
import icone2 from "../../../public/assets/massa.png";
import icone3 from "../../../public/assets/carne.png";
import icone4 from "../../../public/assets/bebidas.png";
import icone5 from "../../../public/assets/salada.png";
import icone6 from "../../../public/assets/sobremesa.png";

const Categorias = ({ handleFiltro, botaoClicado }) => {
  return (
    <section className={styles.secao_categorias}>
      <div className={styles.container_botoes}>
        <button className={botaoClicado === "Entradas" ? styles.acenderBtn : styles.apagarBtn}
          onClick={() => handleFiltro("Entradas")}>
          <Image className={styles.icone} src={icone1} alt="ícone" />Entradas
        </button>

        <button className={botaoClicado === "Massas" ? styles.acenderBtn : styles.apagarBtn}
          onClick={() => handleFiltro("Massas")}>
          <Image className={styles.icone} src={icone2} alt="ícone" />Massas
        </button>

        <button className={botaoClicado === "Carnes" ? styles.acenderBtn : styles.apagarBtn}
          onClick={() => handleFiltro("Carnes")}>
          <Image className={styles.icone} src={icone3} alt="ícone" />Carnes
        </button>
        <button className={botaoClicado === "Bebidas" ? styles.acenderBtn : styles.apagarBtn}
          onClick={() => handleFiltro("Bebidas")}>
          <Image className={styles.icone} src={icone4} alt="ícone" />Bebidas
        </button>
        <button className={botaoClicado === "Saladas" ? styles.acenderBtn : styles.apagarBtn}
          onClick={() => handleFiltro("Saladas")}>
          <Image className={styles.icone} src={icone5} alt="ícone" />Saladas
        </button>
        <button className={botaoClicado === "Sobremesas" ? styles.acenderBtn : styles.apagarBtn}
          onClick={() => handleFiltro("Sobremesas")}>
          <Image className={styles.icone} src={icone6} alt="ícone" />Sobremesas
        </button>
      </div>
    </section>
  );
};
export default Categorias;
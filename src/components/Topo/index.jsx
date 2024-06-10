import styles from './Topo.module.css'

export default function Topo () {
  return (
    <section className={styles.hero}>
      <h1 className="font-effect">Restaurant</h1>
      <p className="text-dancing">
        De pratos clássicos a criações surpreendentes
        nosso cardápio é um requinte de sabores refinados
      </p>
    </section>
  );
}

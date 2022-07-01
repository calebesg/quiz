import styles from "../styles/components/Wording.module.css";

interface WordingProps {
  value: string;
}

export default function Wording({ value }: WordingProps) {
  return <h1 className={styles.wording}>{value}</h1>;
}

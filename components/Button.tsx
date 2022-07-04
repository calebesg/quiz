import Link from "next/link";
import styles from "../styles/components/Button.module.css";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: (e: any) => void;
}

export default function Button({ text, href, onClick }: ButtonProps) {
  const btn = () => (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );

  return <>{href ? <Link href={href}>{btn()}</Link> : btn()}</>;
}

import styles from "./styles.module.scss";

interface SubscribeButtoProps {
  priceId: String;
}

export function SubscribeButton({ priceId }: SubscribeButtoProps) {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe Now
    </button>
  );
}

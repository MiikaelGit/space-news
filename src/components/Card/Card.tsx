import styles from "./Card.module.scss";
interface CardProps {
  imgPath: string;
  title: string;
  provider: string;
  description: string;
  newsLink: string;
}

export const Card: React.FC<CardProps> = ({
  imgPath,
  title,
  provider,
  description,
  newsLink,
}) => {
  return (
    <article className={styles.card}>
      <div>
        <img className={styles.cardImage} src={imgPath} alt={title} />
      </div>
      <div>
        <h2>
          <a target="_blank" href={newsLink} rel="noreferrer">
            {title}
          </a>
        </h2>
        <small className={styles.provider}>{provider}</small>
        <p>{description}</p>
      </div>
    </article>
  );
};

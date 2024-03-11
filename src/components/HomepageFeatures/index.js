import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Import PNG images
import slika1_naslovna from '@site/static/img/logo.png';
import slika2_naslovna from '@site/static/img/logo.png'; // Replace with your PNG image path

const FeatureList = [
  {
    title: 'Naslov1',
    Image: slika1_naslovna,
    description: 'teks1',
  },
  {
    title: 'Naslov2',
    Image: slika2_naslovna,
    description: 'tekst2',
  },
];

function Feature({ Image, title, description }) {
  return (
    <div className={clsx('col col--6 col--offset-3')}>
      <div className="text--center">
        <img className={styles.featureImage} src={Image} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

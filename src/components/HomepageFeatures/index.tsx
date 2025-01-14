import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { TbDeviceDesktopCheck, TbPackageOff } from 'react-icons/tb';
import { MdAutoMode } from 'react-icons/md';
import Translate, { translate } from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({ message: 'No installation required' }),
    Svg: TbPackageOff,
    description: (
      <>
        <Translate>Just download and extract the file, and you can use it right away.</Translate>
      </>
    ),
  },
  {
    title: translate({ message: 'Supports automatic updates' }),
    Svg: MdAutoMode,
    description: (
      <>
        <Translate>No manual updating is required. Everything is done automatically.</Translate>
      </>
    ),
  },
  {
    title: translate({ message: 'No pollution of an environment' }),
    Svg: TbDeviceDesktopCheck,
    description: (
      <>
        <Translate>Minimize writes to the Windows registry.</Translate>
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center" style={{ padding: "2rem" }}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

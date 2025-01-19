import {useState} from 'react';
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Translate, { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import { FaDownload } from 'react-icons/fa6';
import { getLatestReleaseAssets } from '@site/lib/github-utils';
import Loading from '@site/src/components/Loading';
import useSWR from 'swr';
import { MdError } from 'react-icons/md';

import styles from './index.module.css';
import { countDisplayCharsLength } from '@site/lib/count-chars';

function Platform({ platform, assets }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="padding--md">
        <Heading as="h2">{platform}</Heading>
        {assets.map((asset, idx) => (
          <div key={idx}>
            <Link
              to={asset.href}
            >
              <FaDownload style={{ marginRight: "0.5rem" }} />
              {asset.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function DownloadpageHeader() {
  const {siteConfig} = useDocusaurusContext();

  const title = translate({ message: "Download" });
  const length = countDisplayCharsLength(title);

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title" style={{ fontSize: `clamp(2rem, calc((100vw - 6rem) / ${length}), 3rem)` }}>
          {title}
        </Heading>
      </div>
    </header>
  );
}

function DownloadpageBody() {

  const { data: platforms, error, isLoading } = useSWR('Floorp-Projects/Floorp-Portable', async (arg) => {
    const platforms = await getLatestReleaseAssets();

    return platforms;
  }, { revalidateOnFocus: false });

  return (
    <div className='container padding-top--md padding-bottom--lg'>
      <h1><Translate>Download Floorp Portable</Translate></h1>
      <section className={styles.platforms}>
        <div className="container">
          <div className='row'>
            {isLoading && <div style={{ marginInline: 'auto' }}><Loading width='8rem' height='8rem' /></div>}
            {error && <MdError style={{ width: '8rem', height: '8rem' }} />}
            {platforms && platforms.map((props, idx) => (
                <Platform key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default function Download(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={translate({ message: "Download" })}
      description={translate({ message: "Download Floorp Portable" })}>
      <DownloadpageHeader />
      <main>
        <DownloadpageBody />
      </main>
    </Layout>
  );
}

import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Artigos em markdown',
    Svg: require('@site/static/img/markdown.svg').default,
    description: (
      <>
       Artigos detalhando cada função, procedure e modelo re retorno API por página.
      </>
    ),
  },
  {
    title: 'UML completa',
    Svg: require('@site/static/img/UMLcompleta.svg').default,
    description: (
      <>
         Visualize toda estrutura do Payload de cada página.
      </>
    ),
  },
  {
    title: 'Endpoints',
    Svg: require('@site/static/img/api.svg').default,
    description: (
      <>
        Tenha um painel das Endpoints de sua aplicação.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center text--align:justify padding-horiz--md">
      <h3>{title}</h3>
      <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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

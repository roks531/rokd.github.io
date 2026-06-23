import React from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Comments() {
  const { colorMode } = useColorMode();
  const {siteConfig} = useDocusaurusContext();
  const giscus = siteConfig.customFields?.publicConfig?.giscus;

  if (!giscus?.repo || !giscus?.repoId || !giscus?.category || !giscus?.categoryId) {
    return null;
  }

  return (
    <div>
      <Giscus
        id="comments"
        repo={giscus.repo}
        repoId={giscus.repoId}
        category={giscus.category}
        categoryId={giscus.categoryId}
        mapping="pathname"
        strict="1"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={colorMode === 'dark' ? 'dark_tritanopia' : 'light_tritanopia'}
        lang="en"
        loading="lazy"
      />
    </div>
  );
}

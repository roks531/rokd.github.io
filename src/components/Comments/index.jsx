import React from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

export default function Comments() {
  const { colorMode } = useColorMode();

  return (
    <div>
      <Giscus
        id="comments"
        repo="roks531/rokd.github.io"  // <-- your repo here
        repoId="R_kgDOLeBI8g"           // <-- your repo id here
        category="General"              // <-- your category here
        categoryId="DIC_kwDOLeBI8s4CqSk2" // <-- your category id here
        mapping="pathname"
        strict="1"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"          // or 'top' per your preference
        theme={colorMode === 'dark' ? 'dark_tritanopia' : 'light_tritanopia'}
        lang="en"
        loading="lazy"
      />
    </div>
  );
}

/* eslint-disable no-constant-condition */

import {
  registerBookmarkApi,
  registerContentBundles,
  registerFallbackPages,
  registerMirroring,
  registerServiceWorkerController,
} from './my-451-tools-dist.js';

const serviceWorkerController = registerServiceWorkerController();

registerFallbackPages({ serviceWorkerController });

registerBookmarkApi({ serviceWorkerController });
registerContentBundles({ serviceWorkerController });

registerMirroring({ serviceWorkerController });

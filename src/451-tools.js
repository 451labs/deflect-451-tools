import {
  registerBookmarkApi,
  registerContentBundles,
  registerFallbackPages,
  registerMirroring,
  registerServiceWorkerController,
} from '451-tools';

const serviceWorkerController = registerServiceWorkerController();

registerFallbackPages({ serviceWorkerController });

registerBookmarkApi({ serviceWorkerController });

registerContentBundles({ serviceWorkerController });

registerMirroring({ serviceWorkerController });

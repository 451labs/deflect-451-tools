import {
  registerBookmarkApi,
  registerContentBundles,
  registerFallbackPages,
  registerMirroring,
  registerServiceWorkerController,
} from '451-tools';

const serviceWorkerController = registerServiceWorkerController();

registerBookmarkApi({ serviceWorkerController });
registerContentBundles({ serviceWorkerController });
registerFallbackPages({ serviceWorkerController });
registerMirroring({ serviceWorkerController });

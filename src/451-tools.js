/* eslint-disable no-constant-condition */

import {
  registerBookmarkApi,
  registerContentBundles,
  registerFallbackPages,
  registerMirroring,
  registerServiceWorkerController,
} from '451-tools';

const serviceWorkerController = registerServiceWorkerController();

registerFallbackPages({ serviceWorkerController });
registerMirroring({ serviceWorkerController });

if (self.__BOOKMARKS_ENABLED__) {
  registerBookmarkApi({ serviceWorkerController });
}

if (self.__CONTENT_BUNDLES_ENABLED__) {
  registerContentBundles({ serviceWorkerController });
}

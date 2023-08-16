import type { Preview } from "@storybook/react";

import { configureGlobalInjector, Injector } from "plume-ts-di";
import installApiModule from "../src/api/api-module";
import installComponentsModule from "../src/components/components-module";
import installServicesModule from "../src/services/services-module";
import installI18nModule from "../src/i18n/i18n-module";
import { LocaleResolver } from "../src/lib/locale-resolver/LocaleResolver";
import LocaleService from "../src/i18n/locale/LocaleService";

const injector = new Injector();
installServicesModule(injector);
installComponentsModule(injector);
installApiModule(injector);
installI18nModule(injector);
injector.getInstance(LocaleService);
injector.initializeSingletonInstances();

configureGlobalInjector(injector);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

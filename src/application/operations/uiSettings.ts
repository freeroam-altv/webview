import { createEvent, createStore } from "effector";

import { UiSettings } from "./uiSettings.d";

const setLocale = createEvent<string>();

const $uiSettings = createStore<UiSettings>({
    locale: "",
}).on(setLocale, (state, locale) => {
    return { ...state, locale };
});

export { $uiSettings, setLocale };

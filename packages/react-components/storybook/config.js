/* eslint react/jsx-filename-extension: "off" */

import { StoryContainer } from "./story-container";
import { addDecorator, addParameters, configure } from "@storybook/react";
import { customStorybookTheme } from "./theme";
import { withConsole } from "@storybook/addon-console";

// Dont move, it must be imported after storybook/react.
import { isChromatic } from "storybook-chromatic";

import "@sharegate/css-normalize";
import "@sharegate/foundation";
import "@sharegate/semantic-ui-theme";
import "@sharegate/tachyons";

// Custom font makes chromatic inconsistent and cause "false positive".
if (!isChromatic()) {
    import("@sharegate/fonts/calibre/font.css");
}

import "./style/components-presets.css";
import "./utils/stories.css";

// Option defaults.
addParameters({
    options: {
        theme: customStorybookTheme
    }
});

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator((storyFn, context) => <StoryContainer story={storyFn()} context={context} />);

const req = require.context("../components", true, /(play|specs).stories.(jsx?|js?)$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

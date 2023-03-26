var a=Object.defineProperty;var o=(e,r)=>a(e,"name",{value:r,configurable:!0});import{j as s}from"./jsx-runtime-7231d968.js";import"./index-222b10dc.js";import{H as n}from"./Header-4bbbd1c0.js";import"./iframe-0b9b1443.js";import"./index-50ee27ec.js";import"./Button-7d1fa343.js";const L={title:"Example/Header",component:n,parameters:{storySource:{source:`import React from 'react';

import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
`,locationsMap:{"logged-in":{startLoc:{col:17,line:14},endLoc:{col:47,line:14},startBody:{col:17,line:14},endBody:{col:47,line:14}},"logged-out":{startLoc:{col:17,line:14},endLoc:{col:47,line:14},startBody:{col:17,line:14},endBody:{col:47,line:14}}}},layout:"fullscreen"}},t=o(e=>s.jsx(n,{...e}),"Template"),l=t.bind({});l.args={user:{name:"Jane Doe"}};const d=t.bind({});d.args={};const x=["LoggedIn","LoggedOut"];export{l as LoggedIn,d as LoggedOut,x as __namedExportsOrder,L as default};
//# sourceMappingURL=Header.stories-1f5bae6c.js.map

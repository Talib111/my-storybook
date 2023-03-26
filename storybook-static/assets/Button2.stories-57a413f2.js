var u=Object.defineProperty;var t=(r,o)=>u(r,"name",{value:o,configurable:!0});import{j as e}from"./jsx-runtime-7231d968.js";import"./index-222b10dc.js";import"./iframe-0b9b1443.js";function n(){return e.jsx("button",{className:"bg-indigo-500 text-white text-md px-4 py-2 shadow-xl rounded-md",children:"Click me"})}t(n,"Button2");n.__docgenInfo={description:"",methods:[],displayName:"Button2"};const d={parameters:{storySource:{source:`import Button2 from "./Button2";\r
\r
export default {\r
  title:"Custom button",\r
  Component:Button2\r
}\r
\r
// export const Default = ()=> <TextInput/>\r
\r
\r
const Template = (args) => (\r
 <Button2/>\r
);\r
\r
export const CustomSource = Template.bind({});\r
CustomSource.parameters = {\r
  docs: {\r
    source: {\r
      code: \`import React from 'react'\r
\r
      function TextInput() {\r
        return (\r
         <input placeholder='hello mr'></input>\r
        )\r
      }\r
      \r
      export default TextInput\`,\r
      language: "jsx",\r
      type: "auto",\r
    },\r
  },\r
  previewTabs: { \r
    // one hides the canvas\r
    canvas: { hidden: true },\r
  },\r
};\r
\r
\r
`,locationsMap:{"custom-source":{startLoc:{col:17,line:11},endLoc:{col:1,line:13},startBody:{col:17,line:11},endBody:{col:1,line:13}}}}},title:"Custom button",Component:n},s=t(r=>e.jsx(n,{}),"Template"),a=s.bind({});a.parameters={docs:{source:{code:`import React from 'react'

      function TextInput() {
        return (
         <input placeholder='hello mr'></input>
        )
      }
      
      export default TextInput`,language:"jsx",type:"auto"}},previewTabs:{canvas:{hidden:!0}}};const l=["CustomSource"];export{a as CustomSource,l as __namedExportsOrder,d as default};
//# sourceMappingURL=Button2.stories-57a413f2.js.map

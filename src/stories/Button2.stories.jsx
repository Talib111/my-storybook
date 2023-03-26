import Button2 from "./Button2";

export default {
  title:"Custom button",
  Component:Button2
}

// export const Default = ()=> <TextInput/>


const Template = (args) => (
 <Button2/>
);

export const CustomSource = Template.bind({});
CustomSource.parameters = {
  docs: {
    source: {
      code: `import React from 'react'

      function TextInput() {
        return (
         <input placeholder='hello mr'></input>
        )
      }
      
      export default TextInput`,
      language: "jsx",
      type: "auto",
    },
  },
  previewTabs: { 
    // one hides the canvas
    canvas: { hidden: true },
  },
};



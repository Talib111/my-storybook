import Category from "./Category";

export default {
  title:"Category",
  Component:Category
}

// export const Default = ()=> <TextInput/>


const Template = (args) => (
 <Category/>
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
    // canvas: { hidden: true },
  },
};



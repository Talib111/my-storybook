import TextInput from "./TextInput";

export default {
  title:"Text mr input",
  Component:TextInput
}

// export const Default = ()=> <TextInput/>


const Template = (args) => (
 <TextInput/>
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
};



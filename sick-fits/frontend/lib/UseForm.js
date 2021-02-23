import { useState } from 'react'

export default function useForm(initial={}) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);

  function handleChange(e) {
    let { value, name, type } = e.target;
    if(type === 'number') {
      value = parseInt(value)
    }
    if(type === 'file') {
      value = e.target.files[0];
    }
    setInputs({
      // copy the existing state
      ...inputs,
      [name]: value
    })
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    // i did this differently than wes...
    let clearedState = {}
    const blankState = Object.keys(inputs).map((o) => {
      clearedState[o] = ''
    })
    setInputs(clearedState)
  }

  // return the things we want to surface from custom hook
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm
  }
}

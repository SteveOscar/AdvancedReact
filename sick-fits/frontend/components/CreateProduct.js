import useForm from '../lib/useForm';
import Form from './styles/Form';

export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    image: '',
    name: 'Nice Shoes',
    price: 34234,
    description: 'These are the best shoes'
  })

  return(
    <Form onSubmit={e => {
      e.preventDefault();
      console.log(inputs)
    }}>
      <fieldset>
        <label htmlFor='image'>
          Image
          <input
            required
            type='file'
            id='image'
            name='image'
            onChange={handleChange}>
          </input>
        </label>
        <label htmlFor='name'>
          Name
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Name'
            value={inputs.name}
            onChange={handleChange}>
          </input>
        </label>
        <label htmlFor='price'>
          Price
          <input
            type='number'
            id='price'
            name='price'
            placeholder='Price'
            value={inputs.price}
            onChange={handleChange}>
          </input>
        </label>
        <label>
          Description
          <textarea
            id='description'
            name='description'
            placeholder='Description'
            value={inputs.description}
            onChange={handleChange}>
          </textarea>
        </label>

        <button type="submit" onClick={clearForm}>+ Add Product</button>
      </fieldset>

    </Form>
  )
}

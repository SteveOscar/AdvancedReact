import useForm from '../lib/useForm';
import Form from './styles/Form';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    # which variables get passed in? and what types?
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
  ) {
    CreateProduct(
      data:{
      name:  $name
      description: $description
      price: $price
      status: "AVAILABLE"
      photo: {
        create: {
          image: $image, altText: $name
        }
      }
    }
  ) {
      id
      price
      description
      name
    }
  }
`;

export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    image: '',
    name: 'Nice Shoes',
    price: 34234,
    description: 'These are the best shoes'
  })
  const [createProduct, { loading, error, data }] = useMutation(
    CREATE_PRODUCT_MUTATION, {
    variables: inputs
  })
  return(
    <Form 
      onSubmit={async (e) => {
      e.preventDefault();
      console.log(inputs)
      // submit the input fields to the backend
      const res = await createProduct();
      console.log(res)
    }}>
      <DisplayError error={error}/>
      <fieldset disabled={loading} aria-busy={loading}>
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

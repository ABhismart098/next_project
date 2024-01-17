
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddSchool = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [image, setImage] = useState(null);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('address', data.address);
    formData.append('city', data.city);
    formData.append('image', image);

    try {
      // Replace 'YOUR_BACKEND_URL' with your actual backend URL
      await axios.post('YOUR_BACKEND_URL/api/addSchool', formData);
      console.log('School added successfully!');
    } catch (error) {
      console.error('Error adding school:', error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name:</label>
      <input {...register('name', { required: 'Name is required' })} />
      {errors.name && <p>{errors.name.message}</p>}

      <label>Address:</label>
      <input {...register('address', { required: 'Address is required' })} />
      {errors.address && <p>{errors.address.message}</p>}

      <label>City:</label>
      <input {...register('city', { required: 'City is required' })} />
      {errors.city && <p>{errors.city.message}</p>}

      <label>Image:</label>
      <input type="file" accept="image/*" onChange={handleImageChange} />

      <button type="submit">Add School</button>
    </form>
  );
};

export default AddSchool;

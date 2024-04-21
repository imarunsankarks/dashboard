
import { useState } from "react";
// import { useHistory } from 'react-router-dom';

const Create = () => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        category: '',
        color: '',
        price: '',
        image1: '',
        image2: '',
        image3: '',
        material: '',
        size: [],
        quantity: [],
        offer: '',
        status: true,
    });

    // const [isPending, setIspending] = useState(false)


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        console.log(value);

        if (name === 'size' || name === 'quantity') {
            const arrayValue = value.split(',').map((item) => item.trim());
            setFormData((prevData) => ({
                ...prevData,
                [name]: arrayValue,
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: type === 'checkbox' ? checked : value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/routes/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Error adding data to the server');
            }

            const result = await response.json();
            console.log('Data added successfully:', result);
            window.location.reload()
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} id='update-form'>
                <div className='container'>
                    <div className='row each-input-field g-4'>
                        <div className='col-4'>
                            <input type="text" name="id" onChange={handleChange} onClick={handleChange} placeholder='ID' id='form-id' />
                        </div>
                        <div className='col-4'>
                            <input type="text" name="name" onChange={handleChange} onClick={handleChange} placeholder='Name' id='form-name' />
                        </div>
                        <div className='col-4'>
                            <input type="text" name="category" onChange={handleChange} onClick={handleChange} placeholder='Category' id='form-category' />
                        </div>
                        <div className='col-4'>
                            <input type="text" name="color" onChange={handleChange} onClick={handleChange} placeholder='Color' id='form-color' />
                        </div>
                        <div className='col-4'>
                            <input type="number" name="price" onChange={handleChange} onClick={handleChange} placeholder='Price' id='form-price' />
                        </div>
                        <div className='col-4'>
                            <input type="text" name="image1" onChange={handleChange} onClick={handleChange} placeholder='Image1 location' id='form-image1' />
                        </div>
                        <div className='col-4'>
                            <input type="text" name="image2" onChange={handleChange} onClick={handleChange} placeholder='Image2 location' id='form-image2' />
                        </div>
                        <div className='col-4'>
                            <input type="text" name="image3" onChange={handleChange} onClick={handleChange} placeholder='Image3 location' id='form-image3' />
                        </div>
                        <div className='col-4'>
                            <input type="text" name="material" onChange={handleChange} onClick={handleChange} placeholder='Material' id='form-material' />
                        </div>
                        <div className='col-4'>
                            <input type="text" name="size" onChange={handleChange} onClick={handleChange} placeholder='Size (comma seperated)' id='form-size' />
                        </div>
                        <div className='col-4'>
                            <input type="text" name="quantity" onChange={handleChange} onClick={handleChange} placeholder='Quantity (comma seperated)' id='form-quantity' />
                        </div>
                        <div className='col-4'>
                            <input type="number" name="offer" onChange={handleChange} onClick={handleChange} placeholder='Offer(%)' id='form-offer' />
                        </div>
                        <div className='col-4'>
                            <label className='d-flex align-items-center check-container'>
                                <input className='m-0 w-10' type="checkbox" name="status" checked={formData.status} onChange={handleChange} onClick={handleChange} />
                                <div class="checkmark"></div>
                            </label>
                        </div>


                    </div>
                    <button type="submit">Add this product</button>
                </div>
            </form>
        </div>
    );
};

export default Create;

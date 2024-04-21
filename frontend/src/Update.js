import { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch'
// const fs = require('fs');


const Update = () => {
    const { id } = useParams();
    // console.log(id);
    const {
        loading,
        data: blogs,
    } = useFetch("/api/routes/" + id);

    if (blogs) {
        console.log(blogs.name);
    }

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [color, setColor] = useState('');
    const [price, setPrice] = useState('');
    const [image1, setImage1] = useState('')
    const [image2, setImage2] = useState('')
    const [image3, setImage3] = useState('')
    const [material, setMaterial] = useState('')
    const [size, setSize] = useState('');
    const [quantity, setQuantity] = useState('');
    const [offer, setOffer] = useState('');
    const [status, setStatus] = useState(true);

    const [isPending, setIsPending] = useState(false);
    const navigate = useHistory();



    useEffect(() => {
        if (blogs) {
            const { name, category, color, price, material, size, quantity, offer, status } = blogs;
            setName(name);
            setCategory(category);
            setColor(color);
            setPrice(price);
            // setImage1(image1);
            // setImage2(image2);
            // setImage3(image3);
            setMaterial(material);
            setSize(size);
            setQuantity(quantity);
            setOffer(offer);
            setStatus(status);
        }
    }, [blogs]);



    const handleSubmit = (e) => {
        e.preventDefault();
        const imgLocation = 'C:/Users/Rajalakshmy R/Desktop/peacock/image/Products/';
        // setImage1(imgLocation + image1);
        // setImage2(imgLocation + image2);
        // setImage3(imgLocation + image3);

        const updatedProduct = {
            name,
            category,
            color,
            price,
            image1: imgLocation + image1,
            image2: imgLocation + image2,
            image3: imgLocation + image3,
            material,
            size,
            quantity,
            offer,
            status
        };
        console.log(image1);


        setIsPending(true);

        fetch(`/api/routes/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then((response) => {
                console.log('Response from server:', response);
                setIsPending(false);
                navigate.push('/')
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === 'size' || name === 'quantity') {
            const arrayValue = value.split(',').map((item) => item.trim());
            if (name === 'size') {
                setSize(arrayValue);
            } else {
                setQuantity(arrayValue);
            }
        } else {
            if (type === 'checkbox') {
                setStatus(checked);
            } else {
                switch (name) {
                    case 'name':
                        setName(value);
                        break;
                    case 'category':
                        setCategory(value);
                        break;
                    case 'color':
                        setColor(value);
                        break;
                    case 'price':
                        setPrice(value);
                        break;
                    case 'image1':
                        setImage1(value);
                        break;
                    case 'image2':
                        setImage2(value);
                        break;
                    case 'image3':
                        setImage3(value);
                        break;
                    case 'material':
                        setMaterial(value);
                        break;
                    case 'offer':
                        setOffer(value);
                        break;
                    default:
                        break;
                }
            }
        }
    };


    return (
        <div className="container">
            {loading && <h2>Loading...</h2>}
            <h2>Update Product</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name: </label>
                <input type='text' id='name' name='name' value={name} onChange={handleChange} />
                <label htmlFor='category'>Category: </label>
                <input type='text' id='category' name='category' value={category} onChange={handleChange} />
                <label htmlFor='color'>Color: </label>
                <input type='text' id='color' name='color' value={color} onChange={handleChange} />
                <label htmlFor='price'>Price: </label>
                <input type='number' id='price' name='price' value={price} onChange={handleChange} />
                <label htmlFor='image1'>Image 1: </label>
                <input type='text' id='image1' name='image1' value={image1} onChange={handleChange} />
                <label htmlFor='image2'>Image 2: </label>
                <input type='text' id='image2' name='image2' value={image2} onChange={handleChange} />
                <label htmlFor='image3'>Image 3: </label>
                <input type='text' id='image3' name='image3' value={image3} onChange={handleChange} />
                <label htmlFor='material'>Material: </label>
                <input type='text' id='material' name='material' value={material} onChange={handleChange} />
                <label htmlFor='size'>Size: </label>
                <input type='text' id='size' name='size' value={size} onChange={handleChange} />
                <label htmlFor='quantity'>Quantity: </label>
                <input type='text' id='quantity' name='quantity' value={quantity} onChange={handleChange} />
                <label htmlFor='offer'>Offer: </label>
                <input type='text' id='offer' name='offer' value={offer} onChange={handleChange} />
                <label htmlFor='status'>Status: </label>
                <input type='checkbox' id='status' name='status' checked={status} onChange={handleChange} />
                {!isPending && <button>Submit</button>}
                {isPending && <button>Adding....</button>}
            </form>
        </div>
    );
}

export default Update;

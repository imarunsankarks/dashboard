import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = ({ blogs }) => {
    const [id, setId] = useState('')
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [color, setColor] = useState('');
    const [price, setPrice] = useState('');
    const [image1, setImage1] = useState('')
    const [image2, setImage2] = useState('')
    const [image3, setImage3] = useState('')
    const [material, setMaterial] = useState('')
    const [size, setSize] = useState([])
    const [quantity, setQuantity] = useState([])
    const [offer, setOffer] = useState('')
    const [status, setStatus] = useState(true)
    const [isPending, setIspending] = useState(false)
    const navigate = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        const newDress = { id, name, category, color, price, image1, image2, image3, material, size, quantity, offer, status };

        setIspending(true)

        fetch('/api/routes/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newDress)
        })
            .then((data) => {
                console.log('Response from server:', data);
                setIspending(false)
                navigate.push('/')
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }



    return (
        <div className="container">
            <h2>Create a new product</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='id'>id: </label>
                <input type='text' id='id' value={id} onChange={(e) => setId(e.target.value)} required />
                <label htmlFor='name'>Name: </label>
                <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} required />
                <label htmlFor='category'>category: </label>
                <input type='text' id='category' value={category} onChange={(e) => setCategory(e.target.value)} required />
                <label htmlFor='color'>color: </label>
                <input type='text' id='color' value={color} onChange={(e) => setColor(e.target.value)} required />
                <label htmlFor='price'>price: </label>
                <input type='number' id='price' value={price} onChange={(e) => setPrice(e.target.value)} required />
                <label htmlFor='image1'>image1: </label>
                <input type='text' id='image1' value={image1} onChange={(e) => setImage1(e.target.value)} required />
                <label htmlFor='image2'>image2: </label>
                <input type='text' id='image2' value={image2} onChange={(e) => setImage2(e.target.value)} required />
                <label htmlFor='image3'>image3: </label>
                <input type='text' id='image3' value={image3} onChange={(e) => setImage3(e.target.value)} required />
                <label htmlFor='material'>material: </label>
                <input type='text' id='material' value={material} onChange={(e) => setMaterial(e.target.value)} required />
                <label htmlFor='size'>size: </label>
                <input type='text' id='size' value={size} onChange={(e) => setSize(e.target.value)} required />
                <label htmlFor='quantity'>quantity: </label>
                <input type='text' id='quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
                <label htmlFor='offer'>offer: </label>
                <input type='text' id='offer' value={offer} onChange={(e) => setOffer(e.target.value)} required />
                <label htmlFor='status'>status: </label>
                <input type='checkbox' id='status' value={status} onChange={(e) => setStatus(e.target.value)} required />
                {!isPending && <button>Submit</button>}
                {isPending && <button>Adding....</button>}

            </form>
            <p>{id}</p>
            <p>{name}</p>
            <p>{category}</p>
            <p>{price}</p>
        </div>
    );
}

export default Create;
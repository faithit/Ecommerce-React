import React, { useEffect, useState } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  // Form state for add/edit
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    image: ''
  });

  // Track which product is being edited (null means add mode)
  const [editingId, setEditingId] = useState(null);

  // Fetch products from API
  const fetchProducts = () => {
    fetch('http://127.0.0.1:8000/api/products/')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle form input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submit for add or update
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.description || !form.price) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      if (editingId) {
        // Update product
        const response = await fetch(`http://127.0.0.1:8000/api/products/${editingId}/`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: form.name,
            description: form.description,
            price: parseFloat(form.price),
            image: form.image
          })
        });

        if (!response.ok) throw new Error('Failed to update product');
        alert('Product updated successfully!');
      } else {
        // Add product
        const response = await fetch('http://127.0.0.1:8000/api/products/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: form.name,
            description: form.description,
            price: parseFloat(form.price),
            image: form.image
          })
        });

        if (!response.ok) throw new Error('Failed to add product');
        alert('Product added successfully!');
      }

      // Reset form & editing state
      setForm({ name: '', description: '', price: '', image: '' });
      setEditingId(null);

      // Refresh products list
      fetchProducts();
    } catch (error) {
      console.error(error);
      alert('Error saving product');
    }
  };

  // Handle edit button click
  const handleEdit = (product) => {
    setForm({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      image: product.image || ''
    });
    setEditingId(product.id);
  };

  // Handle delete button click
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/products/${id}/`, {
        method: 'DELETE'
      });

      if (!response.ok) throw new Error('Failed to delete product');
      alert('Product deleted successfully!');
      fetchProducts();
    } catch (error) {
      console.error(error);
      alert('Error deleting product');
    }
  };

  return (
    <div className='container'>
      <h2>{editingId ? "Edit Product" : "Add Product"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          required
          value={form.name}
          onChange={handleChange}
        /><br />
        <textarea
          name="description"
          placeholder="Description"
          required
          value={form.description}
          onChange={handleChange}
        ></textarea><br />
        <input
          type="number"
          step="0.01"
          name="price"
          placeholder="Price"
          required
          value={form.price}
          onChange={handleChange}
        /><br />
        <input
          type="url"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
        /><br />
        <button type="submit">{editingId ? "Update Product" : "Add Product"}</button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setForm({ name: '', description: '', price: '', image: '' });
              setEditingId(null);
            }}
            style={{ marginLeft: '10px' }}
          >
            Cancel
          </button>
        )}
      </form>

      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.id} style={{ marginBottom: '10px' }}>
              <strong>{product.name}</strong> - {product.price} KES
              <br />
              <small>{product.description}</small><br />
              {product.image && <img src={product.image} alt={product.name} style={{ width: 100, marginTop: 5 }} />}<br />
              <button onClick={() => handleEdit(product)}>Edit</button>{' '}
              <button onClick={() => handleDelete(product.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;

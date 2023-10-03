import { useState } from 'react'

export default function ProductForm ({ image, manufacturers, categories, data, setData, handleSubmit, errors, processing }) {
    const [newManufacturer, setNewManufacturer] = useState(false)
    const [newCategory, setNewCategory] = useState(false)

    const manufacturerOptions = manufacturers.map(manufacturer => {
        return <option value={manufacturer.id} key={`manufacturer${manufacturer.id}`}>{manufacturer.name}</option>
    })
    const categoryOptions = categories.map(category => {
        return <option value={category.id} key={`category${category.id}`}>{category.name}</option>
    })

    const handleManufacturerChange = event => {
        if (event.target.value !== 'new') {
            setData('manufacturer_id', event.target.value)
        } else {
            setNewManufacturer(true)
        }
    }
    const handleCategoryChange = event => {
        if (event.target.value !== 'new') {
            setData('category_id', event.target.value)
        } else {
            setNewCategory(true)
        }
    }

    const saveNewManufacturer = event => {
        //
    }
    const saveNewCategory = event => {
        //
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col mx-auto max-w-3xl'>
            <label className='text-gray-700 text-xl tracking-wide' htmlFor='name'>NAME</label>
            <input 
                className='border-gray-300 rounded-md mt-1' 
                type='text'
                id='name' 
                value={data.name}
                onChange={e => setData('name', e.target.value)}
                required
            />
            {errors.name && <p className='text-red-500 mt-1'>{errors.name}</p>}
            <label className='text-gray-700 text-xl tracking-wide mt-8' htmlFor='manufacturer'>MANUFACTURER</label>
            {
                newManufacturer
                ? (
                    <div className='flex w-full mt-1'>
                        <input className='border-gray-300 rounded-md flex-grow' type='text' id='manufacturer' autoFocus></input>
                        <button className='bg-blue-500 hover:bg-blue-600 transition text-white rounded-md px-8' onClick={saveNewManufacturer}>SAVE</button>
                        <button className='bg-red-500 hover:bg-red-600 transition text-white rounded-md px-8' onClick={() => setNewManufacturer(false)}>CANCEL</button>
                    </div>
                ) : (
                    <select 
                        className='border-gray-300 rounded-md mt-1'
                        id='manufacturer' 
                        value={data.manufacturer_id}
                        onChange={handleManufacturerChange}
                    > 
                        {manufacturerOptions}
                        <option value='new'>New Manufacturer...</option>
                    </select>
                )
            }
            <label className='text-gray-700 text-xl tracking-wide mt-8' htmlFor='category'>CATEGORY</label>
            {
                newCategory
                ? (
                    <div className='flex w-full mt-1'>
                        <input className='border-gray-300 rounded-md flex-grow' type='text' id='category' autoFocus></input>
                        <button className='bg-blue-500 hover:bg-blue-600 transition text-white rounded-md px-8' onClick={saveNewCategory}>SAVE</button>
                        <button className='bg-red-500 hover:bg-red-600 transition text-white rounded-md px-8' onClick={() => setNewCategory(false)}>CANCEL</button>
                    </div>
                ) : (
                    <select 
                        className='border-gray-300 rounded-md mt-1'
                        id='category' 
                        value={data.category_id}
                        onChange={handleCategoryChange}
                    > 
                        {categoryOptions}
                        <option value='new'>New Category...</option>
                    </select>
                )
            }
            {errors.category && <p className='text-red-500 mt-1'>{errors.category}</p>}
            <label className='text-gray-700 text-xl tracking-wide mt-8' htmlFor='price'>PRICE ($)</label>
            <input 
                className='border-gray-300 rounded-md mt-1' 
                type='number'
                id='price' 
                value={data.price}
                onChange={e => setData('price', e.target.value)}
                required
            />
            {errors.price && <p className='text-red-500 mt-1'>{errors.price}</p>}
            <label className='text-gray-700 text-xl tracking-wide mt-8' htmlFor='image'>IMAGE</label>
            <div className='flex justify-between'>
                <input 
                    className='mt-1' 
                    type='file' 
                    id='image' 
                    accept='image/*' 
                    fileName={data.image}
                    onChange={e => setData('image', e.target.files[0])}
                />
                { image && <img className='w-28 border border-black' src={'/storage/' + image} /> }
            </div>
            {errors.image && <p className='text-red-500 mt-1'>{errors.image}</p>}
            <label className='text-gray-700 text-xl tracking-wide mt-8' htmlFor='description'>DESCRIPTION</label>
            <textarea 
                className='border-gray-300 rounded-md mt-1' 
                id='description' 
                rows='10'
                onChange={e => setData('description', e.target.value)}
                required
            >{data.description}</textarea>
            {errors.description && <p className='text-red-500 mt-1'>{errors.description}</p>}
            <button 
                className='bg-blue-500 hover:bg-blue-600 transition max-w-min px-12 py-3 mt-10 mx-auto rounded-xl text-white text-xl tracking-wide'
                disabled={processing}
            >SUBMIT</button>
        </form>
    )
}
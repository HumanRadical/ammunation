export default function ProductForm ({ image, data, setData, handleSubmit, errors, processing }) {
    return (
        <form onSubmit={handleSubmit} className='flex flex-col mx-auto max-w-3xl'>
            <label className='text-gray-700 text-xl tracking-wide' htmlFor='name'>NAME</label>
            <input 
                className='w-full border-gray-300 rounded-md mt-1' 
                type='text'
                id='name' 
                value={data.name}
                onChange={e => setData('name', e.target.value)}
                required
            />
            {errors.name && <p className='text-red-500 mt-1'>{errors.name}</p>}
            <label className='text-gray-700 text-xl tracking-wide mt-8' htmlFor='category'>CATEGORY</label>
            <input 
                className='w-full border-gray-300 rounded-md mt-1' 
                type='text' 
                id='category' 
                value={data.category}
                onChange={e => setData('category', e.target.value)}
                required
            />
            {errors.category && <p className='text-red-500 mt-1'>{errors.category}</p>}
            <label className='text-gray-700 text-xl tracking-wide mt-8' htmlFor='price'>PRICE ($)</label>
            <input 
                className='w-full border-gray-300 rounded-md mt-1' 
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
                { image && <img className='w-28 border border-black' src={'http://localhost:8000/storage/' + image} /> }
            </div>
            {errors.image && <p className='text-red-500 mt-1'>{errors.image}</p>}
            <label className='text-gray-700 text-xl tracking-wide mt-8' htmlFor='description'>DESCRIPTION</label>
            <textarea 
                className='w-full border-gray-300 rounded-md mt-1' 
                id='description' 
                rows='10'
                onChange={e => setData('description', e.target.value)}
                required
            >{data.description}</textarea>
            {errors.description && <p className='text-red-500 mt-1'>{errors.description}</p>}
            <button 
                className='bg-blue-500 max-w-min px-12 py-3 mt-10 mx-auto rounded-xl text-white text-xl tracking-wide'
                disabled={processing}
            >SUBMIT</button>
        </form>
    )
}
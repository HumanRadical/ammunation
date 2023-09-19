import { useForm } from '@inertiajs/react'

export default function FilterBar({ categories }) {
    const { data, setData, get, reset } = useForm()

    const handleSubmit = (event) => {
        event.preventDefault()
        get('/shop', { preserveState: true })
    }

    const categoryOptions = categories.map(category => {
        return <option value={category.slug} key={category.id}>{category.name}</option>
    })

    return (
        <div className='p-3 border-b border-gray-300 flex justify-center'>
            <form className='space-x-3' onSubmit={handleSubmit}>
                <label>
                    Category: <select 
                        name='category' 
                        onChange={e => setData('category', e.target.value)}>
                        <option value=''>All</option>
                        {categoryOptions}
                    </select>
                </label>
                <label>
                    Min: <input 
                        className='w-20' 
                        type='number' 
                        placeholder='$$$' 
                        name='min' 
                        value={data.minPrice} 
                        onChange={e => setData('minPrice', e.target.value)} />
                </label>
                <label htmlFor='max'>
                    Max: <input 
                        className='w-20' 
                        type='number' 
                        placeholder='$$$' 
                        name='max' 
                        value={data.maxPrice} 
                        onChange={e => setData('maxPrice', e.target.value)} />
                </label>
                <label>
                    Search: <input 
                        type='text' 
                        placeholder='Glock-19...' 
                        name='search' 
                        value={data.search}
                        onChange={e => setData('search', e.target.value)} />
                </label>
                <button className='bg-blue-500 text-white py-2 px-3 rounded border border-black'>Search</button>
            </form>
        </div>
    )
}
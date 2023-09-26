import { useForm } from '@inertiajs/react'
import { useEffect } from 'react'

export default function FilterBar({ categories, query }) {
    const { data, setData, get, processing } = useForm()

    useEffect(() => {
        query.category && setData('category', query.category)
        query.minPrice && setData('minPrice', query.minPrice)
        query.maxPrice && setData('maxPrice', query.maxPrice)
        query.search && setData('search', query.search)
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        get('/shop', { preserveState: true })
    }

    let selectedCategory = ''
    const categoryOptions = categories.map(category => {
        if (query.category === category.slug) {
            selectedCategory = category.slug
        }
        return <option value={category.slug} key={`category${category.id}`}>{category.name}</option>
    })

    return (
        <div className='p-4 border-b border-t bg-black flex justify-center'>
            <form className='space-x-3' onSubmit={handleSubmit}>
                <label>
                    Category: <select 
                        className='text-black'
                        name='category' 
                        onChange={e => setData('category', e.target.value)}
                        defaultValue={selectedCategory}>
                        <option value=''>All</option>
                        {categoryOptions}
                    </select>
                </label>
                <label>
                    Min: <input 
                        className='w-20 text-black' 
                        type='number' 
                        placeholder='$$$' 
                        name='min' 
                        value={data.minPrice} 
                        onChange={e => e.target.value > 0 ? setData('minPrice', e.target.value) : setData('minPrice', '')} />
                </label>
                <label htmlFor='max'>
                    Max: <input 
                        className='w-20 text-black' 
                        type='number' 
                        placeholder='$$$' 
                        name='max' 
                        value={data.maxPrice} 
                        onChange={e => e.target.value > 0 ? setData('maxPrice', e.target.value) : setData('maxPrice', '')} />
                </label>
                <label>
                    Search: <input 
                        className='text-black'
                        type='text' 
                        placeholder='Glock-19...' 
                        name='search' 
                        value={data.search}
                        onChange={e => setData('search', e.target.value)} />
                </label>
                <button 
                    className='bg-blue-500 text-white py-2 px-3 rounded border border-black' 
                    disabled={processing}
                    >Search
                </button>
            </form>
        </div>
    )
}
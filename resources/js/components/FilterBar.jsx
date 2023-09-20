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

    const categoryOptions = categories.map(category => {
        let isSelected = false
        if (query.category === category.slug) {
            isSelected = true
        }
        return <option value={category.slug} key={category.id} selected={isSelected}>{category.name}</option>
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
                        onChange={e => e.target.value > 0 ? setData('minPrice', e.target.value) : setData('minPrice', '')} />
                </label>
                <label htmlFor='max'>
                    Max: <input 
                        className='w-20' 
                        type='number' 
                        placeholder='$$$' 
                        name='max' 
                        value={data.maxPrice} 
                        onChange={e => e.target.value > 0 ? setData('maxPrice', e.target.value) : setData('maxPrice', '')} />
                </label>
                <label>
                    Search: <input 
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
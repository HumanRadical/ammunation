import { useForm } from '@inertiajs/react'
import { useEffect, useState } from 'react'

export default function FilterBar({ manufacturers, categories, query }) {
    const [autoSearch, setAutoSearch] = useState(false)

    const { data, setData, get, processing } = useForm()

    useEffect(() => {
        query.manufacturer && setData('manufacturer', query.manufacturer)
        query.category && setData('category', query.category)
        query.minPrice && setData('minPrice', query.minPrice)
        query.maxPrice && setData('maxPrice', query.maxPrice)
        query.search && setData('search', query.search)

        setAutoSearch(true)
    }, [])
    
    const handleSubmit = (event) => {
        event && event.preventDefault()
        get('/shop', { preserveState: true })
    }
    
    useEffect(() => {
        autoSearch && handleSubmit()
    }, [data.category, data.manufacturer])

    let selectedManufacturer = ''
    const manufacturerOptions = manufacturers.map(manufacturer => {
        if (query.manufacturer === manufacturer.slug) {
            selectedManufacturer = manufacturer.slug
        }
        return <option value={manufacturer.slug} key={`manufacturer${manufacturer.id}`}>{manufacturer.name}</option>
    })

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
                    Manufacturer: <select 
                        className='text-black'
                        name='manufacturer' 
                        onChange={e => setData('manufacturer', e.target.value)}
                        defaultValue={selectedManufacturer}>
                        <option value=''>All</option>
                        {manufacturerOptions}
                    </select>
                </label>
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
                        onBlur={handleSubmit}
                        onChange={e => e.target.value > 0 ? setData('minPrice', e.target.value) : setData('minPrice', '')} />
                </label>
                <label>
                    Max: <input 
                        className='w-20 text-black' 
                        type='number' 
                        placeholder='$$$' 
                        name='max' 
                        value={data.maxPrice} 
                        onBlur={handleSubmit}
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
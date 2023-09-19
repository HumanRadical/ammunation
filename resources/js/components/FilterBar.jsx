import { useState } from 'react'

export default function FilterBar({ categories, query }) {
    const [minVal, setMinVal] = useState(query.min)
    const [maxVal, setMaxVal] = useState(query.max)
    const [searchVal, setSearchVal] = useState(query.search)

    const categoryOptions = categories.map(category => {
        let isSelected = false
        if (query.category == category.slug) {
            isSelected = true
        }
        const categoryOption = <option value={category.slug} selected={isSelected} key={category.id}>{category.name}</option>
        return categoryOption
    })

    return (
        <div className='p-3 border-b border-gray-300 flex justify-center'>
            <form className='space-x-3' action='/shop'>
                <label>
                    Category: <select name='category'>
                        <option>Select</option>
                        {categoryOptions}
                    </select>
                </label>
                <label>
                    Min: <input className='w-20' type='number' placeholder='$$$' name='min' value={minVal} onChange={e=>
                    setMinVal(e.target.value)} />
                </label>
                <label htmlFor='max'>
                    Max: <input className='w-20' type='number' placeholder='$$$' name='max' value={maxVal} onChange={e=>
                    setMaxVal(e.target.value)} />
                </label>
                <label>
                    Search: <input type='text' placeholder='Glock-19...' name='search' value={searchVal}
                        onChange={e=> setSearchVal(e.target.value)} />
                </label>
                <button className='bg-blue-500 text-white py-2 px-3 rounded border border-black'>Search</button>
            </form>
        </div>
    )
}
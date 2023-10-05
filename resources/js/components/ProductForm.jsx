import { router } from '@inertiajs/react'
import { useEffect, useState } from 'react'
import ImageCropper from './ImageCropper'

export default function ProductForm ({ image, manufacturers, categories, data, setData, handleSubmit, errors, processing }) {
    const [newManufacturer, setNewManufacturer] = useState(false)
    const [newCategory, setNewCategory] = useState(false)
    
    const [newManufacturerName, setNewManufacturerName] = useState('')
    const [newCategoryName, setNewCategoryName] = useState('')

    const [uncroppedImageUrl, setUncroppedImageUrl] = useState(null)
    const [currentImageUrl, setCurrentImageUrl] = useState(image ? `/storage/${image}` : undefined)
    const [isCropping, setIsCropping] = useState(false)

    // WIP
    // ===================================================================
    // const [manufacturerErrors, setManufacturerErrors] = useState(false)
    // const [categoryErrors, setCategoryErrors] = useState(false)

    // useEffect(() => {
    //     if (errors.manufacturers) {
    //         setManufacturerErrors(true)
    //         setTimeout(() => {
    //             setManufacturerErrors(false)
    //         }, 3000)
    //     }
    //     if (errors.categories) {
    //         setCategoryErrors(true)
    //         setTimeout(() => {
    //             setCategoryErrors(false)
    //         }, 3000)
    //     }
    // }, [errors])
    // ===================================================================

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

    const saveNewManufacturer = () => {
        router.post('/admin/manufacturers', { name: newManufacturerName })
        setNewManufacturerName('')
        setNewManufacturer(false)
    }
    useEffect(() => {
        setData('manufacturer_id', manufacturers[manufacturers.length - 1].id)
    }, [manufacturers])

    const saveNewCategory = event => {
        router.post('/admin/categories', { name: newCategoryName })
        setNewCategoryName('')
        setNewCategory(false)
    }
    useEffect(() => {
        setData('category_id', categories[categories.length - 1].id)
    }, [categories])

    const dataURLtoFile = (dataUrl) => {
        let arr = dataUrl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[arr.length - 1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], 'image.jpeg', {type:mime});
    }

    const handleImageUpload = event => {
        setUncroppedImageUrl(URL.createObjectURL(event.target.files[0]))
        setIsCropping(true)
    }
    const saveCroppedImage = (croppedImageData) => {
        const croppedImage = dataURLtoFile(croppedImageData)
        setData('image', croppedImage)
        setCurrentImageUrl(URL.createObjectURL(croppedImage))
    }

    return (
        <>
            { isCropping && <ImageCropper imageUrl={uncroppedImageUrl} setIsCropping={setIsCropping} saveCroppedImage={saveCroppedImage} /> }
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
                            <input 
                                className='border-gray-300 rounded-md flex-grow' 
                                type='text' 
                                value={newManufacturerName}
                                onChange={e => setNewManufacturerName(e.target.value)}
                                id='manufacturer' 
                                autoFocus></input>
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
                {errors.manufacturer_id && <p className='text-red-500 mt-1'>{errors.manufacturer_id}</p>}
                {/* {manufacturerErrors && <p className='text-red-500 mt-1'>Invalid manufacturer name.</p>} */}
                <label className='text-gray-700 text-xl tracking-wide mt-8' htmlFor='category'>CATEGORY</label>
                {
                    newCategory
                    ? (
                        <div className='flex w-full mt-1'>
                            <input 
                                className='border-gray-300 rounded-md flex-grow' 
                                type='text' 
                                value={newCategoryName}
                                onChange={e => setNewCategoryName(e.target.value)}
                                id='category' 
                                autoFocus></input>
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
                {errors.category_id && <p className='text-red-500 mt-1'>{errors.category_id}</p>}
                {/* {categoryErrors && <p className='text-red-500 mt-1'>Invalid category name.</p>} */}
                <label className='text-gray-700 text-xl tracking-wide mt-8' htmlFor='price'>PRICE ($)</label>
                <input 
                    className='border-gray-300 rounded-md mt-1' 
                    type='number'
                    id='price' 
                    value={data.price}
                    onChange={e => setData('price', e.target.value)}
                    onWheel={e => e.target.blur()}
                    required
                />
                {errors.price && <p className='text-red-500 mt-1'>{errors.price}</p>}
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <label className='text-gray-700 text-xl tracking-wide mt-8' htmlFor='image'>IMAGE</label>
                        <input 
                            className='mt-1' 
                            type='file' 
                            id='image' 
                            accept='image/*' 
                            filename={data.image}
                            onChange={handleImageUpload}
                            onClick={e => e.target.value = null}
                        />
                    </div>
                    { currentImageUrl && <img className='w-28 border border-black' src={currentImageUrl} /> }
                </div>
                {errors.image && <p className='text-red-500 mt-1'>{errors.image}</p>}
                <label className='text-gray-700 text-xl tracking-wide mt-8' htmlFor='description'>DESCRIPTION</label>
                <textarea 
                    className='border-gray-300 rounded-md mt-1' 
                    id='description' 
                    rows='10'
                    value={data.description}
                    onChange={e => setData('description', e.target.value)}
                    required
                />
                {errors.description && <p className='text-red-500 mt-1'>{errors.description}</p>}
                <button 
                    className='bg-blue-500 hover:bg-blue-600 transition max-w-min px-12 py-3 mt-10 mx-auto rounded-xl text-white text-xl tracking-wide'
                    disabled={processing}
                >SUBMIT</button>
            </form>
        </>
    )
}
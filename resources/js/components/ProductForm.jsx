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
        return new File([u8arr], 'image.png', {type:mime});
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
        <div className='text-gray-700 text-xl tracking-wide uppercase'>
            { isCropping && <ImageCropper imageUrl={uncroppedImageUrl} setIsCropping={setIsCropping} saveCroppedImage={saveCroppedImage} /> }
            <form onSubmit={handleSubmit} className='flex flex-col mx-auto max-w-3xl space-y-8'>
                <label className='space-y-1'>
                    <h3>Name</h3>
                    <input 
                        className='border-gray-300 rounded-md w-full' 
                        type='text'
                        value={data.name}
                        onChange={e => setData('name', e.target.value)}
                        required
                    />
                    {errors.name && <p className='text-red-500'>{errors.name}</p>}
                </label>
                <label className='space-y-1'>
                    <h3>Manufacturer</h3>
                    {
                        newManufacturer
                        ? (
                            <div className='flex w-full'>
                                <input 
                                    className='border-gray-300 rounded-md flex-grow' 
                                    type='text' 
                                    value={newManufacturerName}
                                    onChange={e => setNewManufacturerName(e.target.value)}
                                    autoFocus></input>
                                <button className='bg-blue-500 hover:bg-blue-600 transition text-white rounded-md px-8' onClick={saveNewManufacturer}>SAVE</button>
                                <button className='bg-red-500 hover:bg-red-600 transition text-white rounded-md px-8' onClick={() => setNewManufacturer(false)}>CANCEL</button>
                            </div>
                        ) : (
                            <select 
                                className='border-gray-300 rounded-md w-full'
                                value={data.manufacturer_id}
                                onChange={handleManufacturerChange}
                            > 
                                {manufacturerOptions}
                                <option value='new'>New Manufacturer...</option>
                            </select>
                        )
                    }
                    {errors.manufacturer_id && <p className='text-red-500'>{errors.manufacturer_id}</p>}
                    {/* {manufacturerErrors && <p className='text-red-500'>Invalid manufacturer name.</p>} */}
                </label>
                <label className='space-y-1'>
                    <h3>Category</h3>
                    {
                        newCategory
                        ? (
                            <div className='flex w-full'>
                                <input 
                                    className='border-gray-300 rounded-md flex-grow' 
                                    type='text' 
                                    value={newCategoryName}
                                    onChange={e => setNewCategoryName(e.target.value)}
                                    autoFocus></input>
                                <button className='bg-blue-500 hover:bg-blue-600 transition text-white rounded-md px-8' onClick={saveNewCategory}>SAVE</button>
                                <button className='bg-red-500 hover:bg-red-600 transition text-white rounded-md px-8' onClick={() => setNewCategory(false)}>CANCEL</button>
                            </div>
                        ) : (
                            <select 
                                className='border-gray-300 rounded-md w-full'
                                value={data.category_id}
                                onChange={handleCategoryChange}
                            > 
                                {categoryOptions}
                                <option value='new'>New Category...</option>
                            </select>
                        )
                    }
                    {errors.category_id && <p className='text-red-500'>{errors.category_id}</p>}
                    {/* {categoryErrors && <p className='text-red-500'>Invalid category name.</p>} */}
                </label>
                <label className='space-y-1'>
                    <h3>Price</h3>
                    <div className='flex gap-1 w-full'>
                        <span className='my-auto'>$</span>
                        <input 
                            className='border-gray-300 rounded-md flex-grow' 
                            type='number'
                            min='0'
                            step='0.01'
                            value={data.price}
                            onChange={e => setData('price', e.target.value)}
                            onWheel={e => e.target.blur()}
                            required
                        />
                    </div>
                    {errors.price && <p className='text-red-500'>{errors.price}</p>}
                </label>
                <div className='flex justify-between'>
                    <label className='flex flex-col space-y-1 my-auto'>
                        <h3>Image</h3>
                        <input 
                            type='file' 
                            className='text-lg'
                            accept='image/*' 
                            filename={data.image}
                            onChange={handleImageUpload}
                            onClick={e => e.target.value = null}
                        />
                        {errors.image && <p className='text-red-500'>{errors.image}</p>}
                    </label>
                    { currentImageUrl && <img className='h-32 border border-black' src={currentImageUrl} /> }
                </div>
                <label className='space-y-1'>
                    <h3>Description</h3>
                    <textarea 
                        className='border-gray-300 rounded-md w-full' 
                        rows='10'
                        value={data.description}
                        onChange={e => setData('description', e.target.value)}
                        required
                    />
                    {errors.description && <p className='text-red-500'>{errors.description}</p>}
                </label>
                <button 
                    className='bg-blue-500 hover:bg-blue-600 transition max-w-min px-12 py-3 mx-auto rounded-xl text-white text-xl tracking-wide'
                    disabled={processing}
                >SUBMIT</button>
            </form>
        </div>
    )
}
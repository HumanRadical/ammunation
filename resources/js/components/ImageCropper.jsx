import { useState } from 'react'
import Cropper from 'react-easy-crop'

export default function ImageCropper () {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)

    const onCropComplete = (croppedArea, croppedAreaPixels) => {
        console.log(croppedArea, croppedAreaPixels)
    }

    return (
        <div className='fixed inset-0 flex flex-col'>
            <div className='relative h-full'>
                <Cropper
                    image="https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000"
                    crop={crop}
                    zoom={zoom}
                    aspect={1}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                />
            </div>
            <div className='bg-gray-300 flex flex-col gap-8 py-8'>
                <input
                    className='w-1/2 mx-auto appearance-none'
                    type="range"
                    value={zoom}
                    min={1}
                    max={3}
                    step={0.05}
                    onChange={e => setZoom(e.target.value)}
                />
                <div className='text-center space-x-12'>
                    <button className='px-12 py-3 text-white text-3xl rounded-md bg-blue-500 hover:bg-blue-600 transition uppercase'>Save</button>
                    <button className='px-12 py-3 text-white text-3xl rounded-md bg-red-500 hover:bg-red-600 transition uppercase'>Cancel</button>
                </div>
            </div>
        </div>
    )
}
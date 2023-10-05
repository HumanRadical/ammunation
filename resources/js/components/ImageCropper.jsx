import { useState } from 'react'
import Cropper from 'react-easy-crop'

export default function ImageCropper ({ imageUrl, setImageUrl }) {
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)

    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)

    const onCropComplete = (croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }

    const saveCroppedImage = async (imageUrl, pixelCrop) => {
        const image = new Image()
        image.src = imageUrl

        image.onload = event => {
            const canvas = document.createElement('canvas')
            const context = canvas.getContext('2d')
            if (!context) {
                return null
            }
            canvas.width = pixelCrop.width
            canvas.height = pixelCrop.height

            context.drawImage(
                image,
                pixelCrop.x,
                pixelCrop.y,
                pixelCrop.width,
                pixelCrop.height,
                0,
                0,
                pixelCrop.width,
                pixelCrop.height
            )

            setImageUrl(canvas.toDataURL())
        }
    }

    return (
        <div className='fixed inset-0 flex flex-col'>
            <div className='relative h-full'>
                <Cropper
                    image={imageUrl}
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
                    <button 
                        className='px-12 py-3 text-white text-3xl rounded-md bg-blue-500 hover:bg-blue-600 transition uppercase'
                        onClick={() => saveCroppedImage(imageUrl, croppedAreaPixels)}
                    >Save</button>
                    <button 
                        className='px-12 py-3 text-white text-3xl rounded-md bg-red-500 hover:bg-red-600 transition uppercase'
                    >Cancel</button>
                </div>
            </div>
        </div>
    )
}
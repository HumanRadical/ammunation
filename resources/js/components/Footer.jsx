import ApplicationIcon from './ApplicationIcon';

export default function Footer() {
    return (
        <footer className="p-6 bg-red-700 w-full text-white flex justify-center space-x-3">
            <ApplicationIcon className='w-10 inline' />
            <p className='my-auto'>2023 Ammunation Inc.&trade;</p>
        </footer>
    )
}
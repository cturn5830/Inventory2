import SignOut from "./SignOut"
export default function Choose(){
    return(<><SignOut/>
        <div className='flex flex-row gap-40 w-fit m-auto mt-64'>
            <a href='/Inventory'>
                <button className='px-16 py-8 bg-teal-600 text-teal-900 rounded-md text-4xl font-bold hover:bg-teal-400 duration-300'>
                    Inventory
                </button>
            </a>
            <a href='/Order'>
                <button className='px-16 py-8 bg-teal-600 text-teal-900 rounded-md text-4xl font-bold hover:bg-teal-400 duration-300'>
                    Order
                </button>
            </a>
        </div>
        </>)
}
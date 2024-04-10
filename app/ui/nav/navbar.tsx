 import Link from "next/link"

 export default function NavBar() {

    return (
        <div className="flex justify-between px-2">
            <div className="flex items-end">
                <h1 className='font-bold text-yellow-400 text-2xl mt-4'>
                    <Link href='/'>Q </Link>
                </h1>
                <div>search</div>
            </div>
            <div className="flex items-end">
                <div>links</div>
                <div>dropdown</div>
            </div>
        </div>
    )
 }
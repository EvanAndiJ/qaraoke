
//@ts-expect-error
export default function UserSummary(user) { 

    return (
        <section id='user-summary'>
        <div className='border border-green-600 relative rounded-lg'>

            <div className=' h-28'>
                <div className=''>banner</div>
                <div className='absolute top-2 right-2'>edit</div>
            </div>

            <div>
                <div  className='flex justify-between px-4'>
                    <div>PFP</div>
                    <div>edit</div>
                </div>
                <div>
                    <h1>name</h1>
                    <h2>location</h2>
                </div>
                <div>
                    <button>message etc.</button>
                </div>
            </div>
            
        </div>
        </section>
    )
}
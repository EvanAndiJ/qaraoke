'use client'

export default function LoginError({error, reset}: { 
    error: Error & { digest?: string }
    reset: () => void
  }) {
    return (
        <div>
            <h2> oops!</h2>
            <p>{error.message}</p>
            <button onClick={()=>reset()}>Try again</button>
        </div>
    )
}
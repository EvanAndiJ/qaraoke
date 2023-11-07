'use client'
import Login from "./page";

//@ts-ignore
export default function Error({error, reset}: { 
    error: Error & { digest?: string }
    reset: () => void
  }) {
    return (
        <div>
            <h2> oops!</h2>
            <p>{error.message}</p>
        </div>
    )
}
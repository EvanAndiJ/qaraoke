export function generateStaticParams() {
    return [{ room: 'ken' }, { room: 'abbey' }, { room: 'merrow' }]
}

export default function Page({ params }: { params: { room: string } }) {
    const { room } = params
    
    return (
        <h1>{room}</h1>
    )
}
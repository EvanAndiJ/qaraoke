// export function generateStaticParams() {
//     return [{ user: 'evan' }, { user: 'pat' }, { user: 'bird' }]
// }

export default function UserProfilePage({ params }: { params: { user: string } }) {
    const { user } = params
    
    return (
        <h1>{user}</h1>
    )
}
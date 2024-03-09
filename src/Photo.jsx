export default function Photo({ photo }) {
    console.log(photo)
    const { title, id } = photo;
    return (
        <div className="container">
            <h3>Title: {title}</h3>
            <p>Id: {id}</p>
        </div>
    )
}
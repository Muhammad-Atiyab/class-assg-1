export default async function AboutPage() {
    await new Promise((resolve) => {
        setTimeout(resolve, 5000)
    }
)

    return(
        <div>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aut exercitationem incidunt voluptatem et sapiente, tempore modi animi aspernatur rerum.</p>
        </div>
    )
}
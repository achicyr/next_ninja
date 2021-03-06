import Link from 'next/link'
import Image from 'next/image'

export default function RecipeCard({recipe}) {

    const {title, slug, cookingTime, thumbnail} = recipe.fields
    
    return <div className="card">
        <div className="card__featured">
            <Image 
                src={"https:"+thumbnail.fields.file.url} 
                width={thumbnail.fields.file.details.image.width} 
                height={thumbnail.fields.file.details.image.height} 
            />
        </div>
        <div className="card__content">
            <div className="info">
                <h4>{title}</h4>
                <p>Takes approx {cookingTime} minutes to make</p>
            </div>
            <div className="card__actions">
                <Link href={"/recipes/"+slug}>
                    <a>Cook this now !</a>
                </Link>
            </div>
        </div>
        {recipe.fields.title}
        <style jsx>{`
            color: white;
            .card{
                border: solid;
                border-radius: 10px;
                background: rgba(80,0,80,.7);
                padding: 10px;
            }
        `}</style>
    </div>
}

// const ProjectCard = ({ title, description }) => {
//     return (
//         <div className="text-white">
//             <h5> {title} </h5>
//             <p> {description} </p>
//         </div>
//     );
// }

export default function ProjectCard({ title, description, imgUrl }: {
    title: string;
    description: string;
    imgUrl: string;
}) {
    return (
        <div>
            <div
                className="h-52 md:h-72"
                style= {{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
                ></div>
            <div className="text-white">
                <h5>{title}</h5> 
                <p>{description}</p>
            </div>
        </div>
        
    );
}

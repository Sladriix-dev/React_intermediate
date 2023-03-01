import Card from "../../components/Card/Card"

export default function Freelances() {

    const freelanceProfiles = [
        {
            name: "John Doe",
            jobTitle: 'DevOops',
        },
        {
            name: "John Die",
            jobTitle: 'Dev Front',
        },
        {
            name: "Jeanne Biche",
            jobTitle: 'Dev Fullstack',
        },
    ]

    return (
        <div>
            <h1>Freelances</h1>
            {freelanceProfiles.map((profile, index) => (
                <Card
                    key={`${profile.name}-${index}`}
                    label={profile.jobTitle}
                    title={profile.name}
                />
            ))}
        </div>
    )
}
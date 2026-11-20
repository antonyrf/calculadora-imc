import { useEffect, useState } from "react"
import './repos.css'

const ReposList = () => {
    const [repos, setRepos] = useState([]);
    useEffect(() =>{
        fetch('https://api.github.com/users/antonyrf/repos')
        .then(res => res.json())
        .then(resJson => {
            setRepos(resJson);
        })
    }, [])
    return (
        <ul className="repositorio-container">
            {repos.map(repositorio => (
                <li className="repositorio-lista" key={repositorio.id}>
                    <div className="repositorio-info">
                        <b>Nome: </b> {repositorio.name}
                        <b>Linguagem: </b> {repositorio.language}
                    </div>
                    <a target="blank" href={repositorio.html_url}>Visitar no GitHub</a>
                </li>
            ))}
        </ul>
    )
}

export default ReposList
import './perfil.css'

const Perfil = () => {
    const usuario = {
        nome : 'Antony Rafael',
        apelido : 'antonyrf',
        avatar : 'https://github.com/antonyrf.png'

    }

    return (
        <div>
            <div class="perfil-container">
            <img className="avatar-perfil" src={usuario.avatar} />
            <h3 className="avatar-nome "> {usuario.nome}</h3>
            <h3 className='avatar-apelido'>{usuario.apelido}</h3>
            <h3 className='avatar-cargo'>Desenvolvedor Front-End Júnior</h3>
            <hr />
        </div>
        </div>
    )
}

export default Perfil;
export default function Profile(){
    return (
        <div
        //centralizando componente na tela
                style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                textAlign: "center"
                
            }}
            >


            <h1>Atividade Meu Perfil</h1>
            <img

            src="perfil.png"
            alt="Profile Picture"
            width="200"
            style={{ borderRadius: "20px" }}
            />

            <h2>Edmundo Cariolano Da Silva</h2>
            <p> Estudante de Sistemas para internet na Universidade Católica de Pernambuco. <br />
                Professor: Marcio Bueno.<br />
                Estudando React, Next.js, JavaScript, HTML e CSS.
            </p>

        </div>
    )
}
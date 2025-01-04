document.addEventListener("DOMContentLoaded", function () {

    async function latestVersion(usuario, repositorio) {
        const url = `https://api.github.com/repos/${usuario}/${repositorio}/releases/latest`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }

            const datos = await response.json();

            if (datos.tag_name) {
                const versionMsg = document.getElementById('version');
                if (versionMsg) {
                    versionMsg.textContent = `Última versión: ${datos.tag_name}`;
                }
            }

            if (datos.assets && datos.assets.length > 0) {
                return datos.assets[0].browser_download_url;
            } else {
                alert("Descarga no disponible.");
                return null;
            }
        } catch (error) {
            console.error("Error", error);
            alert("Ocurrió un error al obtener la descarga :( Intenta más tarde.");
            return null;
        }
    }

    const buttons = document.querySelectorAll('.btn');
    if (buttons.length > 0) {
        buttons.forEach(button => {
            button.addEventListener('click', async function () {
                if (this.id === 'download') {
                    window.location.href = '/WLMxWhatsapp/WLMxWSP WebPage/page/download.html';
                } else if (this.id === 'download-link') {
                    const usuario = "lTunix";
                    const repositorio = "WLMxWhatsapp";

                    const enlace = await latestVersion(usuario, repositorio);
                    if (enlace) {
                        window.location.href = enlace;
                    }
                }
            });
        });
    }

    const versionElement = document.getElementById('version');
    if (versionElement) {
        latestVersion("lTunix", "WLMxWhatsapp");
    }
});

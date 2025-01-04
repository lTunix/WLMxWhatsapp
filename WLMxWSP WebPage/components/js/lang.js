function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'es',
        autoDisplay: false
    }, 'google_translate_element');
    let isIframe = false;
    let checkElement = setInterval(() => {
        var a = document.getElementById(":0.targetLanguage").children[0];
        var iframe = document.querySelector('[id=":1.container"]')
        if (a && a.length > 0) {
            a.dispatchEvent(new Event('change')); 
            isIframe = true;
            if(iframe && isIframe) {
                a.value = navigator.language;
                a.dispatchEvent(new Event('change'));
                clearInterval(checkElement);
            }
        }
        console.log("Sigue esperando...")
    }, 500);
}
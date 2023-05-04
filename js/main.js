// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.


// MILESTONE 1 Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.



//MILESTONE 2 Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

    // variabile attiva
    let activePhoto = 0 ;

    // array con le img
    let album =  ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp", ];
    console.log(album);

// container del carosello
    const container = document.getElementById("album");

    // ciclo for che crea i div e aggiunge la classe photo 
    for(i = 0 ; i < album.length ; i++){
        // creo il div contenitore delle img
        let square = document.createElement("div");

        // aggiungo la classe photo
        square.classList.add("photo");

        // inserisco il div all interno di album 
        container.append(square);
        // inserisco img all interno del div
        square.innerHTML = `<img src="img/${album[activePhoto++]}">`;

    }

    // seleziono le foto per poterle gestire

    // imposto un indice per segnare la foto attiva al momento

    // seleziono la freccia che permetterà di mostrare le img una dopo l'altra

 

// MILESTONE 3 Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.


    // funzione al click

    // togli la classe active all'elemento attivo in quel momento

    // passare alla foto successiva

    // alla foto successiva aggiungere la classe active



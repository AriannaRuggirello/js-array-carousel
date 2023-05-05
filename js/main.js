// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.


// MILESTONE 1 Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.



//MILESTONE 2 Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

    // variabili globali
    let album ; 
    let photo ; 
    let activePhoto ; 
    let arrow;

    // array con le img
    album =  ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp", ];
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
        square.innerHTML = `<img src="img/${album[i]}">`;

    }

    // seleziono le foto per poterle gestire
        photo = document.querySelectorAll('.photo');
        console.log(photo);
    // la prima immagine deve essere active
        photo[0].classList.add('active');
        
    // imposto un indice per segnare la foto attiva al momento 
        activePhoto = 0;

    // seleziono la freccia che permetterà di mostrare le img una dopo l'altra

       arrow = document.querySelector('.arrow');
 

// MILESTONE 3 Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.


    // funzione al click
    arrow.addEventListener('click',
    function() {

        if(activePhoto < (photo.length - 1))
        {
            // togli la classe active all'elemento attivo in quel momento
            photo[activePhoto].classList.remove('active');

            // passare alla foto successiva
                activePhoto ++;

            // alla foto successiva aggiungere la classe active
                photo[activePhoto].classList.add('active');

            // se arrivo all'ultima img devo far scomparire la freccia
            if(activePhoto === (photo.length -1))
                {
                    arrow.classList.add('photo');
                    // classe photo perchè ha display none
                }
        }
    
    }
    )
    





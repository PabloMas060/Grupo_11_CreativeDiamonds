function showAlbumDetails(title, year, description,image,price) {
    console.log("Title:", title);
    console.log("Year:", year);
    console.log("Description:", description);
    const albumDetailsContainer = document.getElementById('albumDetails');

    const template = `
        <div class="row justify-content-center mx-auto">
            <div class="col-8 col-md-4 mx-auto">
                <div class="card">
                    <img src="/images/albums/image" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">title</h5>
                        <p class="card-text">year</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Género</li>
                        <li class="list-group-item"><b>PRECIO:</b> us$ 100</li>
                    </ul>
                    <div class="card-body text-center">
                        <a href="" class="btn btn-dark">Añadir al carrito</a>
                    </div>
                </div>
            </div>
            <div class="col-8 col-md-4 text-center text-md-start">
                <h6>Lista de canciones:</h6>
                <ol class="Tracklist__ol">
                    <li>"Black summer"</li>
                    <li>"Here ever after"</li>
                    <li>"Aquatic mouth dance"</li>
                    <li>"Not the one"</li>
                    <li>"Poster child"</li>
                    <li>"The great apes"</li>
                    <li>"It's only natural"</li>
                    <li>"She's a lover"</li>
                    <li>"These are the ways"</li>
                    <li>"Whatchu thinkin'"</li>
                    <li>"Bastards of light"</li>
                    <li>"White braids & pillow chair"</li>
                    <li>"One way traffic"</li>
                    <li>"Veronica"</li>
                    <li>"Let 'em cry"</li>
                    <li>"The heavy wing"</li>
                    <li>"Tangelo"</li>
                </ol>
            </div>
            <div class="col-8 col-md-4 text-center text-md-start">
                <p><b>Reseña del álbum:</b></p>
                <p>descripcion</p>

                <ul>
                    <li><b>Voz principal: </b> Anthony Kiedis</li>
                    <li><b>Guitarra y coros: </b> John Frusciante</li>
                    <li><b>Bajo: </b> Flea</li>
                    <li><b>Batería: </b> Chad Smith</li>
                </ul>
            </div>
        </div>
    `;

    albumDetailsContainer.innerHTML = template;
}
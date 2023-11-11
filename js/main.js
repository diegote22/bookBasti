const fotosContainer = document.getElementById('fotos-container');

let content = "<div class='column'>";

for(let i=0; i<20; i++){
    if(i!= 0 && (i % 5 == 0)){
        content += `</div><div class="column">
        ${getFotosElement(i+1)}`
}else{
    content += getFotosElement(i+1);
}

}

content += "</div>";

fotosContainer.innerHTML = content;

function getFotosElement(id){
    return `<a href="# class="fotos">
    <img alt="Foto ${id}" src="img/Bautismo/${id}.jpg"/>
    </a>`;
}
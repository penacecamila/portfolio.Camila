
let index = 0;
        const images = document.querySelectorAll(".teladepizzas img"); // Nome atualizado

        function changeImage(next = true) {
            images[index].classList.remove("active");
            if (next) {
                index = (index + 1) % images.length;
            } else {
                index = (index - 1 + images.length) % images.length;
            }
            images[index].classList.add("active");
        }

        function nextImage() {
            changeImage(true);
        }

        function prevImage() {
            changeImage(false);
        }
        images[index].classList.add("active");
        
        setInterval(nextImage, 4000); 


        //teste
        let currentImageIndex = 0;
const paragraphs = document.querySelectorAll('.conteudo p');
// Função para atualizar o carrossel de parágrafos
function showParagraph(index) {
    paragraphs.forEach((p, i) => {
      p.classList.remove('act');
      if (i === index) {
        p.classList.add('act');
      }
    });
    showParagraph(currentImageIndex);
}
   

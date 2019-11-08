const mainDiv = document.querySelector('.comments'),
        forwardArrow = document.querySelector('.forward-arrow'),
        backwardArrow = document.querySelector('.backwardArrow');
        feedbacks = [
            {
                name: 'Edwin Suzor, CEO',
                comment: 'Hapticmedia has consistently shown the utmost thoroughness and professionalism in all the projects they worked on for us. Furthermore, we believe that the visual quality of their 3D renderings is the best you’ll find on the market.',
            },
            {
                name: 'Edwin Suzor, CFO',
                comment: 'Hapticmedia has consistently shown the utmost thoroughness and professionalism in all the projects they worked on for us. Furthermore, we believe that the visual quality of their 3D renderings is the best you’ll find on the market.',
            },
            {
                name: 'Edwin Suzor, CM',
                comment: 'Hapticmedia has consistently shown the utmost thoroughness and professionalism in all the projects they worked on for us. Furthermore, we believe that the visual quality of their 3D renderings is the best you’ll find on the market.',
            },
            {
                name: 'Edwin Suzor, GM',
                comment: 'Hapticmedia has consistently shown the utmost thoroughness and professionalism in all the projects they worked on for us. Furthermore, we believe that the visual quality of their 3D renderings is the best you’ll find on the market.',
            }
        ]

const clearDiv = () => {
    mainDiv.innerHTML = '';
}

const forwardDisplayComment = () => {
    forwardArrow.addEventListener('click', () => {
        clearDiv();
        feedbacks.map(feedback => {
            let p = document.createElement('p');
            let h6 = document.createElement('h6');
            h6.textContent = `${feedback.name}`;
            p += `${feedback.comment}`;
            p.appendChild(h6);
            
            mainDiv.appendChild(p);

        })
    });
}

forwardDisplayComment();


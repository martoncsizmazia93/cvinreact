import React from 'react';
import styled from 'styled-components';

const Introduction = () => {
    return (
        <IntroContainer>
            <div className="section-container">
                <h1>Welcome to Biology Tutoring</h1>
                <p>
                    Szia! Ha közép- vagy emelt szintű biológia érettségire készülsz, akkor jó helyen jársz! Egyénre
                    szabott, barátságos órákat tartok, ahol csak te és én dolgozunk együtt – így minden figyelem rád
                    irányul. Célom, hogy könnyen érthetővé és izgalmassá tegyem számodra a biológiát, hogy ne csak
                    megtanuld, hanem meg is szeresd. Legyen szó középszintű alapokról vagy az emelt szint kihívásairól,
                    együtt sikeresen felkészülünk!
                </p>
            </div>
        </IntroContainer>
    );
};

export default Introduction;

// Styled Component for Introduction Section
const IntroContainer = styled.div`
    text-align: center;
    padding: 50px 0;
    background-color: #fbb04c;

    h1 {
        font-size: 2rem;
        color: #31302f;
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        margin-bottom: 20px;
    }

    p {
        font-size: 1rem;
        color: rgba(58, 55, 55, 0.82);
        font-family: 'Poppins', sans-serif;
        line-height: 1.6;
        max-width: 800px;
        margin: 0 auto;
    }
`;

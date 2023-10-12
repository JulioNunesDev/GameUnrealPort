import { styled, keyframes } from "styled-components";


const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`


const styleds = {
  boxContainer: styled.main`
    width: 100%;
    height: 100%;
    background-color: var(--color-black);
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 530px){
      height: 100dvh;
    }
  `,
  content: styled.section`
    width: 60%;
    height: 500px;
    background-color: rgba(0, 0, 0, 0.5);
    position: relative;
    ;

    @media screen and (max-width: 530px){
      height: 50%;
      
    }

    .playerComponent{
      width: 10%;
      height: 10%;
      background-color: rgba(0, 0, 0, 0.5);
      justify-content: space-around;
      align-items: center;
      display: flex;
      border-radius: 10px;
      animation: ${fadeIn} 6s ease-in-out;

      button{
      padding: 10px 10px;
      border-radius: 10px;
      border: 1px solid black;
      display: flex;
      justify-content: center;
      align-items: center;
        cursor: pointer;
      &{
      font-weight: bolder;
      font-family: var(--font-Oxa);
      font-size: 18px;
      transition: all .3s ease-in-out;
       &:hover{
        transform: scale(1.1);
      }
      }
      }
      
    }

    .demonred {
      position: absolute;
      display: flex;
      width: 120%;
      height: 100%;
      filter: drop-shadow(2px 12px 7px rgba(255, 0, 0, 0.2));
      animation: ${fadeIn} 3s ease-in-out;

      @media screen and (max-width: 1000px) {
        
        width: 120%;
        height: 120%;
      }

      @media screen and (max-width: 530px){
        top: 90px;
        width:100%;
      height: 400px;
    }
     
    @media screen and (max-width: 300px){
      width:120%;
      height: 400px;
    }
    }
    .dialog {
      position: absolute;
      top: 20px;
      right: 100px;
      width: 35%;
      height: 35%;
      filter: drop-shadow(2px 12px 7px rgba(255, 0, 0, 0.2));
      animation: ${fadeIn} 7s ease-in-out;

      @media screen and (max-width: 1000px) {
        right: 50px;
        width: 50%;
       height: 50%;
      }

      @media screen and (max-width: 530px){
        top: 50px;
        width: 70%;
      height: 50%;
    }

    @media screen and (max-width: 425px){
      top: 90px;
      right: 30px;
        width: 70%;
      height: 50%;
    }
    }
  `,
};

export default styleds;

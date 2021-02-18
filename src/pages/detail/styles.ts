import styled from 'styled-components'

const Container = styled.div`
        /* padding: 25px 40px;
    height: 100vh;
    width: 100vw;
    background-color: ${p => p.theme.bgc.primary};
    display: grid;
    grid-template-columns: 250px 1fr;
    column-gap: 20px; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-sizing: border-box;

`

// const Info_Container = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   flex: 3.5;
//   height: 80%;
//   width: ${size};
//   margin: 20px 0;
//   box-sizing: border-box;
//   .album_pic {
//   position: relative;
//     background-image: url(${(p) => p.url});
//     background-size: cover;
//     ${'' /* border-radius: 7px; */}
//     transform: scale(${p => p.hovered?1.1:1});
//     background-color: white;
//     height: ${size};
//     width: ${size};
//     ${'' /* &::before{
//       content: '';
//       position: absolute;
//       background-color: black;
//       height: ${p => p.enter?'100px':0};
//       width: 100%;
//     } */}
   
//     }
//   }
//   .text {
//     margin: 18px 0px 15px 0px;
//     font-size: 1.2em;
//     width: ${w};
//     p {
//       margin: 0;
//     }
//   }
//   .description {
//     width: ${w};
//     font-size: 0.8em;
//     opacity: 0.7;
//     height: 100px;
//     overflow: hidden;
//     margin-bottom: 20px;
//     p {
//       margin: 0;
//     }
//   }
//   .tags{
//       font-size: 10px;
//       display:  flex;
//       align-items: center;
//       justify-content: flex-start;
//       width: ${w};
//       span{
//         display:  flex;
//         height: 14px;
//         border-radius: 9px;
//         background-color: rgba(50,50,50,.5);
//         padding: 2px 10px;
//         margin: 0 5px 0 0;
//       }
//   button {
//     position: absolute;
//     left: -30px;
//     top: 10px;
//     right: ${w};
//     height: 33px;
//     border-radius:50%;
//     width: 36px;
//     outline:none;
//     opacity:.4;
//     border-radius: 5px;
//   }
// `;

export { Container } 
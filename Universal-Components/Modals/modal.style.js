import styled from "styled-components";

export const ModalStyles = styled.div`
    z-index:3;
    padding:50px 0px 0px 0px;
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    overflow:auto;
    margin: auto;
    background-color:rgb(0,0,0);
    background-color:rgba(0,0,0,0.4)}

 

        .modal-content{
            /* background-color: red; */
            /* width: 90%; */
            margin: 10px auto;
            display: flex;
            justify-content: center;

            .modal-component{
                /* margin: 30px 10px; */
            }
    
            .icon{
                z-index: 4;
                color: #fff;
                position: absolute;
                top: 0px;
                left: 0px;
                font-size: 42px;
                cursor: pointer;
                margin: 20px;
            }
        }
    


`;

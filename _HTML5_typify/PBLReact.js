import React from "react"; 
import styled from "styled-components":
function App() 
{ 
    return (
        <Desktop1
            title="typify" 
            S1X_Generated1="s1x-generated-1.png" 
            place="START" 
            shape11="shape-1-1.png" 
            shape 1 Copy1="shape-1-copy-1.png" 
            pressStartToBegin={ 
                <React.Fragment>
                Press start 
                <br />
                to begin 
                </React.Fragment>
            }
        />
    );
}
export default App:
function Desktop (props) {
    const { title, s1X_Generated, place, shape11, shape 1 Copy1, pressStartToBegin } = props;
return( 
        <div className="container-center-horizontal"> 
            <div className="desktop-1 screen"> 
                <OverlapGroup2>
                    <Title>{title}</Title> 
                    <OverlapGroup1>
                        <S1XGenerated1 src={s1X_Generated1} /> 
                        <OverlapGroup>
                            <Place> {place) </Place> 
                        </OverlapGroup> 
                        <Rectangle1></Rectangle1> 
                        <Shape11 src={shape11} /> 
                        <Menu>
                            <Rectangle3></Rectangle3> 
                            <Rectangle4></Rectangle4>
                            <Rectangle4></Rectangle4> 
                        </Menu> 
                        <Shape 1Copy1 src={shape 1Copy1} />
                        <PressStartToBegin{pressStartToBegin}</PressStartToBegin 
                    </OverlapGroup1>
                    <DownArrow /> 
                </OverlapGroup2> 
            </div> 
        </div>
    );
}
const OverlapGroup2 = styled.div
    width: 1448px;
    height: 1024px;
    position: relative;
;
const Title = styled h1
    position: absolute;
    width: 582px;
    top: 63px;
    left: 469px;
    font-family: var(--font-family-montserrat);
    font-weight: 980;
    color: var(--Malibu);
    font-size: var(--font-size-1);
    text-align: center;
    letter-spacing: 0;
;    
const OverlapGroup1 = styled div
    position: absolute;
    width: 1440px;
    height: 1824px;
    top: 0;
    left: 0;
;    
const S1XGenerated1 = styled.img
    position: absolute;
    width: 1317px;
    height: 500px;
    top: 262px;
    left: 61px;
    object-fit: cover;
;    
const OverlapGroup = styled.div 
    position: absolute;
    height: 83px;
    top: 667px;
    left: 622px;
    display: flex;
    align-items: flex-start;
    min-width: 197px;
    background-color: var(--malibu);
    border-radius: 13px;
    box-shadow: 0px 0px 33px 12px #80008040;
;    
const Place = styled.div
    width: 197px;
    min-height: 83px;
    font-family: var(--font-family-bebas_neue);
    font-weight: 480;
    color: var( --white);
    font-size: var(--font-size-s); 
    text-align: center; 
    letter-spacing: 0;
    letter-spacing: 0;
;

const Rectangle1 = styled.div
    position: absolute; 
    width: 782px; 
    height: 322px; 
    top: 399px; 
    left: 369px; 
    background-color: #e7e7e7; 
    border-radius: 23px; 
    box-shadow: 0px 0px 35px 16px #00008652;
;

const Shape11 = styled. img
    position: absolute; 
    width: 341px; 
    height: 319px; 
    top: 0; 
    left: 0; 
    object-fit: cover;
;

const Menu = styled div
    position: absolute; 
    width: 45px; 
    top: 64px; 
    left: 61px; 
    display: flex; 
    flex-direction: column; 
    align-items: flex-start; 
    min-height: 41px;
;

const Rectangle = styled.div
    width: 45px; 
    height: 11px;
    background-color: var(--white);
;

const Rectangle4 = styled.div
    width: 45px;
    height: 11px;
    margin-top: 4px;
    background-color: var(--white);
;

const Shape 1 Copy1 = styled.img
    position: absolute;
    width: 331px; 
    height: 357px; 
    top: 667px; 
    left: 1109px;
    object-fit: cover;
;

const PressStartToBegin = styled.div
    position: absolute;
    width: 583px;
    top: 359px; 
    left: 468px;
    font-family: var(--font-family-montserrat);
    font-weight: 280; 
    color: var(--malibu);
    font-size: var(--font-size-m);
    text-align: center; 
    letter-spacing: 0;
;

function DownArrow() { 
    return (
        <DownArrow>
            <Pngtreevector Right ArrowIcon42319111 src="pngtree-vector-right-arrow-icon-4231911, 1.png" />
        </DownArrow1>
    );
}    
const DownArrowl = styled.div
    position: absolute;
    height: 183px;
    top: 858px;
    left: 668px; 
    display: flex;
    padding: 16px;
    justify-content: flex-end;
    align-items: flex-end; 
    min-width: 183px; 
    background-color: #d9d9d9;
    border-radius: 51.5px;
;

const PngtreevectorRightArrowIcon42319111 = styled.img
    width: 70px;
    height: 70px;
    object-fit: cover;
;
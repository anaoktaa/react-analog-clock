import styled from 'styled-components';


export const NodeContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    transform: rotate(${({position}) => position*30}deg);
    color: white;
`;

export const ThickNode = styled.div`
    height: ${(({hourMarksWidth}) => hourMarksWidth)}px;
    width: ${(({hourMarksHeight}) => hourMarksHeight)}px;
    background-color:  ${(({hourMarksColor}) => hourMarksColor)};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`;

export const MinuteNodeContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    transform: rotate(${({position}) => position*30+position*6}deg);
    color: white;
`;

export const ThinNode = styled.div`
    height: ${(({minuteMarksWidth}) => minuteMarksWidth)}px;
    width: ${(({minuteMarksHeight}) => minuteMarksHeight)}px;
    background-color:  ${(({minuteMarksColor}) => minuteMarksColor)};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`;
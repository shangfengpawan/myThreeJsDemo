/**
 * Created by sha on 2019/7/21.
 */

function MyColorMaker(){
    var colorList = [];
    var obj = {
        getDefaultColorList: function () {
            var startRBG = {
                r:0,
                g:0,
                b:255
            }

            var retColorList = [];



            for(var i=0;i<=255;i++){
                var tmpColor = {
                    r:startRBG.r,
                    g:startRBG.g+i,
                    b:startRBG.b
                }
                retColorList.push(tmpColor)
            }

            startRBG.g = 255;

            for(var i=1;i<=255;i++){
                var tmpColor = {
                    r:startRBG.r,
                    g:startRBG.g,
                    b:startRBG.b -i
                }
                retColorList.push(tmpColor)
            }

            startRBG.b = 0;

            for(var i = 1;i<=255;i++){
                var tmpColor = {
                    r:startRBG.r + i,
                    g:startRBG.g,
                    b:startRBG.b
                }
                retColorList.push(tmpColor)
            }
            startRBG.r = 255;


            for(var i=1;i<=255;i++){
                var tmpColor = {
                    r:startRBG.r,
                    g:startRBG.g - i,
                    b:startRBG.b
                }
                retColorList.push(tmpColor)
            }

            startRBG.g = 0;

            for(var i=1;i<=255;i++){
                var tmpColor = {
                    r:startRBG.r,
                    g:startRBG.g,
                    b:startRBG.b+i
                }
                retColorList.push(tmpColor);
            }
            startRBG.b = 255;

            for(var i=1;i<=255;i++){
                var tmpColor = {
                    r:startRBG.r-i,
                    g:startRBG.g,
                    b:startRBG.b
                }
                retColorList.push(tmpColor)
            }
            startRBG.r = 0;

            colorList = retColorList;

            return retColorList;
        },
        getColor: function (startIndex, colorCnt, offset) {
            if(colorList.length == 0){
                obj.getDefaultColorList();
            }
            if(startIndex >= colorList.length){
                startIndex = startIndex % colorList.length;
            }

            colorCnt = colorCnt % (colorList.length - startIndex);

            var colorIndex = parseInt((((colorList.length - startIndex ) / colorCnt) * offset) + startIndex);

            if(colorIndex >= colorList.length){
                colorIndex = colorList.length - 1;
            }

            var retColor = {
                r:colorList[colorIndex].r,
                g:colorList[colorIndex].g,
                b:colorList[colorIndex].b
            }

            return retColor;
        }
    };

    return obj;
}

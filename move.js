function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
        element.style.zIndex = 1
    
}

    function moveWithArrowKeys(left, bottom, callback){
        let direction = null;
        let x = left;
        let y = bottom;
    
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
       
        viewportHeight = window.innerHeight;
        viewportWidth = window.innerWidth;
        console.log(viewportHeight, 'h x', viewportWidth, 'w');
        
        function moveCharacter(){ 
            if
            (direction === 'west')
                {if (x>10){
                x-=1
            }
        }
            if(direction === 'north'){
                if(y<viewportHeight-50){
                y+=1
            }
        }
            if(direction === 'east'){
                if(x <viewportWidth-50){
                x+=1
            }
        }
            if(direction === 'south'){
                if(y>70){
                y-=1
            }
        }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }
        // if element is off vw or vh then ignore

       
           
        setInterval(moveCharacter, 1)
            
        document.addEventListener('keydown', function(e){
            if(e.repeat) return;
        
            if(e.key === 'ArrowLeft'){
                direction = 'west'
            }
            if(e.key === 'ArrowUp'){
                direction = 'north'
            }
            if(e.key === 'ArrowRight'){
                direction = 'east'
            }
            if(e.key === 'ArrowDown'){
                direction = 'south'
            }
            callback(direction)
        })
        
        document.addEventListener('keyup', function(e){
            direction = null
            callback(direction)
        })
    }
    

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }        
}

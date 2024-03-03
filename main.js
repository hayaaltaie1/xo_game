let turn = 'X'
let title = document.querySelector('.title')
let squares =[];

function compare(num1,num2,num3) {
    title.innerHTML= `${squares[num1]} winner`;
        document.getElementById('item'+num1).style.background ='red'
        document.getElementById('item'+num2).style.background ='red'
        document.getElementById('item'+num3).style.background ='red'

        setInterval(()=>{
            title.innerHTML+='.'
        },1000)
        setTimeout(()=>{
            location.reload()
        },4000)
}

function winner() {
    for (let i = 1; i < 10; i++) {
       squares[i]= document.getElementById('item'+i).innerHTML; 
    }
    if (squares[1]==squares[2] && squares[2]==squares[3] && squares[1]!='') {
        compare(1,2,3)
        
    }else  if (squares[4]==squares[5] && squares[5]==squares[6] && squares[4]!='') {
        compare(4,5,6)
        
    }else  if (squares[7]==squares[8] && squares[8]==squares[9] && squares[7]!='') {
        compare(7,8,9)
        
    }else  if (squares[1]==squares[5] && squares[5]==squares[9] && squares[1]!='') {
        compare(1,5,9)
        
    }else  if (squares[3]==squares[5] && squares[5]==squares[7] && squares[3]!='') {
        compare(3,5,7)
        
    }else  if (squares[1]==squares[4] && squares[4]==squares[7] && squares[1]!='') {
        compare(1,4,7)
        
    }else  if (squares[2]==squares[5] && squares[5]==squares[8] && squares[2]!='') {
        compare(2,5,8)
        
    }else  if (squares[3]==squares[6] && squares[6]==squares[9] && squares[3]!='') {
        compare(3,6,9)
        
    } 
}

function game(id) {
    let element = document.getElementById(id)

    if (turn ==='X' && element.innerHTML=='') {
        element.innerHTML='X'
        turn= 'O'
        title.innerHTML= 'O'  
    }else if(turn='O' && element.innerHTML==''){
        element.innerHTML='O'
        turn= 'X'
        title.innerHTML= 'X' 
    }
    winner();
    
}

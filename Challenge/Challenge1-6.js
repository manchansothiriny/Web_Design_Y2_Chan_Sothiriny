function challenge1(width,height){
    let rectangleString = "";
    for(let i=0;i<height;i++){
        for(let j=0;j<width;j++){
            rectangleString += "*";
        }
        rectangleString += "\n";
    }
    return rectangleString;
}
console.log(challenge1(3,4));
console.log(challenge1(5,2));
console.log(challenge1(5,-2));

function challenge2(arr){
    let left = 0;
    let right = arr.length-1;

    while(left < right){
        let temp = arr[left];
        arr[left]=arr[right];
        arr[right]= temp;

        left++;
        right--;
    }
    return arr;
}
console.log(challenge2([20,16,15,14]));
console.log(challenge2([1,2,3,4,5]));
console.log(challenge2([]));

function challenge3(arr){
    if(arr.length === 0){
        return 0;
    }
    let sum =0;
    for (let i=0 ; i<arr.length ;i++){
        sum += arr[i];
    }
    return sum/arr.length;
    
}
console.log(challenge3([85,90,78,92]));
console.log(challenge3([10,20,30]));
console.log(challenge3([]));

function challenge4(text, char){
    let count =0;
    for(let i=0;i<text.length;i++){
        if(text[i]===char){
            count++;
        }
    }
    return count;
}
console.log(challenge4("hello world",'o'));
console.log(challenge4("aaa bbb a",'a'));
console.log(challenge4("abc",'d'));

function challenge5(text){
    let count=0;
    for(let i=0;i<text.length;i++){
        if(text[i] !== " " &&(i===0 || text[i-1]===" ")){
            count++;
        }
    }
    return count;
}
console.log(challenge5("hello world"));
console.log(challenge5("this is the best day"));
console.log(challenge5("a bb ccc dddddd e"));

function challenge6(votes){
    let A =0;
    let B=0;
    let C=0;
    for(let i=0;i<votes.length;i++){
        if(votes[i]==='A'){
            A++;
        }
        if(votes[i]==='B'){
            B++;
        }
        if(votes[i]==='C'){
            C++;
        }
    }
    if(votes.length === 0){
        return "There is not vote yet";
    }else if(A>B && A>C){
        return "A is the winner";
    }else if(B>A && B>C){
        return "B is the winner";
    }else if(C>A && C>B){
        return "C is the winner";
    }else if( A===B && A>C){
        return "A and B are both winners";
    }else if(A===C && A>B){
        return "A and C are both winners";
    }else if(B===C && B>A){
        return "B and C are both winners";
    }else{
        return " A B and C are all winners";
    }
    
    
}
console.log(challenge6(['A','B','A','C','A']));
console.log(challenge6(['A','B','B','C','A']));
console.log(challenge6([]));


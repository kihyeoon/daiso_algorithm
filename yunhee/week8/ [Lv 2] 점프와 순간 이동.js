function solution(n) {
    const isOdd = n % 2 !== 0;
    let location = 1;
    let battery = 1;
    
    // n을 반으로 나눈 값들을 배열에 넣어준다. 5000 => 2500, 1250, 625 
    const arr = [];
    
	// 위치를 1부터 시작하므로 배열의 값이 2부터 들어가도록 제한
    while(n > 3){ 
        n = Math.floor(n / 2);
        arr.push(n);
    }
    
	// 배열에 넣은 값을 따라 위치 이동! 
    // 배열의 값이 짝수면 순간이동만, 홀수면 순간이동 + 1칸 점프
    for(let i = arr.length - 1; i >= 0; i--){
        location *= 2;
                
        if(arr[i] % 2 !== 0) {
            location++;
            battery++;
        }
    }
    
    return isOdd & n !== 1 ? battery + 1 : battery;
}

/*
    📌 규칙
    n을 반으로 나눈 값이 홀수면 (위치 * 2) + 1, 짝수면 (위치 * 2)를 해줘야 한다.

    5000 -> 2500
    2500 -> 1250
    1250 -> 625
    ✔ 625 -> 624 + 1
    624 -> 312
    312 -> 156
    156 -> 78
    78 -> 39
    ✔ 39 -> 38 + 1
    38 -> 19
    ✔ 19 -> 18 + 1
    18 -> 9
    ✔ 9 -> 8 + 1
    8 -> 4
    4 -> 2
    2 -> 1
    ✔ 1 -> 0 + 1
    0
*/
function addTwoNumbers (l1, l2) {
    let a = 0;
    let b = 0;
    for(let i = l1.length - 1; i >= 0; i--) a = a * 10 + l1[i];
    for(let i = l2.length - 1; i >= 0; i--) b = b * 10 + l2[i];
    a += b;
    const ans = [];
    while (a > 0) {
        ans.push(a % 10);
        a = Math.floor(a / 10)
    }
    return ans
};
l1 = [2,4,3];
l2 = [5, 6, 4]
console.log(addTwoNumbers(l1, l2))

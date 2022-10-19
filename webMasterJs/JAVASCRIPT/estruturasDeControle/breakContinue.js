const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// break gera interferência no switch, for e while(não influência em if). Continue gera influência no for e while!

for (x in nums) {
    if (x == 5) {
        break
        // o break interrompe a sentença de código atual e passa para a próxima
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue
        // o continue interrompe a repetição atual e passa para a próxima
    }
    console.log(`${y} = ${nums[y]}`)
}

//não use essa sintaxe de externo!
externo:
for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}
for(let cont = 1; cont < 11; cont++){
    if(cont % 2 != 0 ) continue;
    console.log(cont);
}
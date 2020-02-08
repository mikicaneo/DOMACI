let n = 5;
    let poklopac = '#'+' '.repeat(n - 1);
    console.log(poklopac);
    for (let i = 0; i < n - 1; i++) {
        let row = '#'.repeat(i+1) + '#'+' '.repeat(n - i-2) ;
        console.log(row);
    }
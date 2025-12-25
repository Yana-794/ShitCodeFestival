function missionObliviate(t, prophecies) {
    function expectoPatronum(n, x, incantations) {
        let currentPosition = x;
        let patronusZeros = 0;
        for (let i = 0; i < n; ++i) {
            currentPosition += incantations[i] === 'L' ? -1 : 1;
            if (currentPosition === 0) patronusZeros++;
        }
        return patronusZeros;
    }

    function protegoCount(n, x, k, incantations) {
        let totalProtegos = 0;
        let cycleProphecy = n;
        let protegosPerProphecy = expectoPatronum(cycleProphecy, x, incantations);
        let propheciesCompleted = Math.floor(k / cycleProphecy);
        let remainingIncantations = k % cycleProphecy;

        totalProtegos += propheciesCompleted * protegosPerProphecy;

        
        let wizardPosition = x;
        for (let i = 0; i < remainingIncantations; ++i) {
            wizardPosition += incantations[i] === 'L' ? -1 : 1;
            if (wizardPosition === 0) totalProtegos++;
        }

        return totalProtegos;
    }

    return prophecies.map((prophecy) =>
        protegoCount(prophecy.n, prophecy.x, prophecy.k, prophecy.s)
    ).join("\n");
}


let magicalScrolls = [
    { n: 3, x: 2, k: 5, s: 'LLR' },
    { n: 2, x: -1, k: 8, s: 'RL' },
    { n: 4, x: -2, k: 5, s: 'LRRR' },
    { n: 5, x: 3, k: 7, s: 'LRRLL' },
    { n: 1, x: 1, k: 1, s: 'L' },
    { n: 3, x: -1, k: 4846549234412827, s: 'RLR' }
];

let prophecyRevelation = missionObliviate(magicalScrolls.length, magicalScrolls);
console.log(prophecyRevelation);
console.log("Expelliarmus!");
const TechRadar = require('../libs/tech-radar');

describe('Testing excel', () => {
    const radar = new TechRadar('./radar.csv');

    beforeAll(() => {
        radar.map();
    });

    it('Should work', () => {
        console.log(radar.getCompetencies());
    });
});

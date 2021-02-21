import curDateTime from "../../../js/utils/time/curDateTime";

test('test animation merge for animations', () => {
    const dateString = curDateTime();
    const date = dateString.split('-')
    expect(date[0].length).toBeLessThanOrEqual(8)
    expect(date[0].length).toBeGreaterThanOrEqual(6)
    expect(date[1].length).toBeLessThanOrEqual(9)
    expect(date.length).toEqual(2)
});
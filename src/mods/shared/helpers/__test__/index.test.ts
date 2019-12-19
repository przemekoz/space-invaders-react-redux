import { isInArea } from "..";

describe( "shared/helpers isInArea()", () => {
  const a1 = ['1x1', '2x2'];
  const a2 = ['3x3', '4x4'];
  const a3 = ['1x1', '3x3'];
  const a4 = ['0x0', '3x3'];
  
  it('should return true', () => {
    expect( isInArea(a1, a3) ).toBeTruthy();
    expect( isInArea(a3, a1) ).toBeTruthy();
  });
})

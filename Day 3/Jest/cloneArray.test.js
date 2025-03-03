const cloneArray=require('./cloneArray')

test('perfectly clones the array',()=>{
    const array=[1,2,4,5]
    expect(cloneArray(array)).toEqual(array);
    expect(cloneArray(array)).not.toBe(array);
})
import {expect} from 'chai';
import {add,multiply} from './math.js';
describe('Math functions',function(){
    describe('addition',function(){
        it('should add numbers correctly',function(){
            const res=add(5,6);
            expect(res).to.equal(11);//assertion using chai
        })
    })

    describe('multiplication',function(){
        it('should multiply two numbers correctly',function(){
            const result=multiply(7,9);
            expect(result).to.equal(63);
        })
    })
})
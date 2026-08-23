class MinStack {
    constructor() {
        this.minStack=[]
        this.min=[]
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.minStack.push(val)
        if(this.min.length===0||val<=this.min[this.min.length-1]) this.min.push(val)
        return null
    }

    /**
     * @return {void}
     */

    
    pop() {
        let b=this.minStack.pop()
        if(this.min.length===0||b===this.min[this.min.length-1]) this.min.pop()
        return null
    }

    /**
     * @return {number}
     */
    
    top() {
        let a=this.minStack[this.minStack.length-1]
        return a
    }

    /**
     * @return {number}
     */
    
    getMin() {
        return this.min[this.min.length-1]
    }
}

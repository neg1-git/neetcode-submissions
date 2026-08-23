class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        // 1. Glue the data together so we don't lose track of which speed belongs to which car
        let cars = [];
        for (let i = 0; i < position.length; i++) {
            cars.push({ pos: position[i], spd: speed[i] });
        }

        // 2. Sort cars starting from the finish line (closest to target first)
        cars.sort((a, b) => b.pos - a.pos);

        // The stack will hold the arrival times of the fleet leaders
        let stack = [];

        // 3. Process each car one by one
        for (let i = 0; i < cars.length; i++) {
            // Formula: Time = Distance / Speed
            let time = (target - cars[i].pos) / cars[i].spd;
            
            // If the stack is empty, this is the first car (closest to target), so it's a leader.
            // If this car takes MORE time than the leader ahead of it, it is too slow to catch up. 
            // Therefore, it becomes the leader of a brand new fleet.
            if (stack.length === 0 || time > stack[stack.length - 1]) {
                stack.push(time);
            }
            // (If the time was LESS than or EQUAL to the leader, it crashed into them. 
            // We literally do nothing, discarding its time because it is now part of the leader's fleet).
        }

        // The number of leaders in the stack is exactly the number of fleets
        return stack.length;
    }
}

/**
 * A* path finding algorithm.
 */

Lowtek.aStar = {};

/*
  All aStar methods operate on nodes, which must contain the following attributes:
  - x
  - y
  - g
  - h
  - f
  - state
  - parent
*/

Lowtek.aStar.PathFinder = function(start, goal, grid, allowDiagonalMoves) {
    var height = grid.length;
    var width = grid[0].length;
    var open = new Lowtek.aStar.PriorityQueue(height * width); // Worst case; can probably be optimised
    var cache = new Array(height * width);

    var STATE_UNKNOWN = 0, STATE_OPEN = 1, STATE_CLOSED = 2;
    var SQRT2 = Math.sqrt(2);
    
    var path = null;
    var info = null;

    this.getInfo = function() { return info; };
    this.getPath = function() { return path; };

    var reconstructPath = function(node) {
        path = [];
        
        do {
            path.push(node);
        }
        while (node = node.parent);

        path.reverse();
    };

    var distanceToGoal = function(node) {
        // FIXME: Dead code, but kept for clarity / if algorithm is to support varying terrain cost in the future
        var dx = node.x < goal.x ? goal.x - node.x : node.x - goal.x;  // abs
        var dy = node.y < goal.y ? goal.y - node.y : node.y - goal.y;  // abs
        
        // D * (dx + dy) + (D2 - 2*D) * min(dx, dy)   Original
        return dx + dy + (SQRT2 - 2) * (dx < dy ? dx : dy); // Optimised 
    };

    this.init = function() {
	// FIXME: Fix the distance function so that it works both with and without diagonal moves
        var dx = start.x < goal.x ? goal.x - start.x : start.x - goal.x;  // abs
        var dy = start.y < goal.y ? goal.y - start.y : start.y - goal.y;  // abs
        
        start.state = STATE_OPEN;
        start.g = 0;
        start.h = dx + dy + (SQRT2 - 2) * (dx < dy ? dx : dy)
        start.f = start.g + start.f;
        open.insert(start);

        info = { steps: 0, time: 0 };
    };

    this.getData = function() {
        return { open: open.getData(), cache: cache };
    };

    this.debug = function() {
        open.debug();
    };

    this.findPath = function(steps) {
        var current, neighbours, dx, dy, n;

        // FIXME: Timing is for demo only
        var time = new Date();

        while (steps--) { // loop the number of asked steps
            info.steps++; // FIXME: For demo only
            q = open.remove();
            if (!q) {
                // Indicate failure to find path
                info.time += new Date() - time // FIXME: only for demo
                return false;
            }

            neighbours = [];

            // Left side
            if (q.x > 0) {
                if (allowDiagonalMoves && q.y > 0 && grid[q.y - 1][q.x - 1].isOpen()) {
                    neighbours.push({ x: q.x - 1, y: q.y - 1, parent: q });
                }
                if (grid[q.y][q.x - 1].isOpen()) {
                    neighbours.push({ x: q.x - 1, y: q.y, parent: q });
                }
                if (allowDiagonalMoves && q.y < height - 1 && grid[q.y + 1][q.x - 1].isOpen()) {
                    neighbours.push({ x: q.x - 1, y: q.y + 1, parent: q });
                }
            }
            
            // Middle
            if (q.y > 0 && grid[q.y - 1][q.x].isOpen()) {
                neighbours.push({ x: q.x, y: q.y - 1, parent: q });
            }
            if (q.y < height - 1 && grid[q.y + 1][q.x].isOpen()) {
                neighbours.push({ x: q.x, y: q.y + 1, parent: q });
            }
            
            // Right side
            if (q.x < width - 1) {
                if (allowDiagonalMoves && q.y > 0 && grid[q.y - 1][q.x + 1].isOpen()) {
                    neighbours.push({ x: q.x + 1, y: q.y - 1, parent: q });
                }
                if (grid[q.y][q.x + 1].isOpen()) {
                    neighbours.push({ x: q.x + 1, y: q.y, parent: q });
                }
                if (allowDiagonalMoves && q.y < height - 1 && grid[q.y + 1][q.x + 1].isOpen()) {
                    neighbours.push({ x: q.x + 1, y: q.y + 1, parent: q });
                }
            }
            
            for (var i = 0; i < neighbours.length; i++) {
                n = neighbours[i];

                if (n.x == goal.x && n.y == goal.y) {
                    reconstructPath(n);
                    q.state = STATE_CLOSED; // FIXME: only for demo
                    cache[q.y*width + q.x] = q; // FIXME: only for demo
                    info.time += new Date() - time // FIXME: only for demo
                    return true;
                }

                n.g = q.g + ((n.x == q.x || n.y == q.y) ? 1 : SQRT2);
                
                dx = n.x < goal.x ? goal.x - n.x : n.x - goal.x;
                dy = n.y < goal.y ? goal.y - n.y : n.y - goal.y;
                n.h = dx + dy + (SQRT2 - 2) * (dx < dy ? dx : dy);

                n.f = n.g + n.h;

                if ((c = cache[n.y*width + n.x]) && c.f <= n.f) {
                    continue;
                }
                
                n.state = STATE_OPEN;
                open.insert(n);
                cache[n.y*width + n.x] = n;
            }
            q.state = STATE_CLOSED;
        }    

        info.time += new Date() - time // FIXME: only for demo
        return null;
    }
}


/**
 * Priority queue implemented using a min heap.  Each node will be sorted based on its "f" attribute.
 *
 * Things done to optimise the code:
 * - iterative instead of recursive
 * - use non-function alternatives (eg., x / y | 0 instead of Math.round(x/y))
 * - inline code (like swapping two array elements)
 * - use 1-based queue (first element is always there and ignored) for fewer ops to find parent
 */
Lowtek.aStar.PriorityQueue = function(chunksize) {
    chunksize = chunksize || 1000;

    // var == private, this == public
    var queue = new Array(chunksize+1); // Preallocated array is loads faster than push/pop
    // FIXME: Do test on ideal queue size
    var index = 1; // which array index will the next node be insert on, index on 1 instead of 0 for fewer math ops
    var watermark = 0; // for testing

    this.debug = function() {
        console.log(watermark, index, queue);
    };

    this.getData = function() {
        return { queue: queue, index: index };
    };

    this.isEmpty = function() {
        return index == 1;
    };

    this.insert = function(node) {
        queue[index++] = node;
        // FIXME: if index == length of array, allocate a bigger chunk of array
        if (index == chunksize+1) console.log('warning, queue reached max size, performance will be impacted');
        if (index > watermark) watermark = index;

        // bubble-up
        var idx = index - 1;

        while (idx > 1) {
            var parentIdx = idx / 2 | 0; // round down

            // node "loses" if it has higher f; this means a new node with same f "wins"
            if (queue[idx].f > queue[parentIdx].f) {
                break; // node is already in the right spot
            }

            var tmp = queue[idx];
            queue[idx] = queue[parentIdx];
            queue[parentIdx] = tmp;
            idx = parentIdx;
        }
    };

    this.remove = function() {
        var ret;

        if (index == 1) {
            return null;
            //throw "No elements left in queue.";
        }

        ret = queue[1];
        queue[1] = queue[--index];

        // bubble-down
        var idx = 1, swap;
        var node = queue[idx];

        while (idx*2 <= index) {
            if (idx*2 + 1 <= index) { // 2 child nodes
                // pick lowest child
                var left, right;

                if ((left = queue[idx*2].f) <= (right = queue[idx*2 + 1].f)) {
                    if (node.f < left) {
                        // node is in right spot
                        break
                    }

                    swap = idx*2
                }
                else {
                    if (node.f < right) {
                        // node is in right spot
                        break
                    }

                    swap = idx*2 + 1
                }
            }
            else { // only 1 child node
                if (node.f < queue[idx*2]) {
                    // node is in right spot
                    break;
                }
                
                swap = idx*2;
            }

            queue[idx] = queue[swap];
            queue[swap] = node;
            idx = swap;
        }

        return ret;
    };
};

Lowtek.aStar.PriorityQueue_test = function() {
    // Add a bunch of random numbers
    // remove until empty
    // verify that the number removed was always higher than or equal to previous number
    // verify that the set of removed numbers is identical to the set of added numbers
    var nodes = [];
    var pq = new Lowtek.aStar.PriorityQueue(100);
    for (var i = 0; i < 100; i++) {
        var number = Math.floor(Math.random() * 1000);
        if (nodes[number]) {
            nodes[number]++;
        }
        else {
            nodes[number] = 1;
        }
        pq.insert({f:number});
    }
    var previous = -1;
    var node;

    //pq.debug();

    while (node = pq.remove()) {
        //console.log(node);
        if (node.f < previous) {
            console.log('number out of order');
        }
        previous = node.f
        if (!nodes[node.f]) {
            console.log('number not found or returned too many times');
        }
        else {
            nodes[node.f]--;
        }
    }
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i]) {
            console.log('number not returned');
        }
    }
    console.log("Test completed");
};
